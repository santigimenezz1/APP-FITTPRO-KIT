import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container__tarjetaCalentamiento:{
        width:"100%",
        height:RFValue(100),
        borderWidth:1,
        padding:10,
        borderRadius:10,
        marginTop:10,
        backgroundColor: "#34cee6",
    
    },
    text:{
        color:"white",
        fontSize: RFValue(20), // Ajusta el tamaño de la fuente de manera responsiva
        fontFamily: 'NunitoSans_700Bold',
        letterSpacing:1

    },
    texth2:{
        color:"white",
        fontSize: RFValue(15),
        fontFamily: 'NunitoSans_400Regular',
        letterSpacing:1

         // Ajusta el tamaño de la fuente de manera responsiva
    }
})
export default styles