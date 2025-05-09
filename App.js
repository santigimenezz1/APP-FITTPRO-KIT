import React, { useEffect, useContext } from 'react';
import { Alert } from 'react-native';
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
import { Text } from 'react-native';
import LoginUsuarioNavigator from './pages/LoginUsuarios/LoginUsuariosNavigator.js';
import GlobalContext, { CartContext } from './Context/Context.jsx';
import FlashMessage from 'react-native-flash-message';
import { RFValue } from 'react-native-responsive-fontsize';
import { getApp } from 'firebase/app';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';

const Tab = createBottomTabNavigator();


function MyTabs() {
  const { closed, setClosed, userRegistro, setUserOnline, userOnline, idiomaActual } = useContext(CartContext);
  console.log(idiomaActual)

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'black',
          paddingBottom: 5,
          height: RFValue(95),
          borderTopColor:"black",
          borderTopWidth:4,
          paddingBottom:20,
          borderColor:"#34cee6"
        },
      }}
    >
      <Tab.Screen name="Ejercicios" component={HomeNavigator} options={{
        tabBarIcon: () => <FontAwesome5 name="play" size={20} color="white" />,
        tabBarLabel: () => (
          <Text style={{ 
            color: 'white', 
            fontSize: RFValue(18), 
            fontFamily: 'Roboto_400Regular',
            letterSpacing: 1,
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            textAlignVertical:"center",
            left:25
           
          }}>
                {idiomaActual === "espana" && <Text>Ejercicios</Text>}
                { idiomaActual === "italia" && <Text>Esercizi</Text>}
                { idiomaActual === "francia" && <Text >Exercices</Text>}
                { idiomaActual === "bandera" && <Text >Übungen</Text>}
                { idiomaActual === "paises bajos" && <Text >Oefeningen</Text>}
                { idiomaActual === "inglaterra" && <Text >Exercises</Text>}
                { idiomaActual === "portugal" && <Text>Exercícios</Text>}          </Text>
        ),
      }} />
     
      <Tab.Screen name="Perfil" component={Perfil} options={{
        tabBarIcon: () => <Octicons name="person-fill" size={26} color="white" />,
        tabBarLabel: () => (
          <Text style={{ 
            color: 'white', 
            fontSize: RFValue(18), 
            fontFamily: 'Roboto_400Regular',
            letterSpacing: 1,
            alignSelf:"center",
            textAlign:"center",
            left:25
          }}>
{ idiomaActual === "espana" && <Text style={{textAlign:"center", alignSelf:"center"}}>Perfil</Text> }
{ idiomaActual === "italia" && <Text>Profilo</Text> }
{ idiomaActual === "francia" && <Text>Profil</Text> }
{ idiomaActual === "bandera" && <Text>Profil</Text> }
{ idiomaActual === "paises bajos" && <Text>Profiel</Text> }
{ idiomaActual === "inglaterra" && <Text>Profile</Text> }
{ idiomaActual === "portugal" && <Text>Perfil</Text> }        </Text>
        ),
      }} />
     
    </Tab.Navigator>
  );
}
export default function App() {
  let [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  useEffect(() => {
    const checkForUpdate = async () => {
      try {
        const latestVersion = await VersionCheck.getLatestVersion();
        const currentVersion = VersionCheck.getCurrentVersion();

        if (currentVersion < latestVersion) {
          Alert.alert(
            "Actualización disponible",
            "Debes actualizar la app para seguir usándola.",
            [
              { text: "Actualizar", onPress: () => Linking.openURL(VersionCheck.getStoreUrl()) }
            ],
            { cancelable: false }
          );
        }
      } catch (error) {
        console.error("Error al verificar actualizaciones:", error);
      }
    };

    checkForUpdate();
  }, []);

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

function MainComponent() {
  const { usuarioOn } = useContext(CartContext);
  return usuarioOn ? <MyTabs /> : <LoginUsuarioNavigator />;
}
