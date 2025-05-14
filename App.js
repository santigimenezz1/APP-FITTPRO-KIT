import React, { useEffect, useContext } from 'react';
import { Alert, Text, Image, View } from 'react-native';
import VersionCheck from 'react-native-version-check';
import * as Linking from 'expo-linking';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigator from './pages/Home/HomeNavigator.js';
import Perfil from './pages/Perfil/Perfil.jsx';
import AppLoading from 'expo-app-loading';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';
import { FontAwesome5 } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import LoginUsuarioNavigator from './pages/LoginUsuarios/LoginUsuariosNavigator.js';
import GlobalContext, { CartContext } from './Context/Context.jsx';
import FlashMessage from 'react-native-flash-message';
import { RFValue } from 'react-native-responsive-fontsize';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import Lenguaje from './pages/Lenguaje/Lenguaje.jsx';

const Tab = createBottomTabNavigator();

function MyTabs() {
  const { closed, setClosed, userRegistro, setUserOnline, userOnline, idiomaActual } = useContext(CartContext);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'black',
          height: RFValue(90),
          borderTopColor: 'black',
          borderTopWidth: 4,
          paddingBottom: 20,
          borderColor: '#FF6B00',
        },
        tabBarLabel: ({ focused }) => {
          let label = '';
          if (route.name === 'Ejercicios') {
            if (idiomaActual === 'espana') label = 'Ejercicios';
            else if (idiomaActual === 'italia') label = 'Esercizi';
            else if (idiomaActual === 'francia') label = 'Exercices';
            else if (idiomaActual === 'bandera') label = 'Übungen';
            else if (idiomaActual === 'paisesBajos') label = 'Oefeningen';
            else if (idiomaActual === 'inglaterra') label = 'Exercises';
            else if (idiomaActual === 'estadosUnidos') label = 'Exercises';

            else if (idiomaActual === 'portugal') label = 'Exercícios';
          } else if (route.name === 'Lenguaje') {
            if (idiomaActual === 'espana') label = 'Lenguaje';
            else if (idiomaActual === 'italia') label = 'Linguaggio';
            else if (idiomaActual === 'francia') label = 'Langage';
            else if (idiomaActual === 'bandera') label = 'Sprache';
            else if (idiomaActual === 'paisesBajos') label = 'Taal';
            else if (idiomaActual === 'inglaterra') label = 'Language';
            else if (idiomaActual === 'estadosUnidos') label = 'Language';

            else if (idiomaActual === 'portugal') label = 'Linguagem';
          } else if (route.name === 'Perfil') {
            if (idiomaActual === 'espana') label = 'Cuenta';
            else if (idiomaActual === 'italia') label = 'Account';
            else if (idiomaActual === 'francia') label = 'Compte';
            else if (idiomaActual === 'bandera') label = 'Konto';
            else if (idiomaActual === 'paisesBajos') label = 'Account';
            else if (idiomaActual === 'inglaterra') label = 'Account';
            else if (idiomaActual === 'estadosUnidos') label = 'Account';
            else if (idiomaActual === 'portugal') label = 'Conta';
          }

          return (
            <Text style={{
              color: focused ? '#FF6B00' : 'white',
              fontSize: RFValue(13),
              fontFamily: 'Roboto_400Regular',
              letterSpacing: 1,
              textAlign: 'center',
            }}>
              {label}
            </Text>
          );
        }
      })}
    >
      <Tab.Screen
        name="Ejercicios"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <FontAwesome5 name="play" size={20} color={focused ? '#FF6B00' : 'white'} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Lenguaje"
        component={Lenguaje}
        options={{
          tabBarIcon: () => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={{ uri: 'https://res.cloudinary.com/dcf9eqqgt/image/upload/v1746867672/planeta-tierra_m0mpha.png' }}
                style={{ width: 30, height: 30 }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Octicons name="person-fill" size={26} color={focused ? '#34cee6' : 'white'} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function MainComponent() {
  const { usuarioOn } = useContext(CartContext);
  return usuarioOn ? <MyTabs /> : <LoginUsuarioNavigator />;
}

export default function App() {
  let [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
    Roboto_400Regular,
  });

  

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <GlobalContext>
      <NavigationContainer>
        <MainComponent />
        <FlashMessage position="center" />
      </NavigationContainer>
    </GlobalContext>
  );
}
