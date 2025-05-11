import { Pressable, Text, View, Alert, Image } from "react-native";
import NavBar from "../../components/NavBar/NavBar.jsx";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/Context.jsx";
import { Query, addDoc, collection, doc, getDoc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { db } from "../../firebaseConfig.js";
import { showMessage } from "react-native-flash-message";


const Perfil = () => {
  const { setUsuarioOn, userRegistro, eliminarUsuario, idiomaActual, setIdiomaActual } = useContext(CartContext);
  const [userPerfil, setUserPerfil] = useState();
  const [idioma, setIdioma] = useState("https://res.cloudinary.com/dcf9eqqgt/image/upload/v1725984645/APP%20ALFOMBRA%20DE%20FUTBOL%20AMAZON/espana_wyfm4p.png");
  const { userOnline } = useContext(CartContext);

  const obtenerNombrePais = (url) => {
    const match = url.match(/\/([^\/_]+)_\w+\.png$/); // Extrae el nombre antes del primer '_'
    const pais = match ? match[1].replace(/-/g, " ") : null; // Reemplaza '-' con espacio para nombres compuestos
    setIdiomaActual(pais)
  };

const actualizarPaisUsuario = async (idioma) => {
  try {
    // Referencia a la colección de usuarios
    const userCollectionRef = collection(db, "usuarios");
    const q = query(userCollectionRef, where("email", "==", userOnline.email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0]; // Obtener el documento
      const userDocRef = userDoc.ref; // Referencia al documento en Firestore


      // Actualizar la propiedad 'pais'

      await updateDoc(userDocRef, { pais: idioma });

      console.log("País actualizado correctamente a:", idioma);
    } else {
      console.error("Usuario no encontrado.");
    }
  } catch (error) {
    console.error("Error al actualizar el país:", error);
  }
};

  const cambiarIdioma = async (idioma) => {
    setIdioma(idioma);
   const match = idioma.match(/\/([^\/_]+)_\w+\.png$/); // Extrae el nombre antes del primer '_'
   const pais = match ? match[1].replace(/-/g, " ") : null; // Reemplaza '-' con espacio para nombres compuestos
    showMessage({
      message: 'Idioma cambiado con éxito',
      type: 'success',
    });
    actualizarPaisUsuario(pais)
    setIdiomaActual(pais)

  };

  const urlIdiomas = {
    españa: "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1725984645/APP%20ALFOMBRA%20DE%20FUTBOL%20AMAZON/espana_wyfm4p.png",
    italia: "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1725984646/APP%20ALFOMBRA%20DE%20FUTBOL%20AMAZON/italia_r7gxfl.png",
    francia: "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1725984645/APP%20ALFOMBRA%20DE%20FUTBOL%20AMAZON/francia_bluayx.png",
    inglaterra: "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1725984645/APP%20ALFOMBRA%20DE%20FUTBOL%20AMAZON/inglaterra_vgobrt.png",
    paisesBajos: "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1725985145/APP%20ALFOMBRA%20DE%20FUTBOL%20AMAZON/paises-bajos_hhqaua.png",
    alemania: "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1725984645/APP%20ALFOMBRA%20DE%20FUTBOL%20AMAZON/bandera_ykvinl.png",
    portugal: "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1746808357/portugal_ynpltt.png"
  };

  useEffect(() => {
    const fetchUserByEmail = async (email) => {
      const userCollectionRef = collection(db, "usuarios");
      const q = query(userCollectionRef, where("email", "==", userRegistro.email));
      try {
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const userDoc = querySnapshot.docs[0];
          setUserPerfil(userDoc.data());
        } else {
          // Manejo si no se encuentra el usuario
        }
      } catch (error) {
        console.error("Error al obtener el usuario:", error);
      }
    };
    fetchUserByEmail("test3@gmail.com"); // Reemplaza con el email que deseas buscar
  }, []);

const handleEliminarCuenta = (idiomaActual) => {
  const mensajes = {
    espana: {
      titulo: "Confirmar eliminación",
      mensaje: "¿Estás seguro de que deseas eliminar tu cuenta?",
      cancelar: "Cancelar",
      aceptar: "Aceptar",
      exito: "Cuenta eliminada con éxito"
    },
    italia: {
      titulo: "Conferma eliminazione",
      mensaje: "Sei sicuro di voler eliminare il tuo account?",
      cancelar: "Annulla",
      aceptar: "Conferma",
      exito: "Account eliminato con successo"
    },
    francia: {
      titulo: "Confirmer la suppression",
      mensaje: "Êtes-vous sûr de vouloir supprimer votre compte ?",
      cancelar: "Annuler",
      aceptar: "Confirmer",
      exito: "Compte supprimé avec succès"
    },
    bandera: {
      titulo: "Löschen bestätigen",
      mensaje: "Möchten Sie Ihr Konto wirklich löschen?",
      cancelar: "Abbrechen",
      aceptar: "Bestätigen",
      exito: "Konto erfolgreich gelöscht"
    },
    paisesBajos: {
      titulo: "Verwijdering bevestigen",
      mensaje: "Weet je zeker dat je je account wilt verwijderen?",
      cancelar: "Annuleren",
      aceptar: "Bevestigen",
      exito: "Account succesvol verwijderd"
    },
    inglaterra: {
      titulo: "Confirm deletion",
      mensaje: "Are you sure you want to delete your account?",
      cancelar: "Cancel",
      aceptar: "Confirm",
      exito: "Account successfully deleted"
    },
    portugal: {
      titulo: "Confirmar exclusão",
      mensaje: "Tem certeza de que deseja excluir sua conta?",
      cancelar: "Cancelar",
      aceptar: "Confirmar",
      exito: "Conta excluída com sucesso"
    }
  };

  const t = mensajes[idiomaActual] || mensajes["es"]; // fallback a español

  Alert.alert(
    t.titulo,
    t.mensaje,
    [
      {
        text: t.cancelar,
        style: "cancel"
      },
      {
        text: t.aceptar,
        onPress: () => {
          eliminarUsuario();
          showMessage({
            message: t.exito,
            type: 'success',
          });
        }
      }
    ],
    { cancelable: false }
  );
};

console.log({idiomaActual})

  return (
    <View style={{ width: "100%", height: "100%", backgroundColor:"black", position: "relative", padding: 20 }}>
      <NavBar />
          {idiomaActual === "espana" && <Text style={{ color: "#34cee6", fontFamily: "NunitoSans_700Bold", letterSpacing: 1, textAlign:"center", fontSize:20 }}>Cuenta activa</Text>}
          {idiomaActual === "italia" && <Text style={{ color: "#34cee6", fontFamily: "NunitoSans_700Bold", letterSpacing: 1, textAlign:"center", fontSize:20 }}>Account attivo</Text>}
          {idiomaActual === "francia" && <Text style={{ color: "#34cee6", fontFamily: "NunitoSans_700Bold", letterSpacing: 1, textAlign:"center", fontSize:20 }}>Compte actif</Text>}
          {idiomaActual === "bandera" && <Text style={{ color: "#34cee6", fontFamily: "NunitoSans_700Bold", letterSpacing: 1, textAlign:"center", fontSize:20 }}>Aktives Konto</Text>}
          {idiomaActual === "paisesBajos" && <Text style={{ color: "#34cee6", fontFamily: "NunitoSans_700Bold", letterSpacing: 1 , textAlign:"center", fontSize:20}}>Actief account</Text>}
          {idiomaActual === "inglaterra" && <Text style={{ color: "#34cee6", fontFamily: "NunitoSans_700Bold", letterSpacing: 1, textAlign:"center", fontSize:20 }}>Active account</Text>}
          {idiomaActual === "portugal" && <Text style={{ color: "#34cee6", fontFamily: "NunitoSans_700Bold", letterSpacing: 1, textAlign:"center", fontSize:20 }}>Conta ativa</Text>}

          {idiomaActual === "espana" && <Text style={{ color: "white", fontFamily: "NunitoSans_700Bold", letterSpacing: 1, textAlign:"center", fontSize:20 }}>{userOnline.email}</Text>}
          {idiomaActual === "italia" && <Text style={{ color: "white", fontFamily: "NunitoSans_700Bold", letterSpacing: 1, textAlign:"center", fontSize:20 }}>{userOnline.email}</Text>}
          {idiomaActual === "francia" && <Text style={{ color: "white", fontFamily: "NunitoSans_700Bold", letterSpacing: 1, textAlign:"center", fontSize:20 }}>{userOnline.email}</Text>}
          {idiomaActual === "bandera" && <Text style={{ color: "white", fontFamily: "NunitoSans_700Bold", letterSpacing: 1, textAlign:"center", fontSize:20 }}>{userOnline.email}</Text>}
          {idiomaActual === "paisesBajos" && <Text style={{ color: "white", fontFamily: "NunitoSans_700Bold", letterSpacing: 1 , textAlign:"center", fontSize:20}}>{userOnline.email}</Text>}
          {idiomaActual === "inglaterra" && <Text style={{ color: "white", fontFamily: "NunitoSans_700Bold", letterSpacing: 1, textAlign:"center", fontSize:20 }}>{userOnline.email}</Text>}
          {idiomaActual === "portugal" && <Text style={{ color: "white", fontFamily: "NunitoSans_700Bold", letterSpacing: 1, textAlign:"center", fontSize:20 }}>{userOnline.email}</Text>}
     


      <View style={{ marginTop: 10, width: "115%", display: "flex", justifyContent: "center", alignItems: "center", position: "absolute", top: "90%", gap: 10 }}>
        <Pressable onPress={() => setUsuarioOn(false)} style={{ borderWidth: 1, backgroundColor: "hsl(215, 18%, 13%)", borderColor: "hsl(215, 18%, 13%)", width: 170, borderRadius: 4, height: 35, display: "flex", justifyContent: "center", alignItems: "center" }}>
          
          {idiomaActual === "espana" && <Text style={{ color: "white", fontFamily: "NunitoSans_700Bold", letterSpacing: 1 }}>Cerrar sesión</Text>}
          {idiomaActual === "italia" && <Text style={{ color: "white", fontFamily: "NunitoSans_700Bold", letterSpacing: 1 }}>Chiudere la sessione</Text>}
          {idiomaActual === "francia" && <Text style={{ color: "white", fontFamily: "NunitoSans_700Bold", letterSpacing: 1 }}>Se déconnecter</Text>}
          {idiomaActual === "bandera" && <Text style={{ color: "white", fontFamily: "NunitoSans_700Bold", letterSpacing: 1 }}>Abmelden</Text>}
          {idiomaActual === "paisesBajos" && <Text style={{ color: "white", fontFamily: "NunitoSans_700Bold", letterSpacing: 1 }}>Afmelden</Text>}
          {idiomaActual === "inglaterra" && <Text style={{ color: "white", fontFamily: "NunitoSans_700Bold", letterSpacing: 1 }}>Log out</Text>}
          {idiomaActual === "portugal" && <Text style={{ color: "white", fontFamily: "NunitoSans_700Bold", letterSpacing: 1 }}>sair</Text>}



          
        </Pressable>

        <Pressable onPress={() => handleEliminarCuenta(idiomaActual)} style={{ borderWidth: 1, backgroundColor: "red", borderColor: "hsl(215, 18%, 13%)", width: 170, borderRadius: 4, height: 35, display: "flex", justifyContent: "center", alignItems: "center" }}>
        {idiomaActual === "espana" && <Text style={{ color: "white", fontFamily: "NunitoSans_700Bold", letterSpacing: 1 }}>Eliminar cuenta</Text>}
          {idiomaActual === "italia" && <Text style={{ color: "white", fontFamily: "NunitoSans_700Bold", letterSpacing: 1 }}>Eliminare account</Text>}
          {idiomaActual === "francia" && <Text style={{ color: "white", fontFamily: "NunitoSans_700Bold", letterSpacing: 1 }}>Supprimer le compte</Text>}
          {idiomaActual === "bandera" && <Text style={{ color: "white", fontFamily: "NunitoSans_700Bold", letterSpacing: 1 }}>Konto löschen</Text>}
          {idiomaActual === "paisesBajos" && <Text style={{ color: "white", fontFamily: "NunitoSans_700Bold", letterSpacing: 1 }}>Account verwijderen</Text>}
          {idiomaActual === "inglaterra" && <Text style={{ color: "white", fontFamily: "NunitoSans_700Bold", letterSpacing: 1 }}>Delete account</Text>}   
          {idiomaActual === "portugal" && <Text style={{ color: "white", fontFamily: "NunitoSans_700Bold", letterSpacing: 1 }}>Apagar conta</Text>}        
     
          </Pressable>
      </View>
  
    </View>
  );
};

export default Perfil;
