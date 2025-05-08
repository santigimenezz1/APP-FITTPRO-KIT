
import React from "react";
import { View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
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
                    backgroundColor:"black"
                },
                headerTintColor: 'white', 

            }}>
                <Stack.Screen name="Principal" component={LoginUsuarios} options={{ headerShown: false }}/>
                <Stack.Screen name="Iniciar sesión" component={InicioSesion} />
                <Stack.Screen name="Registrarse" component={Registro} />
                <Stack.Screen name="Crear Perfil" component={CrearPerfil} />
                <Stack.Screen name="Cargar imagen" component={CargarImagen} />


            </Stack.Navigator>
        </View>
    );
}
export default LoginUsuarioNavigator;