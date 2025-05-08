import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container__cargarImagen:{
        backgroundColor:"black",
        width:"100%",
        height:"100%",
        display:"flex",
        alignItems:"center",
        paddingTop:60
    },
    container__imagen:{
      height:300,
      width:200
    },
    imagen:{
       borderRadius:10 ,
       borderWidth:3,
       borderColor:"white",
       width:"100%",
       height:"100%"
    },
    botonCargar:{
        width:150,
        height:40,
        borderRadius:12,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "hsl(160, 45%, 52%)",
        marginTop:30,
    
    },
    botonOmitir:{
        width:150,
        height:40,
        borderRadius:12,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "hsl(215, 18%, 13%)",
        marginTop:30,
     
    },
    text:{
        color:"white",
        fontFamily: 'NunitoSans_400Regular',
        letterSpacing:1
    }
})

export default styles

