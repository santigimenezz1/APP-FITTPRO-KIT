import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container__tarjetaConsejos:{
        width:"100%",
        height:"auto",
        borderRadius:12,
        backgroundColor: "hsl(215, 18%, 13%)",
        display:"flex",
        gap:2,
        padding:10
    

    },
    tittle:{
        color:"white",
        fontSize:RFValue(25),
        padding:5,
        paddingLeft:20,
        fontFamily: 'NunitoSans_400Regular',
        letterSpacing:2
    },
    container__consejos:{
 
        display:"flex",
        flexDirection:"row",
        height:"auto",
        padding:10,
        alignItems:"center",
        gap:10, 
        justifyContent:"center",
        alignItems:"center",
        gap:20
    }
})
export default styles