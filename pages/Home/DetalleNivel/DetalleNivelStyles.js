import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  // Contenedor principal para que ImageBackground ocupe toda la pantalla
  container: {
    flex: 1,
  },

  // Estilo del ImageBackground para cubrir
  backgroundImage: {
    flex: 1,
    width: width,
    height: height,
  },
  backgroundImageStyle: {
    resizeMode: 'cover', // o 'stretch' si prefieres
  },

  // ScrollView transparente, para que deje ver el fondo
  container__detalleNivel: {
    flex: 1,
    backgroundColor: 'transparent',
  
  },

  // Padding interno de los ejercicios
  contentContainer: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 30,
    // Si tu versión de RN no soporta gap, reemplázalo con marginBottom en los items
    gap: 8,
  },
});
