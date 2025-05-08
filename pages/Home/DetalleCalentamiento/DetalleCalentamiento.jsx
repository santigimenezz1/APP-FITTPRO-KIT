import { Text, View } from "react-native"
import TarjetaNivelDetalle from "../DetalleNivel/TarjetaNivelDetalle/TarjetaNivelDetalle"
import { ScrollView } from "react-native-gesture-handler"
import styles from "./DetalleCalentamientoStyles"
import { useRoute } from "@react-navigation/native"
import ModalCodigoDesbloqueo from "../../../components/ModalCodigoDesbloqueo/ModalCodigoDesbloqueo"
import { FontAwesome5 } from "@expo/vector-icons"

const DetalleCalientamiento = ( {navigation} ) => {
    const route = useRoute(); //  usamos useRoute para acceder a los parámetros pasados a la pantalla (el nivel)
    const { nivel, data } = route.params; 
    return (
        <ScrollView 
        style={styles.container__detalleCalentamiento} 
        contentContainerStyle={styles.container__detalleCalentamiento}
    >
        <Text style={styles.detalleCalentamiento__title}><FontAwesome5 name="play" size={18} color="white" />  Calentamiento</Text>
           {
                data &&
                data.data.ejercicios.calentamiento.map((ejercicio)=>(
                    <ModalCodigoDesbloqueo nivel={nivel} tiempo={ejercicio.tiempo} navigation={navigation} ejercicio={ejercicio} />
                    ))
            }
    </ScrollView>
    )
}
export default DetalleCalientamiento