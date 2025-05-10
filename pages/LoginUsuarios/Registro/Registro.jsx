import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Pressable, Image } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styles from './RegistroStyles';
import { CartContext } from '../../../Context/Context';
import { addDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { create, db, login } from '../../../firebaseConfig';
import * as ImagePicker from 'expo-image-picker';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import { Picker } from '@react-native-picker/picker';

// ✅ Validación con Yup                
const RegistroSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email no válido')
    .required('El email es requerido'),
  password: Yup.string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('La contraseña es requerida'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
    .required('La confirmación de la contraseña es requerida'),
  tipoUsuario: Yup.string()
    .required('Selecciona un país o idioma'),
});

const Registro = ({ navigation }) => {
  const { userRegistro, setUserRegistro, setUsuarioOn, setUserOnline, idiomaActual, setIdiomaActual } = useContext(CartContext);
  const [imagen, setImagen] = useState(null);

  const verificarUsuarioExistente = async (email) => {
    const userColecction = collection(db, "usuarios");
    const q = query(userColecction, where("email", "==", email));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  };

  const crearUsuario = async (usuario) => {
    try {
      const usuarioExistente = await verificarUsuarioExistente(usuario.email);
      if (usuarioExistente) {
        showMessage({
          message: 'Usuario ya registrado',
          description: 'El email ingresado ya está en uso.',
          type: 'danger',
        });
        return;
      }

      await create(usuario.email, usuario.password);
      setUserOnline({ email: usuario.email });
      await login(usuario.email, usuario.password, setUsuarioOn);

      const userColecction = collection(db, "usuarios");
      await addDoc(userColecction, usuario);

      showMessage({
        message: 'Registro exitoso',
        description: '¡Usuario creado correctamente!',
        type: 'success',
      });

    } catch (error) {
      showMessage({
        message: 'Error en el registro',
        description: error.message || 'Algo salió mal. Inténtalo de nuevo.',
        type: 'danger',
      });
    }
  };

  const openImagePicker = async () => {
    let permisos = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permisos.granted) {
      alert("Permisos necesarios para acceder a la cámara");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync();
    if (!result.canceled) {
      let uri = result.assets[0].uri;
      setImagen(uri);
    }
  };

  const EnviarRegistroUsuario = async (values) => {
   await setIdiomaActual(values.tipoUsuario)
    const datosCompletos = {
      ...userRegistro, // mantiene propiedades previas
      email: values.email.toLowerCase(),
      password: values.password,
      pais: values.tipoUsuario,
      access: false,
      codigoAcceso: "BLC2831"
    };

    setUserRegistro(datosCompletos); // opcional si quieres mantenerlo en contexto
    await crearUsuario(datosCompletos); // ← envías el objeto completo
  };

  return (
    <View style={styles.container__inicioSesion}>
      <Image
        width={230}
        height={45}
        source={{
          uri: "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1726996815/APP%20ALFOMBRA%20DE%20FUTBOL%20AMAZON/icon_xoqflq.jpg"
        }}
      />

      <Formik
        initialValues={{
          email: '',
          password: '',
          repeatPassword: '',
          tipoUsuario: '',
        }}
        validationSchema={RegistroSchema}
        onSubmit={values => EnviarRegistroUsuario(values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          setFieldValue
        }) => (
          <View style={styles.container__form}>
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              style={styles.input}
              placeholderTextColor="white"
              placeholder="Email"
            />
            {touched.email && errors.email && (
              <Text style={{ color: 'red' }}>{errors.email}</Text>
            )}

            <TextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              style={styles.input}
              placeholderTextColor="white"
              placeholder="Password"
              secureTextEntry
            />
            {touched.password && errors.password && (
              <Text style={{ color: 'red' }}>{errors.password}</Text>
            )}

            <TextInput
              onChangeText={handleChange('repeatPassword')}
              onBlur={handleBlur('repeatPassword')}
              value={values.repeatPassword}
              style={styles.input}
              placeholderTextColor="white"
              placeholder="Repeat password"
              secureTextEntry
            />
            {touched.repeatPassword && errors.repeatPassword && (
              <Text style={{ color: 'red' }}>{errors.repeatPassword}</Text>
            )}

            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={values.tipoUsuario}
                onValueChange={(itemValue) => {
                  setFieldValue('tipoUsuario', itemValue);
                }}
                dropdownIconColor="white"
                style={styles.picker}
              >
                <Picker.Item label="Select language" value="" />
                <Picker.Item label="Español (España)" value="espana" />
                <Picker.Item label="Français (France)" value="francia" />
                <Picker.Item label="Deutsch (Deutschland)" value="bandera" />
                <Picker.Item label="Italiano (Italia)" value="italia" />
                <Picker.Item label="Nederlands (Nederland)" value="paises bajos" />
                <Picker.Item label="English (United States)" value="inglaterra" />
              </Picker>
            </View>
            {touched.tipoUsuario && errors.tipoUsuario && (
              <Text style={{ color: 'red' }}>{errors.tipoUsuario}</Text>
            )}

            <Pressable onPress={handleSubmit} style={styles.botonLoginUsuario}>
              <Text style={styles.botonText}>Registrar</Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Registro;
