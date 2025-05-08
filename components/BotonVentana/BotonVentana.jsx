// BotonVentana.js
import React, { useCallback, useRef, useMemo } from 'react';
import { StyleSheet, Text, View, Button, Image, Pressable } from 'react-native';
import BottomSheet, { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import TarjetaNivelDetalle from '../../pages/Home/DetalleNivel/TarjetaNivelDetalle/TarjetaNivelDetalle';

const BotonVentana = ( {nivel, tiempo, navigation, ejercicio} ) => {
  // ref
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['5%', '30%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <BottomSheetModalProvider>
      <View style={styles.container__navBar__menu}>
        <Pressable style={{zIndex:-1}} onPress={()=>handlePresentModalPress()}>
          <TarjetaNivelDetalle nivel={nivel} tiempo={tiempo} navigation={navigation} ejercicio={ejercicio} handlePresentModalPress={handlePresentModalPress} />
        </Pressable>
                </View>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <View style={{zIndex:10}}>
          <View style={styles.contentContainer}>
            <View style={styles.contentContainer__idiomaPrincipal}>
                <Image width={30} height={30} source={{uri:"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1720483276/APP%20ALFOMBRA%20DE%20FUTBOL%20AMAZON/bandera_g5nhnc.png"}}></Image>
                <Text>Español</Text>
            </View>
            <View style={styles.contentContainer__idiomaSecundario}>
                <Image width={30} height={30} source={{uri:"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1720483276/APP%20ALFOMBRA%20DE%20FUTBOL%20AMAZON/bandera_g5nhnc.png"}}></Image>
                <Text>Español</Text>
            </View>
            <View style={styles.contentContainer__idiomaSecundario}>
                <Image width={30} height={30} source={{uri:"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1720483276/APP%20ALFOMBRA%20DE%20FUTBOL%20AMAZON/bandera_g5nhnc.png"}}></Image>
                <Text>Español</Text>
            </View>
            <View style={styles.contentContainer__idiomaSecundario}>
                <Image width={30} height={30} source={{uri:"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1720483276/APP%20ALFOMBRA%20DE%20FUTBOL%20AMAZON/bandera_g5nhnc.png"}}></Image>
                <Text>Español</Text>
            </View>
            <View style={styles.contentContainer__idiomaSecundario}>
                <Image width={30} height={30} source={{uri:"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1720483276/APP%20ALFOMBRA%20DE%20FUTBOL%20AMAZON/bandera_g5nhnc.png"}}></Image>
                <Text>Español</Text>
            </View>
          </View>

          </View>
        </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'black',
 
    width:70,
    height:80,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:100
    
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:"white",
    display:"flex",
    justifyContent:"center"
    
  },
  contentContainer__idiomaPrincipal:{
    borderBottomWidth:1,
    width:"100%",
    borderColor:"red",
    display:"flex",
    flexDirection:"row",
    gap:10,
    padding:10,
    alignItems:"center"
  },
  contentContainer__idiomaSecundario:{
    width:"100%",
    borderColor:"red",
    display:"flex",
    flexDirection:"row",
    gap:10,
    padding:10,
    alignItems:"center"
  },
});

export default BotonVentana;
