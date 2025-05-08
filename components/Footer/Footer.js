import { RFValue } from "react-native-responsive-fontsize";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    footer:{
        height:RFValue(70),
        borderWidth:1,
        width:"100%",
        position:"fixed",
        bottom:0,
        backgroundColor:"hsl(216, 13%, 8%)",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        borderTopColor:"hsl(216, 9%, 22%)",
    },
    footer__play:{
        width:"50%",
        display:"flex",
        justifyContent:"center", 
        alignItems:"center",
        gap:0
    },
    footer__play__text:{
      fontSize:RFValue(10),
      color:"white",
     
    }
})
export default styles