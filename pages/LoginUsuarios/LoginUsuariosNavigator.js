import React from "react";
import { View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import LoginUsuarios from "./LoginUsuarios.jsx";
import InicioSesion from "./InicioSesion/InicioSesion.jsx";
import Registro from "./Registro/Registro.jsx";
import CrearPerfil from "./CrearPerfil/CrearPerfil.jsx";
import CargarImagen from "./CargarImagen/CargarImagen.jsx";


const Stack = createStackNavigator();

const LoginUsuarioNavigator = () => {
    
    return (
        <View style={{ flex: 1 }}>
            <Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor:"black",
                    borderWidth:3,
                    borderBottomColor:"#FF6B00"
                },
                headerTintColor: 'white', 
                headerTitleStyle: {
                    fontSize: 20,          // Tamaño de fuente del título
                    lineHeight: 24,        // Altura de línea del título
                    letterSpacing: 2.5,    // Espaciado entre letras del título
                    textAlign: 'center',   // Alineación del texto
                    fontFamily: 'NunitoSans_400Regular',
                    
                },
                
            }}>
           <Stack.Screen name="Principal" component={LoginUsuarios} options={{ headerShown: false }}/>
           <Stack.Screen name="Iniciar sesión" component={InicioSesion} />
           <Stack.Screen name="Registrarse" component={Registro} />
           { /*<Stack.Screen name="Crear Perfil" component={CrearPerfil} /  */}
           {/* <Stack.Screen name="Cargar imagen" component={CargarImagen} /> */}
            </Stack.Navigator>
        </View>
    );
}
export default LoginUsuarioNavigator;
