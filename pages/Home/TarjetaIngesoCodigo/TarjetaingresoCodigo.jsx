import { Button, Image, Text, TouchableOpacity, View } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import styles from "./TarjetaIngresoCodigoStyles"
import { useContext, useState } from "react"
import { CartContext } from "../../../Context/Context"
import { showMessage } from "react-native-flash-message"
import { collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { db } from "../../../firebaseConfig"

const TarjetaIngresoCodigo = ( {CerrarModal, codigoCorrecto, setCodigoCorrecto} ) => {
    const {closed, setClosed, userRegistro, userOnline,idiomaActual} = useContext(CartContext)
    const [text, setText] = useState("")

    const guardarText = (text) => {
        setText(text.toUpperCase())
        setCodigoCorrecto(false)
    }

    const validacionCodigo = async () => {
        if (text === userRegistro.codigoAcceso) {
          try {
            // 1. Buscar el documento del usuario en Firebase por email
            const userCollectionRef = collection(db, 'usuarios');
            const q = query(userCollectionRef, where('email', '==', userOnline.email));
            const querySnapshot = await getDocs(q);
      
            if (!querySnapshot.empty) {
              const userDoc = querySnapshot.docs[0]; // Supone que el email es único y solo hay un documento
              const userDocRef = doc(db, 'usuarios', userDoc.id);
      
              // 2. Actualizar la propiedad access a true
              await updateDoc(userDocRef, {
                access: true,
              });
      
              // Mostrar mensaje de éxito
              setClosed(true);
              CerrarModal();
              showMessage({
                message: '✅',
                type: 'success',
                style: {
      height: 100,
      width:100,
      alignItems: 'center',
      justifyContent: 'center',
    },
              });
      
            } else {
            }
          } catch (error) {
            console.error('Error al actualizar el acceso del usuario: ', error);
          }
        } else {
          // Si el código no es correcto
          setClosed(false);
          setCodigoCorrecto(true);
        }
      };

    return (
        <View style={styles.container}>
            <Image width={25} height={25} source={{uri:"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1747228419/candado_2_oloewu.png"}}></Image>
            <TextInput onChangeText={(text)=>guardarText(text)} placeholder="Code" placeholderTextColor="white" style={styles.input}/>
            <TouchableOpacity onPress={()=>validacionCodigo()} style={styles.button}>
                    {idiomaActual === "espana" && <Text style={{color:"white", fontWeight:"bold",fontFamily: 'NunitoSans_400Regular', letterSpacing:1}}>Continunar</Text>}
                    {idiomaActual === "italia" && <Text style={{color:"white", fontWeight:"bold",fontFamily: 'NunitoSans_400Regular', letterSpacing:1}}>Continua</Text>}
                    {idiomaActual === "francia" && <Text style={{color:"white", fontWeight:"bold",fontFamily: 'NunitoSans_400Regular', letterSpacing:1}}>Continuer</Text>}
                    {idiomaActual === "bandera" && <Text style={{color:"white", fontWeight:"bold",fontFamily: 'NunitoSans_400Regular', letterSpacing:1}}>Fortsetzen</Text>}
                    {idiomaActual === "inglaterra" && <Text style={{color:"white", fontWeight:"bold",fontFamily: 'NunitoSans_400Regular', letterSpacing:1}}>Continue</Text>}
                    {idiomaActual === "estadosUnidos" && <Text style={{color:"white", fontWeight:"bold",fontFamily: 'NunitoSans_400Regular', letterSpacing:1}}>Continue</Text>}
                    {idiomaActual === "paisesBajos" && <Text style={{color:"white", fontWeight:"bold",fontFamily: 'NunitoSans_400Regular', letterSpacing:1}}>Doorgaan</Text>}
                    {idiomaActual === "portugal" && <Text style={{color:"white", fontWeight:"bold",fontFamily: 'NunitoSans_400Regular', letterSpacing:1}}>Continuar</Text>}
                </TouchableOpacity>
        </View>
    )
}
export default TarjetaIngresoCodigo