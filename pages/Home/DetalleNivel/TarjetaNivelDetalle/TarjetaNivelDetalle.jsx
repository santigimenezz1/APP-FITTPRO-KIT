import { Image, Pressable, Text, View } from "react-native"
import styles from './TarjetaNivelDetalleStyles.js'
import { useContext } from "react"
import { CartContext } from "../../../../Context/Context.jsx"
import { FontAwesome } from '@expo/vector-icons';


const TarjetaNivelDetalle = ( {setModalVisible,nivel, tiempo, navigation, ejercicio, handlePresentModalPress} ) => {
    const {closed, setClosed, userRegistro} = useContext(CartContext)

    const navegarDetalleVideo = () => {
        if(closed){
            navigation.navigate("DetalleNivelVideo", {ejercicio})
        }else{
            setModalVisible()
        }
    }

    
    return (
        <View style={styles.container__tarjetaNivelDetalle}>
        <Pressable onPress={()=>navegarDetalleVideo()} style={styles.container__tarjetaNivel}>
            <View>
            <Text style={styles.text}>{ejercicio.nombre}</Text>
            <Text style={styles.texth2}>{ejercicio.duracion}</Text>
            </View>
            {
                !closed ?
            <View style={styles.container__bloqueado}> 
            <View style={{width:"100%",display:"flex",alignItems:"center"}}>
            <Image  width={22} height={22} source={{uri:"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1720478069/APP%20ALFOMBRA%20DE%20FUTBOL%20AMAZON/cerrar_qrawqr.png"}}></Image>
            </View>
            <Text style={{color:"white",fontFamily: 'NunitoSans_400Regular', letterSpacing:1}}>Bloqueado</Text>
            </View>
            :
            <View style={{display:"flex", flexDirection:"row", gap:5}}>
                {
                    ejercicio.estrellas.completas.map(()=>(
                        <FontAwesome name="star" size={24} color="hsl(199, 76%, 28%)" />                
                    ))
                }
                {

                      ejercicio.estrellas.vacias.map(()=>(
                        <FontAwesome name="star-o" size={24} color="hsl(199, 76%, 28%)" />                
                    ))
                }
         </View>
            }

        </Pressable>
        </View>
    )
}
export default TarjetaNivelDetalle