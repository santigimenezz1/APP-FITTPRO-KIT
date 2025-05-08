import React, { useContext } from "react";
import { CartContext } from "./Context/Context";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore'
import { getFirestore } from "firebase/firestore";
import 'firebase/storage';


import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

import { showMessage } from "react-native-flash-message";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC41t4X49mx5KaUpAApb3E7mx7C5D3BM_8",
  authDomain: "app-futbol-5cbc0.firebaseapp.com",
  projectId: "app-futbol-5cbc0",
  storageBucket: "app-futbol-5cbc0.appspot.com",
  messagingSenderId: "131865096972",
  appId: "1:131865096972:web:daf9ed03fd3428901a0f29",
  measurementId: "G-0PMRNQBNFK"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); //REFERENCIA A LA BASE DE DATOS 
export const auth = getAuth(app);




const BotonLoginUsuario = ( {navigation} ) => {
  const { setUsuarioOn, userOnline, setUserOnline } = useContext(CartContext);

  const test = (niveles) => {
      //AÑADIMOS EL DOCUMENTO A UNA COLECCION, ESPECIFICO LA BASE DE DATOS Y EL NOMBRE DE LA COLLECCION, LUEGO EL OBJETO QUE QUIERO AGREGAR A ESA COLECCION.
      niveles.map((nivel)=>(
          addDoc(collection(db, "niveles"), nivel)        
      ))
}
}
export const login = async (email, password, setUsuarioOn) => {
  try {
    // Intentar iniciar sesión
    let res = await signInWithEmailAndPassword(auth, email, password);
    
    // Verificar si se inició sesión correctamente
    if (res && res.user) {
      setUsuarioOn(true);  // Cambiar estado del usuario
      console.log("Éxito: Sesión iniciada correctamente");  // Mostrar mensaje de éxito
      console.log({ res });  // Opcional: Mostrar el resultado completo
    } else {
      // Si por alguna razón no se obtiene un usuario
      console.log("Error: No se pudo iniciar la sesión");
    }
  } catch (error) {
    // Si ocurre un error, manejarlo aquí
    showMessage({
      message: 'Error en el Inicio de sesión',
      description: 'El usuario no existe',
      type: 'danger',
    });
  }
};


export const create = async (email, password) => {
  try {
  const res = await createUserWithEmailAndPassword(auth, email, password)
  } 
  catch (error) {
    alert(error)
}

}