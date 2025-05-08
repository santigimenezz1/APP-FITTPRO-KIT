import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container__crearPerfil:{
        width:"100%",
        height:"100%",
        backgroundColor:"black",
        display:"flex",
        alignItems:"center",
        paddingTop:50
    },
    input:{
        width:300,
        height:45,
        color:"white",
        padding:5,
        borderRadius:12,
        backgroundColor: "hsl(215, 18%, 13%)",
        paddingLeft:10,
        fontFamily: 'NunitoSans_400Regular',
        letterSpacing:1

    },
    text:{
        color:"white",
        fontFamily: 'NunitoSans_400Regular',
        letterSpacing:1
    },
    container__input:{
        display:"flex",
        gap:10
    },
    botonCrearPerfil:{
        width:150,
        height:40,
        borderRadius:12,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "hsl(160, 45%, 52%)",
        marginTop:30
    }
})
export default styles