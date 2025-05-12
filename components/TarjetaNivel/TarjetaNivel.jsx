import { Image, Pressable, Text, View } from "react-native"
import styles from "../TarjetaNivel/TarjetaNivel.js"
import { addDoc, collection, getDoc } from 'firebase/firestore'
import { db } from "../../firebaseConfig.js"
import niveles from "../../niveles.js"
import { useContext, useState } from "react"
import { CartContext } from "../../Context/Context.jsx"
import { FontAwesome } from '@expo/vector-icons';


const TarjetaNivel = ( {data, nivel, tiempo, navigation} ) => {
    const [estado, setEstado] = useState()
    const {closed, setClosed, userRegistro, idiomaActual} = useContext(CartContext)


    //FUNCION PARA AGREGAR LOS NIVELES A LA BASE DE DATOS EN FIREBASE
    const test = (navigation, niveles) => {
          //AÑADIMOS EL DOCUMENTO A UNA COLECCION, ESPECIFICO LA BASE DE DATOS Y EL NOMBRE DE LA COLLECCION, LUEGO EL OBJETO QUE QUIERO AGREGAR A ESA COLECCION.
          niveles.map((nivel)=>(
              addDoc(collection(db, "niveles"), nivel)        
          ))
    }

    const rutaNivel = nivel.nombre
    return ( //AQUI LE DIGO QUE ME ENVIE A LA PANTALLA DETALLENIVEL Y ADEMAS LE PASO EL USEPARAMS ()
        <View>
        <Pressable onPress={()=>navigation.navigate("DetalleNivel", {rutaNivel, data})} style={styles.container__tarjetaNivel}>
            <View>
                <View>
                    {idiomaActual === "espana" && <Text style={styles.text}>{nivel.nombre}</Text>}
                    {idiomaActual === "francia" && <Text style={styles.text}>{nivel.nombreFrancia}</Text>}
                    {idiomaActual === "italia" && <Text style={styles.text}>{nivel.nombreItalia}</Text>}
                    {idiomaActual === "inglaterra" && <Text style={styles.text}>{nivel.nombreEstadosUnidos}</Text>}
                    {idiomaActual === "estadosUnidos" && <Text style={styles.text}>{nivel.nombreEstadosUnidos}</Text>}
                    {idiomaActual === "bandera" && <Text style={styles.text}>{nivel.nombreAlemania}</Text>}
                    {idiomaActual === "paisesBajos" && <Text style={styles.text}>{nivel.nombrePaisesBajos}</Text>}
                    {idiomaActual === "portugal" && <Text style={styles.text}>{nivel.nombrePortugal}</Text>}



            <Text style={styles.texth2}>{tiempo} min</Text>
                </View>
            </View>
            {
                !closed ?
            <View style={styles.container__candado}>
            <Image width={22} height={22} source={{uri:"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1720478069/APP%20ALFOMBRA%20DE%20FUTBOL%20AMAZON/cerrar_qrawqr.png"}}></Image>
            <Text style={styles.text__bloqueado}>Bloqueado</Text>
            </View>
            : (
                <View style={{display:"flex", flexDirection:"row", gap:5}}>
                    {
                        data.data.estrellas.completas.map(()=>(
                            <FontAwesome name="star" size={22} color="#34cee6" />                

                        ))
                    }
                                      {
                        data.data.estrellas.vacias.map(()=>(
                            <FontAwesome name="star-o" size={22} color="#34cee6" />                

                        ))
                    }
                </View>
            )
            }
        </Pressable>
        </View>
    )
}
export default TarjetaNivel