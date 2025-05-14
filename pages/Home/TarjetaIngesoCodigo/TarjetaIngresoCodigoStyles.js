import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    
    input:{
        color:"red",
        borderWidth:2,
        borderColor:"white",
        width: RFValue(120),
        height: RFValue(40),
        borderRadius:12,
        color:"white",
        paddingLeft:10,
        fontFamily: 'NunitoSans_400Regular',
        letterSpacing:2

    },
    button:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#FF6B00",
        padding:8,
        borderRadius:22,
        width:120,
    },
  
    container:{
        width:"100%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        gap:10,
        padding:10,      
    }
})
export default styles