import React, { useContext, useEffect, useState } from 'react';
import { Image, Pressable, ScrollView, Text, View, Alert } from "react-native";
import NavBar from "../../components/NavBar/NavBar";
import TarjetaCalentamiento from "../../components/TarjetaCalentamiento/TarjetaCalentamiento";
import TarjetaNivel from "../../components/TarjetaNivel/TarjetaNivel.jsx";
import styles from '../Home/Home.js'; // Asegúrate de usar el archivo de estilos correcto
import TarjetaIngresoCodigo from './TarjetaIngesoCodigo/TarjetaingresoCodigo.jsx';
import TarjetaConsejos from '../../components/TarjetaConsejos/TarjetaConsejos.jsx';
import { collection, query, where, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig.js';
import { CartContext } from '../../Context/Context.jsx';
import { FontAwesome5 } from '@expo/vector-icons';
import { Swing } from 'react-native-animated-spinkit';
import IconoWhatsapp from '../../components/IconoWhatsapp/IconoWhatsapp.jsx';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-web';

const Home = ({ navigation }) => {
  const [niveles, setNiveles] = useState([]);
  const { closed, setClosed, userRegistro, setUserOnline, userOnline, idiomaActual } = useContext(CartContext);
  const [codigoCorrecto, setCodigoCorrecto] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true); // Nuevo estado para manejar la carga

  const CerrarModal = () => {
    setCodigoCorrecto(false);
    setModalVisible(false);
  };

  const obtenerNiveles = async () => {
    try {
      const nivelesCollection = collection(db, "niveles");
      const querySnapshot = await getDocs(nivelesCollection);
      let arreglo = [];
      querySnapshot.forEach((doc) => {
        arreglo = [...arreglo, { id: doc.id, data: doc.data() }];
      });
      setNiveles(arreglo);
    } catch (error) {
      console.error("Error obteniendo documentos: ", error);
    }
  };

  const verificarAccesoUsuario = async () => {
    if (!userOnline) return; // Asegurarse de que userOnline esté disponible

    try {
      setLoading(true); // Iniciar la carga

      // Buscar el documento del usuario en Firebase por email
      const userCollectionRef = collection(db, 'usuarios');
      const q = query(userCollectionRef, where('email', '==', userOnline?.email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const userData = userDoc.data();
        // Verificar si el usuario ya tiene acceso
        setClosed(userData.access || false); // Si no tiene acceso, se pone closed a false

      } else {
        setClosed(false); // Mantener contenido bloqueado si no se encuentra el usuario
      }
    } catch (error) {
      console.error('Error al verificar el acceso del usuario:', error);

      // Mostrar alerta si hay error en la solicitud
      Alert.alert(
        "Actualizando la base de datos",
        "Hubo un error en la solicitud. Intenta nuevamente en unos momentos.",
        [{ text: "OK" }]
      );
    } finally {
      setLoading(false); // Terminar el estado de carga
    }
  };

  useEffect(() => {
    verificarAccesoUsuario();
    obtenerNiveles();
  }, [userRegistro, userOnline]); // Dependencia de userOnline

  useEffect(() => {
    if (userOnline) {
    }
  }, [closed]); // Este useEffect se ejecutará cada vez que cambie el estado 'closed'

  // Mientras loading sea true, mostrar un indicador de carga
  if (loading) {
    return (
      <View style={{ height: "100%", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Swing size={48} color="hsl(199, 76%, 28%)" />
      </View>
    );
  }

  console.log({niveles})

  return (
    
    <View style={styles.home}>
      {!niveles.length > 0 ? (
        <View style={{ height: "100%", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Swing size={48} color="hsl(199, 76%, 28%)" />
        </View>
      ) : (
        <>
          <NavBar />
          <ScrollView style={styles.home__main} contentContainerStyle={styles.home__contentContainer}>
            {!closed && (
              <>
                <TarjetaIngresoCodigo setModalVisible={setModalVisible} CerrarModal={CerrarModal} setCodigoCorrecto={setCodigoCorrecto} />
                {codigoCorrecto && idiomaActual === "espana" && <Text style={{ color: "red", paddingLeft: 20 }}>Codigo incorrecto</Text>}
                {codigoCorrecto && idiomaActual === "italia" && <Text style={{ color: "red", paddingLeft: 20 }}>Codice errato</Text>}
                {codigoCorrecto && idiomaActual === "francia" && <Text style={{ color: "red", paddingLeft: 20 }}>Code incorrect</Text>}
                {codigoCorrecto && idiomaActual === "bandera" && <Text style={{ color: "red", paddingLeft: 20 }}>Falscher Code</Text>}
                {codigoCorrecto && idiomaActual === "paisesBajos" && <Text style={{ color: "red", paddingLeft: 20 }}>Verkeerde code</Text>}
                {codigoCorrecto && idiomaActual === "inglaterra" && <Text style={{ color: "red", paddingLeft: 20 }}>Incorrect code</Text>}
                {codigoCorrecto && idiomaActual === "estadosUnidos" && <Text style={{ color: "red", paddingLeft: 20 }}>Incorrect code</Text>}
                {codigoCorrecto && idiomaActual === "portugal" && <Text style={{ color: "red", paddingLeft: 20 }}>Código errado</Text>}


      
              </>
            )}

            {idiomaActual === "espana" && <Text style={styles.home__sectionTitle}><FontAwesome5 name="play" size={18} color="white" />  Imprescindibles</Text>}
            {idiomaActual === "francia" && <Text style={styles.home__sectionTitle}><FontAwesome5 name="play" size={18} color="white" />  Indispensables</Text>}
            {idiomaActual === "italia" && <Text style={styles.home__sectionTitle}><FontAwesome5 name="play" size={18} color="white" />  Indispensabili</Text>}
            {idiomaActual === "inglaterra" && <Text style={styles.home__sectionTitle}><FontAwesome5 name="play" size={18} color="white" />  Essential</Text>}
            {idiomaActual === "estadosUnidos" && <Text style={styles.home__sectionTitle}><FontAwesome5 name="play" size={18} color="white" />  Essential</Text>}
            {idiomaActual === "bandera" && <Text style={styles.home__sectionTitle}><FontAwesome5 name="play" size={18} color="white" />  Unverzichtbar</Text>}
            {idiomaActual === "paisesBajos" && <Text style={styles.home__sectionTitle}><FontAwesome5 name="play" size={18} color="white" />  Onmisbaar</Text>}
            {idiomaActual === "portugal" && <Text style={styles.home__sectionTitle}><FontAwesome5 name="play" size={18} color="white" />  Fundamentos</Text>}


            {niveles.length > 0 &&
              niveles.filter((nivel) => nivel.data.nombre === "Primeros pasos")
                .map((nivel) => (
                  <TarjetaCalentamiento
                    key={nivel.id}
                    data={nivel}
                    navigation={navigation}
                    nivel={nivel.data}
                    tiempo={nivel.data.tiempoTotal}
                  />
                ))
            }
            {idiomaActual === "espana" && <Text style={styles.home__sectionTitle}><FontAwesome5 name="play" size={18} color="white" />  Ejercicios</Text>}
            {idiomaActual === "francia" && <Text style={styles.home__sectionTitle}><FontAwesome5 name="play" size={18} color="white" />  Exercices</Text>}
            {idiomaActual === "italia" && <Text style={styles.home__sectionTitle}><FontAwesome5 name="play" size={18} color="white" />  Esercizi</Text>}
            {idiomaActual === "inglaterra" && <Text style={styles.home__sectionTitle}><FontAwesome5 name="play" size={18} color="white" />  Exercises</Text>}
            {idiomaActual === "estadosUnidos" && <Text style={styles.home__sectionTitle}><FontAwesome5 name="play" size={18} color="white" />  Exercises</Text>}
            {idiomaActual === "bandera" && <Text style={styles.home__sectionTitle}><FontAwesome5 name="play" size={18} color="white" />  Übungen</Text>}
            {idiomaActual === "paisesBajos" && <Text style={styles.home__sectionTitle}><FontAwesome5 name="play" size={18} color="white" />  Oefeningen</Text>}
            {idiomaActual === "portugal" && <Text style={styles.home__sectionTitle}><FontAwesome5 name="play" size={18} color="white" />  Exercícios</Text>}


            {niveles.length > 0 &&
              niveles
                .filter((nivel) => nivel.data.nombre !== "Primeros pasos") // Filtra los niveles que no sean "Primeros pasos"
                .sort((a, b) => { // Ordena los niveles en el orden deseado
                  const orden = ["Nivel 1", "Nivel 2", "Nivel 3", "Nivel 4", "Nivel 5", "Nivel 6"];
                  return orden.indexOf(a.data.nombre) - orden.indexOf(b.data.nombre);
                })
                .map((nivel) => (
                  <TarjetaNivel
                    key={nivel.id}
                    data={nivel}
                    navigation={navigation}
                    nivel={nivel.data}
                    tiempo={nivel.data.tiempoTotal}
                  />
                ))
            }

            <View style={styles.home__tipsContainer}>
              <TarjetaConsejos />
            </View>
          </ScrollView>
          
        </>
      )}
    </View>
  );
}

export default Home;
