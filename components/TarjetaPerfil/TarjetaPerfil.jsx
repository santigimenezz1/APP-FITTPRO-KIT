import { Image, Text, View } from "react-native"
import styles from "../TarjetaPerfil/TarjetaPerfil.js"

const TarjetaPerfil = ( {userRegistro} ) => {
    return (
        <View style={{borderColor:"hsl(169, 54%, 47%)", borderWidth:6, width:"100%", height:500, borderRadius:40, backgroundColor:"hsl(166, 63%, 41%)"}}>
            
            <View style={{width:"100%", height:"55%", display:"flex", flexDirection:"row", borderTopLeftRadius:40, borderTopRightRadius:40}}>
                <View style={{width:"30%", paddingTop:20, display:"flex", alignItems:"center"}}>
                    <Text style={{fontSize:55, fontFamily:"NunitoSans_700Bold", letterSpacing:2}}>{userRegistro.numeroCamiseta}</Text>
                    <Text fontSize={{fontSize:25, fontFamily:"NunitoSans_700Bold", letterSpacing:2}}>{userRegistro.posicion}</Text>
                    <Image width={50} height={50} source={{uri:"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1720655416/espana_woqndn.png"}}></Image>
                    <Image width={50} height={50} source={{uri:"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1720709903/valencia-2_hqzr6t.png"}}></Image>
                </View>
                <View style={{ height:"100%", width:"70%"}}>
                    <Image width={"100%"} height={"100%"} style={{objectFit:"cover", borderTopRightRadius:40}} source={{uri:"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1720655011/images_maavxo.jpg"}}></Image>
                </View>
            </View>
            <View style={{height:40, backgroundColor:"hsl(210, 18%, 13%)", borderWidth:1, borderColor:"black", display:"flex", justifyContent:"center", paddingLeft:10}}><Text style={{fontSize:25, color:"white", fontWeight:"bold", letterSpacing:4, fontFamily:"NunitoSans_700Bold", }}>{userRegistro.nombre}</Text></View>
            <View style={{height:30, backgroundColor:"hsl(172, 63%, 80%)", display:"flex", justifyContent:"center", paddingLeft:10}}></View>
            <View style={{marginTop:3, display:"flex", gap:2}}>
            <View style={{display:"flex", flexDirection:"row",justifyContent:"space-between", width:"100%", height:30, backgroundColor:"hsl(172, 63%, 80%)", display:"flex", alignItems:"center", paddingLeft:10, paddingRight:5}}><Text style={{fontFamily:"NunitoSans_700Bold",fontSize:15, letterSpacing:1}}>Horario de entrenamiento</Text><Text style={{fontFamily:"NunitoSans_700Bold",  letterSpacing:1}}>0</Text></View>
            <View style={{display:"flex", flexDirection:"row",justifyContent:"space-between", width:"100%", height:30, backgroundColor:"hsl(172, 63%, 80%)", display:"flex", alignItems:"center", paddingLeft:10, paddingRight:5}}><Text style={{fontFamily:"NunitoSans_700Bold",fontSize:15, letterSpacing:1}}>Ejercicios terminados</Text><Text style={{fontFamily:"NunitoSans_700Bold",  letterSpacing:1}}>0</Text></View>
            <View style={{display:"flex", flexDirection:"row",justifyContent:"space-between", width:"100%", height:30, backgroundColor:"hsl(172, 63%, 80%)", display:"flex", alignItems:"center", paddingLeft:10, paddingRight:5}}><Text style={{fontFamily:"NunitoSans_700Bold",fontSize:15, letterSpacing:1}}>Racha</Text><Text style={{fontFamily:"NunitoSans_700Bold",  letterSpacing:1}}>0</Text></View>
            </View>
            <View style={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center", marginTop:10}}>
            <Image width={40} height={40} source={{uri:"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1720711041/pelota_chvv8v.png"}}></Image>
            </View>
        </View>
 
    )
}
export default TarjetaPerfil