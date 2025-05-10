import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container__tarjetaNivelDetalle:{
 
    },
    container__tarjetaNivel:{
        width:"100%",
        padding:14,
        paddingLeft:20,
        borderRadius:10,
        backgroundColor: "hsl(215, 18%, 13%)",
        height:RFValue(85),
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
  
    },
    container__bloqueado:{
      display:"flex",
      justifyContent:"center",
      alignContent:"center",
      gap:3 
    },
    text:{
        color:"white",
        fontSize: RFValue(20), // Ajusta el tamaño de la fuente de manera responsiva
        fontWeight:"bold",
        fontFamily: 'NunitoSans_400Regular',
        letterSpacing:1.7

    },
    texth2:{
        color:"white",
        fontFamily: 'NunitoSans_400Regular',
        letterSpacing:1,
        fontSize: RFValue(12), // Ajusta el tamaño de la fuente de manera responsiva
    }
})
export default styles