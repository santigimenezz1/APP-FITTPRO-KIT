const { View, Text, Image, Pressable } = require("react-native")
import { useContext, useState } from "react";
import { CartContext } from "../../../Context/Context";
import styles from "./CargarImagen"
import * as ImagePicker from 'expo-image-picker';
import { Button } from "react-native-paper";
import { addDoc, collection } from "firebase/firestore";
import { create, db, login } from "../../../firebaseConfig";


const CargarImagen = ({navigation}) => {
    const { userRegistro, setUserRegistro, setUsuarioOn } = useContext(CartContext);
    const [imagen, setImagen] = useState()
    const navig = navigation

    const crearUsuario = async  () => {
            await create(userRegistro.email, userRegistro.password); // Espera a que create termine
            await login(userRegistro.email, userRegistro.password, setUsuarioOn)
            let userColecction = collection(db, "usuarios")
            addDoc(userColecction, userRegistro)
    }
   
 return (
    <View style={styles.container__cargarImagen}>
        <View style={styles.container__imagen}>
            <Image style={styles.imagen}  height={300} width={200} source={{uri:imagen}}></Image>
        </View>
        <Pressable style={styles.botonCargar}>
                <Text onPress={()=>openImagePicker()} style={styles.text}>Cargar</Text>
            </Pressable>
            <Pressable style={styles.botonOmitir}>
                <Text style={styles.text}>Omitir</Text>
            </Pressable>
            <Button textColor="white" onPress={()=>crearUsuario()}>Crear usuario</Button>
    </View>
 )
}
export default CargarImagen