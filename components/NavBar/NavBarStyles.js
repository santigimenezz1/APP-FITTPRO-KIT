import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container__navBar:{
        width:"100%",
        padding:15,
        paddingLeft:20,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    container__navBar__titulo:{
     display:"flex",
     flexDirection:"row",
     width:"50%",
     gap:10,
     alignItems:"center",
     borderWidth:1,
   
    },
    container__navBar__titulo__text:{
        color:"white",
        fontSize:RFValue(22),
        fontFamily: 'NunitoSans_400Regular',
        letterSpacing:4,
        
    },
    container__navBar__menu:{
      
    }
})

export default styles