import React, { useEffect } from 'react';
import {
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import ModalCodigoDesbloqueo from '../../../components/ModalCodigoDesbloqueo/ModalCodigoDesbloqueo';
import styles from './DetalleNivelStyles';

const DetalleNivel = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { rutaNivel, data } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: rutaNivel });
  }, [navigation, rutaNivel]);

  return (
    <View style={styles.container}>
      <ImageBackground
        // Si tienes la imagen en tu carpeta assets:
        // source={require('../../../../assets/fondo.jpg')}
        // O bien, usando una URL remota:
        source={{ uri: 'https://res.cloudinary.com/dcf9eqqgt/image/upload/v1747232068/20250514_1613_Entrenamiento_con_Escalera_Agilidad_remix_01jv7j73wzfw1rvhv9bc1rzhqt_dps9y5.png' }}
        style={styles.backgroundImage}
        imageStyle={styles.backgroundImageStyle}
      >
        <ScrollView
          style={styles.container__detalleNivel}
          contentContainerStyle={styles.contentContainer}
        >
          {data &&
            data.data.ejercicios.map((ejercicio, index) => (
              <ModalCodigoDesbloqueo
                key={index}
                nivel={rutaNivel}
                tiempo={ejercicio.tiempo}
                navigation={navigation}
                ejercicio={ejercicio}
                numero={index + 1}
              />
            ))}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default DetalleNivel;
