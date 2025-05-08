import React, { useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import TarjetaNivelDetalle from './TarjetaNivelDetalle/TarjetaNivelDetalle';
import styles from './DetalleNivelStyles';
import { useNavigation, useRoute } from '@react-navigation/native';
import ModalCodigoDesbloqueo from '../../../components/ModalCodigoDesbloqueo/ModalCodigoDesbloqueo';

const DetalleNivel = () => {

    const navigation = useNavigation();
    const route = useRoute(); //  usamos useRoute para acceder a los parámetros pasados a la pantalla (el nivel)
    const { rutaNivel, data } = route.params; 


    useEffect(() => {
        navigation.setOptions({ title: rutaNivel });
    }, [navigation, rutaNivel]);


    return (
        <ScrollView 
            style={styles.container__detalleNivel} 
            contentContainerStyle={styles.contentContainer}
        >
            {
                data &&
                data.data.ejercicios.map((ejercicio)=>(
                    <ModalCodigoDesbloqueo nivel={rutaNivel} tiempo={ejercicio.tiempo} navigation={navigation} ejercicio={ejercicio} />
                    ))

            }
        </ScrollView>
    );
};

export default DetalleNivel;
