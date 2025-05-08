import React, { useContext } from 'react';
import { View, Text, TextInput, Pressable, Image } from 'react-native';
import styles from './InicioSesion';
import { login } from '../../../firebaseConfig.js';
import { CartContext } from '../../../Context/Context.jsx';
import { Formik } from 'formik';
import * as Yup from 'yup';
import niveles from '../../../niveles.js';

const InicioSesion = () => {
  const { setUsuarioOn,userOnline, setUserOnline  } = useContext(CartContext);
  const test = (niveles) => {
    //AÑADIMOS EL DOCUMENTO A UNA COLECCION, ESPECIFICO LA BASE DE DATOS Y EL NOMBRE DE LA COLLECCION, LUEGO EL OBJETO QUE QUIERO AGREGAR A ESA COLECCION.
    niveles.map((nivel)=>(
        addDoc(collection(db, "niveles"), nivel)        
    ))
}
  // Esquema de validación usando Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email inválido').required('El email es obligatorio'),
    password: Yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es obligatoria'),
  });

  console.log(userOnline)
  return (
    <>
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        login(values.email, values.password, setUsuarioOn);
        setUserOnline({email: values.email.toLowerCase()})
      }}
      validateOnBlur={false}    // Desactiva la validación al desenfocar el campo
      validateOnChange={false}  // Desactiva la validación al cambiar el campo
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldTouched }) => (
        <View style={styles.container__inicioSesion}>
        <Image width={230} height={45} source={{uri:"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1726996815/APP%20ALFOMBRA%20DE%20FUTBOL%20AMAZON/icon_xoqflq.jpg"}}></Image>

          <View style={styles.container__form}>
            <TextInput
              onChangeText={(text) => {
                setFieldTouched('email', false);
                handleChange('email')(text);
              }}
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
              onChangeText={(text) => {
                setFieldTouched('password', false);
                handleChange('password')(text);
              }}
              onBlur={handleBlur('password')}
              value={values.password}
              style={styles.input}
              placeholderTextColor="white"
              placeholder="Contraseña"
              secureTextEntry
            />
            {touched.password && errors.password && (
              <Text style={{ color: 'red' }}>{errors.password}</Text>
            )}

            <View style={styles.container__form}>
              <Pressable 
                onPress={() => {
                  setFieldTouched('email', true);
                  setFieldTouched('password', true);
                  handleSubmit();
                }} 
                style={styles.botonLoginUsuario}
              >
                <Text style={styles.botonText}>Iniciar sesión</Text>
              </Pressable>
            </View>
          </View>
        </View>
      )}
    </Formik>
    </>
  );
};

export default InicioSesion;
