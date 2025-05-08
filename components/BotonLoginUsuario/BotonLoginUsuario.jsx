import { Pressable, Text, View } from "react-native"
import styles from "./BotonLoginUsuario"
import niveles from "../../niveles"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../../firebaseConfig"



const BotonLoginUsuario = ( {navigation} ) => {
    const test = (niveles) => {
        //AÑADIMOS EL DOCUMENTO A UNA COLECCION, ESPECIFICO LA BASE DE DATOS Y EL NOMBRE DE LA COLLECCION, LUEGO EL OBJETO QUE QUIERO AGREGAR A ESA COLECCION.
        niveles.map((nivel)=>(
            addDoc(collection(db, "niveles"), nivel)        
        ))
  }

  const test2 = () => {
    alert("funciona")   
    
}


    return (
        <View style={styles.container__botonesRegistro}>
        <Pressable onPress={()=>navigation.navigate("Registrarse")} style={styles.botonRegistroUsuario}>
            <Text style={styles.botonText}>
                Registrarse
            </Text>
        </Pressable>
        <Pressable onPress={()=>navigation.navigate("Iniciar sesión")} style={styles.botonLoginUsuario}>
            <Text style={styles.botonText}>
                Iniciar sesión
            </Text>
        </Pressable>

       
        </View>
    )
}
export default BotonLoginUsuario