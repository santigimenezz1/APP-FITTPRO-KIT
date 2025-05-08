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

// Esquema de validación con Yup
const RegistroSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email no válido')
    .required('El email es requerido'),
  password: Yup.string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('La contraseña es requerida'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
    .required('La confirmación de la contraseña es requerida')
});

const Registro = ({ navigation }) => {
  const { userRegistro, setUserRegistro, setUsuarioOn, userOnline, setUserOnline } = useContext(CartContext);
  const [imagen, setImagen] = useState(null);

  const verificarUsuarioExistente = async (email) => {
    const userColecction = collection(db, "usuarios");
    const q = query(userColecction, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    return !querySnapshot.empty; // Devuelve true si el usuario ya existe
  };

  const crearUsuario = async () => {
    try {
      const usuarioExistente = await verificarUsuarioExistente(userRegistro.email);
      if (usuarioExistente) {
        showMessage({
          message: 'Usuario ya registrado',
          description: 'El email ingresado ya está en uso.',
          type: 'danger', // Tipo de mensaje: "success", "info", "warning", "danger"
        });
        return; // Salir de la función si el usuario ya existe
      }
      await create(userRegistro.email, userRegistro.password);
      setUserOnline({email: userRegistro.email})
      await login(userRegistro.email, userRegistro.password, setUsuarioOn);

      let userColecction = collection(db, "usuarios");
      await addDoc(userColecction, userRegistro);

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

  let openImagePicker = async () => {
    let resultadoPermisos = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (resultadoPermisos.granted === false) {
      alert("Permisos necesarios para acceder a la cámara");
      return;
    } else {
      let abrirGaleria = await ImagePicker.launchImageLibraryAsync();
      if (abrirGaleria.canceled === true) {
        return;
      } else {
        let uri = abrirGaleria.assets[0].uri;
        setImagen(uri);
      }
    }
  }

  const EnviarRegistroUsuario = async (values) => {
  
    setUserRegistro(prevState => ({
      ...prevState,
      email: values.email.toLowerCase(),
      password: values.password,
    }));
  
    await crearUsuario();
  };

  console.log(userRegistro)
  return (
    <View style={styles.container__inicioSesion}>
      <Image width={230} height={45} source={{uri:"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1726996815/APP%20ALFOMBRA%20DE%20FUTBOL%20AMAZON/icon_xoqflq.jpg"}}></Image>
      <Formik
        initialValues={{ email: '', password: '', repeatPassword: '' }}
        validationSchema={RegistroSchema}
        onSubmit={values => EnviarRegistroUsuario(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.container__form}>
            <TextInput
              onChangeText={(text) => {
                handleChange('email')(text); // Actualiza Formik
                setUserRegistro(prevState => ({
                  ...prevState,
                  email: text.toLocaleLowerCase(), // Actualiza userRegistro con el nuevo email
                }));
              }}
              onBlur={handleBlur('email')}
              value={values.email}
              style={styles.input}
              placeholderTextColor={"white"}
              placeholder='Email'
            />
            {touched.email && errors.email && (
              <Text style={{ color: 'red' }}>{errors.email}</Text>
            )}

            <TextInput
              onChangeText={(text) => {
                handleChange('password')(text); // Actualiza Formik
                setUserRegistro(prevState => ({
                  ...prevState,
                  password: text, // Actualiza userRegistro con el nuevo password
                }));
              }}
              onBlur={handleBlur('password')}
              value={values.password}
              style={styles.input}
              placeholderTextColor={"white"}
              placeholder='Password'
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
              placeholderTextColor={"white"}
              placeholder='Repeat password'
              secureTextEntry
            />
            {touched.repeatPassword && errors.repeatPassword && (
              <Text style={{ color: 'red' }}>{errors.repeatPassword}</Text>
            )}

            <View style={styles.container__form}>
              <Pressable onPress={handleSubmit} style={styles.botonLoginUsuario}>
                <Text style={styles.botonText}>
                  Registrar
                </Text>
              </Pressable>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}

export default Registro;
