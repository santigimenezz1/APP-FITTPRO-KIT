import { Pressable, Text, TextInput, View } from "react-native"
import styles from "./CrearPerfil.js"
import { useRoute } from "@react-navigation/native";
import { useContext, useState } from "react";
import { CartContext } from "../../../Context/Context.jsx";


const CrearPerfil = ( {navigation} ) => {
    const { userRegistro, setUserRegistro } = useContext(CartContext);
    const [data, setData] = useState({
        nombre: "",
        pais: "",
        numeroCamiseta: "",
        posicion: "",
        clubFavorito: ""
      });

      const EnviarRegistroUsuario = () => {
        setUserRegistro(
          {
            ...userRegistro,
            nombre: data.nombre,
            pais: data.pais,
            numeroCamiseta: data.numeroCamiseta,
            posicion: data.posicion,
            clubFavorito: data.clubFavorito
          }
        )
        navigation.navigate("Cargar imagen");
      };
    
    return (
        <View style={styles.container__crearPerfil}>
            <View style={styles.container__input}>
            <TextInput onChangeText={(text)=>setData({...data, nombre: text})} style={styles.input} placeholderTextColor="white" placeholder="Nombre"></TextInput>
            <TextInput onChangeText={(text)=>setData({...data, pais: text})} style={styles.input} placeholderTextColor="white" placeholder="Pais"></TextInput>
            <TextInput onChangeText={(text)=>setData({...data, numeroCamiseta: text})}style={styles.input} placeholderTextColor="white" placeholder="Numero de camiseta"></TextInput>
            <TextInput onChangeText={(text)=>setData({...data, posicion: text})} style={styles.input} placeholderTextColor="white" placeholder="Posición"></TextInput>
            <TextInput onChangeText={(text)=>setData({...data, clubFavorito: text})} style={styles.input} placeholderTextColor="white" placeholder="Club favorito"></TextInput>
            </View>
            <Pressable onPress={()=>EnviarRegistroUsuario()} style={styles.botonCrearPerfil}>
                <Text style={styles.text}>Continuar</Text>
            </Pressable>
        </View>
    )
}
export default CrearPerfil