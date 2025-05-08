// Context/Context.jsx
import { deleteUser, getAuth } from "firebase/auth";
import { collection, deleteDoc, getDocs, query, where } from "firebase/firestore";
import { createContext, useState } from "react";
import { db } from "../firebaseConfig";

export const CartContext = createContext(); // Se crea el contexto global

// Creamos el componente que va a utilizar el contexto global
const GlobalContext = ({ children }) => {
    const [userRegistro, setUserRegistro] = useState({
      email: "",
      password: "",
      nombre: "",
      pais: "espana",
      numeroCamiseta: "",
      posicion: "",
      clubFavorito: "",
      imagenPerfil: "",
      codigoAcceso: "BLC2831",
      access: false
    });
    const [usuarioOn, setUsuarioOn] = useState(false)
    const [closed, setClosed] = useState(false)
    const [userOnline, setUserOnline] = useState({
        email: ""
    })
    const [idiomaActual, setIdiomaActual] = useState("espana")

    
    const eliminarUsuarioDeColeccion = async (email) => {
        try {
          const userColecction = collection(db, "usuarios");
          const q = query(userColecction, where("email", "==", email));
          const querySnapshot = await getDocs(q);
      
          if (!querySnapshot.empty) {
            querySnapshot.forEach(async (doc) => {
              await deleteDoc(doc.ref); // Elimina el documento del usuario
            });
            console.log("Usuario eliminado de la colección.");
          } else {
            console.log("No se encontró ningún usuario con ese correo.");
          }
        } catch (error) {
          console.error("Error al eliminar el usuario de la colección:", error);
        }
      };

    const eliminarUsuario = () => {
        const auth = getAuth();
        const user = auth.currentUser;
      
        if (user) {
          deleteUser(user)
            .then(() => {
              console.log("Usuario eliminado exitosamente.");
              eliminarUsuarioDeColeccion(user.email)
              setUsuarioOn(false)        
            })
            .catch((error) => {
              console.error("Error al eliminar el usuario:", error);
            });
        } else {
          console.error("No hay un usuario autenticado.");
        }
      };

    const data = {
        userRegistro,
        setUserRegistro,
        usuarioOn,
        setUsuarioOn,
        closed,
        setClosed,
        userOnline, 
        setUserOnline,
        idiomaActual,
        setIdiomaActual,
        eliminarUsuario
    };

    return (
        <CartContext.Provider value={data}>{children}</CartContext.Provider>
    );
}

export default GlobalContext;
