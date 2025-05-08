import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import TarjetaIngresoCodigo from '../../pages/Home/TarjetaIngesoCodigo/TarjetaingresoCodigo';
import TarjetaNivelDetalle from '../../pages/Home/DetalleNivel/TarjetaNivelDetalle/TarjetaNivelDetalle';

const ModalCodigoDesbloqueo = ( {nivel, tiempo, navigation, ejercicio} ) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [codigoCorrecto, setCodigoCorrecto] = useState(false)

  const CerrarModal = () => {
    setCodigoCorrecto(false)
    setModalVisible(false)
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Verificar para desbloquear</Text>

            <TarjetaIngresoCodigo codigoCorrecto={codigoCorrecto} setCodigoCorrecto={setCodigoCorrecto} CerrarModal={CerrarModal} />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => CerrarModal()}>
              <Text style={styles.textStyle}>Salir</Text>
            </Pressable>
            {
              codigoCorrecto &&
            <Text style={{color:"red", fontSize:16, marginTop:10,fontFamily: 'NunitoSans_400Regular',}}>Codigo incorrecto </Text>
            }
          </View>
        </View>
      </Modal>
      <Pressable
        onPress={() => setModalVisible(true)}>
    <TarjetaNivelDetalle setModalVisible={setModalVisible} nivel={nivel} tiempo={tiempo} navigation={navigation} ejercicio={ejercicio} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    width:"90%",
    backgroundColor: "hsl(216, 13%, 8%)",
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    width:70,
    borderRadius: 22,
    padding:8,
    paddingLeft:15,
    paddingRight:15,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: 'red',
  },
  buttonClose: {
    backgroundColor: 'hsl(199, 76%, 28%)',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor:"hsl(199, 76%, 28%)",
    fontFamily: 'NunitoSans_400Regular',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color:"white",
    fontSize:18,
    fontFamily: 'NunitoSans_400Regular',
    letterSpacing:1,
    
  },
});

export default ModalCodigoDesbloqueo;