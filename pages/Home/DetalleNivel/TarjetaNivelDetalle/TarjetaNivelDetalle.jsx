import { Image, Pressable, Text, View } from "react-native"
import styles from './TarjetaNivelDetalleStyles.js'
import { useContext } from "react"
import { CartContext } from "../../../../Context/Context.jsx"
import { FontAwesome } from '@expo/vector-icons';


const TarjetaNivelDetalle = ( {setModalVisible,nivel, tiempo, navigation, ejercicio, handlePresentModalPress, numero} ) => {
    const {closed, setClosed, userRegistro, idiomaActual} = useContext(CartContext)

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
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
  {/* Caja izquierda con el número */}
  <View style={{ marginRight: 10 }}>
    <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#34cee6' }}>{numero}</Text>
  </View>

  {/* Caja derecha con los textos */}
  <View>
    <Text style={styles.text}>{ejercicio.nombre}</Text>
    <Text style={styles.texth2}>{ejercicio.duracion}</Text>
  </View>
</View>
            {
                !closed ?
            <View style={styles.container__bloqueado}> 
            <View style={{width:"100%",display:"flex",alignItems:"center"}}>
            <Image  width={22} height={22} source={{uri:"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1720478069/APP%20ALFOMBRA%20DE%20FUTBOL%20AMAZON/cerrar_qrawqr.png"}}></Image>
            </View>
                    {idiomaActual === "espana" && <Text style={{color:"white",fontFamily: 'NunitoSans_400Regular', letterSpacing:1}}>Bloqueado</Text>}
                    {idiomaActual === "italia" && <Text style={{color:"white",fontFamily: 'NunitoSans_400Regular', letterSpacing:1}}>Bloccato</Text>}
                    {idiomaActual === "francia" && <Text style={{color:"white",fontFamily: 'NunitoSans_400Regular', letterSpacing:1}}>Bloqué</Text>}
                    {idiomaActual === "bandera" && <Text style={{color:"white",fontFamily: 'NunitoSans_400Regular', letterSpacing:1}}>Blockiert</Text>}
                    {idiomaActual === "inglaterra" && <Text style={{color:"white",fontFamily: 'NunitoSans_400Regular', letterSpacing:1}}>Blocked</Text>}
                    {idiomaActual === "paisesBajos" && <Text style={{color:"white",fontFamily: 'NunitoSans_400Regular', letterSpacing:1}}>Geblokkeerd</Text>}
                    {idiomaActual === "portugal" && <Text style={{color:"white",fontFamily: 'NunitoSans_400Regular', letterSpacing:1}}>Bloqueado</Text>}
                    {idiomaActual === "estadosUnidos" && <Text style={{color:"white",fontFamily: 'NunitoSans_400Regular', letterSpacing:1}}>Blocked</Text>}
            </View>
            :
            <View style={{display:"flex", flexDirection:"row", gap:5}}>
                {
                    ejercicio.estrellas.completas.map(()=>(
                        <FontAwesome name="star" size={24} color="#34cee6" />                
                    ))
                }
                {

                      ejercicio.estrellas.vacias.map(()=>(
                        <FontAwesome name="star-o" size={24} color="#34cee6" />                
                    ))
                }
         </View>
            }

        </Pressable>
        </View>
    )
}
export default TarjetaNivelDetalle