import { Pressable, Text, View, Alert, Image } from "react-native";
import TarjetaPerfil from "../../components/TarjetaPerfil/TarjetaPerfil.jsx";
import NavBar from "../../components/NavBar/NavBar.jsx";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/Context.jsx";
import { Query, addDoc, collection, doc, getDoc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { db } from "../../firebaseConfig.js";
import BotonVentana from "../../components/BotonVentana/BotonVentana.jsx";
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
    alemania: "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1725984645/APP%20ALFOMBRA%20DE%20FUTBOL%20AMAZON/bandera_ykvinl.png"
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

  const handleEliminarCuenta = () => {
    Alert.alert(
      "Confirmar eliminación",
      "¿Estás seguro de que deseas eliminar tu cuenta?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Aceptar",
          onPress: () => {
            eliminarUsuario(); // Lógica para eliminar el usuario
            showMessage({
              message: 'Cuenta eliminada con éxito',
              type: 'success',
            });
          }
        }
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={{ width: "100%", height: "100%", backgroundColor:"black", position: "relative", padding: 20 }}>
      <NavBar />
      <View style={{ marginTop: 20 }}>
      {idiomaActual === "espana" && <Text style={{ color: "white", fontSize: 20, textAlign: "center", letterSpacing: 2, fontFamily: 'NunitoSans_400Regular', }}>Cambiar idioma</Text>}
      {idiomaActual === "italia" && <Text style={{ color: "white", fontSize: 20, textAlign: "center", letterSpacing: 2, fontFamily: 'NunitoSans_400Regular', }}>Cambiare lingua</Text>}
      {idiomaActual === "francia" && <Text style={{ color: "white", fontSize: 20, textAlign: "center", letterSpacing: 2, fontFamily: 'NunitoSans_400Regular', }}>Changer de langue</Text>}
      {idiomaActual === "bandera" && <Text style={{ color: "white", fontSize: 20, textAlign: "center", letterSpacing: 2, fontFamily: 'NunitoSans_400Regular', }}>Sprache wechseln</Text>}
      {idiomaActual === "inglaterra" && <Text style={{ color: "white", fontSize: 20, textAlign: "center", letterSpacing: 2, fontFamily: 'NunitoSans_400Regular', }}>Change language</Text>}
      {idiomaActual === "paises bajos" && <Text style={{ color: "white", fontSize: 20, textAlign: "center", letterSpacing: 2, fontFamily: 'NunitoSans_400Regular', }}>Sprache wechseln</Text>}



        
        <View style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 5, marginTop: 15 }}>
          <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: 15 }}>
            <Pressable onPress={() => cambiarIdioma(urlIdiomas.españa)}>
              <Image width={70} height={60} source={{ uri: urlIdiomas.españa }} />
            </Pressable>
            <Pressable onPress={() => cambiarIdioma(urlIdiomas.italia)}>
              <Image width={70} height={60} source={{ uri: urlIdiomas.italia }} />
            </Pressable>
            <Pressable onPress={() => cambiarIdioma(urlIdiomas.francia)}>
              <Image width={70} height={60} source={{ uri: urlIdiomas.francia }} />
            </Pressable>
          </View>
          <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: 15 }}>
            <Pressable onPress={() => cambiarIdioma(urlIdiomas.inglaterra)}>
              <Image width={70} height={60} source={{ uri: urlIdiomas.inglaterra }} />
            </Pressable>
            <Pressable onPress={() => cambiarIdioma(urlIdiomas.paisesBajos)}>
              <Image width={70} height={60} source={{ uri: urlIdiomas.paisesBajos }} />
            </Pressable>
            <Pressable onPress={() => cambiarIdioma(urlIdiomas.alemania)}>
              <Image width={70} height={60} source={{ uri: urlIdiomas.alemania }} />
            </Pressable>
          </View>
        </View>
      </View>

      <View style={{ marginTop: 20 }}>
      {idiomaActual === "espana" && <Text style={{ color: "white", fontSize: 20, textAlign: "center", letterSpacing: 2, fontFamily: 'NunitoSans_400Regular', }}>Idioma actual</Text>}
      {idiomaActual === "italia" && <Text style={{ color: "white", fontSize: 20, textAlign: "center", letterSpacing: 2, fontFamily: 'NunitoSans_400Regular', }}>Lingua attuale</Text>}
      {idiomaActual === "francia" && <Text style={{ color: "white", fontSize: 20, textAlign: "center", letterSpacing: 2, fontFamily: 'NunitoSans_400Regular', }}>Langue actuelle</Text>}
      {idiomaActual === "bandera" && <Text style={{ color: "white", fontSize: 20, textAlign: "center", letterSpacing: 2, fontFamily: 'NunitoSans_400Regular', }}>Aktuelle Sprache</Text>}
      {idiomaActual === "paises bajos" && <Text style={{ color: "white", fontSize: 20, textAlign: "center", letterSpacing: 2, fontFamily: 'NunitoSans_400Regular', }}>Aktuelle Sprache</Text>}
      {idiomaActual === "inglaterra" && <Text style={{ color: "white", fontSize: 20, textAlign: "center", letterSpacing: 2, fontFamily: 'NunitoSans_400Regular', }}>Current language</Text>}  
            
      <View style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 5, marginTop: 15 }}>
          <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: 15 }}>
            <Pressable>
              <Image width={70} height={60} source={{ uri: idioma }} />
            </Pressable>
          </View>
        </View>
      </View>

      <View style={{ marginTop: 10, width: "115%", display: "flex", justifyContent: "center", alignItems: "center", position: "absolute", top: "90%", gap: 10 }}>
        <Pressable onPress={() => setUsuarioOn(false)} style={{ borderWidth: 1, backgroundColor: "hsl(215, 18%, 13%)", borderColor: "hsl(215, 18%, 13%)", width: 170, borderRadius: 4, height: 35, display: "flex", justifyContent: "center", alignItems: "center" }}>
          
          {idiomaActual === "espana" && <Text style={{ color: "white", fontFamily: "NunitoSans_700Bold", letterSpacing: 1 }}>Cerrar sesión</Text>}
          {idiomaActual === "italia" && <Text style={{ color: "white", fontFamily: "NunitoSans_700Bold", letterSpacing: 1 }}>Chiudere la sessione</Text>}
          {idiomaActual === "francia" && <Text style={{ color: "white", fontFamily: "NunitoSans_700Bold", letterSpacing: 1 }}>Se déconnecter</Text>}
          {idiomaActual === "bandera" && <Text style={{ color: "white", fontFamily: "NunitoSans_700Bold", letterSpacing: 1 }}>Abmelden</Text>}
          {idiomaActual === "paises bajos" && <Text style={{ color: "white", fontFamily: "NunitoSans_700Bold", letterSpacing: 1 }}>Abmelden</Text>}

          {idiomaActual === "inglaterra" && <Text style={{ color: "white", fontFamily: "NunitoSans_700Bold", letterSpacing: 1 }}>Log out</Text>}


          
        </Pressable>

        <Pressable onPress={handleEliminarCuenta} style={{ borderWidth: 1, backgroundColor: "red", borderColor: "hsl(215, 18%, 13%)", width: 170, borderRadius: 4, height: 35, display: "flex", justifyContent: "center", alignItems: "center" }}>
        {idiomaActual === "espana" && <Text style={{ color: "white", fontFamily: "NunitoSans_700Bold", letterSpacing: 1 }}>Eliminar cuenta</Text>}
          {idiomaActual === "italia" && <Text style={{ color: "white", fontFamily: "NunitoSans_700Bold", letterSpacing: 1 }}>Eliminare account</Text>}
          {idiomaActual === "francia" && <Text style={{ color: "white", fontFamily: "NunitoSans_700Bold", letterSpacing: 1 }}>Supprimer le compte</Text>}
          {idiomaActual === "bandera" && <Text style={{ color: "white", fontFamily: "NunitoSans_700Bold", letterSpacing: 1 }}>Konto löschen</Text>}
          {idiomaActual === "paises bajos" && <Text style={{ color: "white", fontFamily: "NunitoSans_700Bold", letterSpacing: 1 }}>Konto löschen</Text>}
          {idiomaActual === "inglaterra" && <Text style={{ color: "white", fontFamily: "NunitoSans_700Bold", letterSpacing: 1 }}>Delete account</Text>}        
          </Pressable>
      </View>
    </View>
  );
};

export default Perfil;
