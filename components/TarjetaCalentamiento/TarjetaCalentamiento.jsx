import { Pressable, Text, View} from "react-native"
import styles from "./TarjetaCalentamientoStyles"
import DetalleCalientamiento from "../../pages/Home/DetalleCalentamiento/DetalleCalentamiento"
import { useContext } from "react"
import { CartContext } from "../../Context/Context"

const TarjetaCalentamiento = ( {data, nivel, tiempo, navigation} ) => {
        const {closed, setClosed, userRegistro, idiomaActual} = useContext(CartContext)
    
    return (
        <View>
        <Pressable onPress={()=>navigation.navigate("DetalleCalentamiento", {data, nivel} )} style={styles.container__tarjetaCalentamiento}>
                    {idiomaActual === "espana" && <Text style={styles.text}>{nivel.nombre}</Text>}
                    {idiomaActual === "francia" && <Text style={styles.text}>{nivel.nombreFrancia}</Text>}
                    {idiomaActual === "italia" && <Text style={styles.text}>{nivel.nombreItalia}</Text>}
                    {idiomaActual === "inglaterra" && <Text style={styles.text}>{nivel.nombreEstadosUnidos}</Text>}
                    {idiomaActual === "bandera" && <Text style={styles.text}>{nivel.nombreAlemania}</Text>}   
                    {idiomaActual === "paises bajos" && <Text style={styles.text}>{nivel.nombreAlemania}</Text>}    
                    {idiomaActual === "portugal" && <Text style={styles.text}>{nivel.nombrePortugal}</Text>}            
        
         
                    <Text style={styles.texth2}>{tiempo} min</Text>
        </Pressable>
        </View>
    )
}
export default TarjetaCalentamiento