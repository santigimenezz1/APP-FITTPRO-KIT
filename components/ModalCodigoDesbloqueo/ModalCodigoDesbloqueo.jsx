import React, {useContext, useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import TarjetaIngresoCodigo from '../../pages/Home/TarjetaIngesoCodigo/TarjetaingresoCodigo';
import TarjetaNivelDetalle from '../../pages/Home/DetalleNivel/TarjetaNivelDetalle/TarjetaNivelDetalle';
import { CartContext } from '../../Context/Context';

const ModalCodigoDesbloqueo = ( {nivel, tiempo, navigation, ejercicio, numero } ) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [codigoCorrecto, setCodigoCorrecto] = useState(false)
      const {closed, setClosed, userRegistro, idiomaActual} = useContext(CartContext)
  

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
{idiomaActual === "espana" && (
  <Text style={styles.modalText}>Verificar para desbloquear</Text>
)}
{idiomaActual === "italia" && (
  <Text style={styles.modalText}>Verifica per sbloccare</Text>
)}
{idiomaActual === "francia" && (
  <Text style={styles.modalText}>Vérifier pour débloquer</Text>
)}
{idiomaActual === "bandera" && (
  <Text style={styles.modalText}>Überprüfen, um zu entsperren</Text>
)}
{idiomaActual === "inglaterra" && (
  <Text style={styles.modalText}>Verify to unlock</Text>
)}
{idiomaActual === "paisesBajos" && (
  <Text style={styles.modalText}>Verifiëren om te ontgrendelen</Text>
)}
{idiomaActual === "portugal" && (
  <Text style={styles.modalText}>Verificar para desbloquear</Text>
)}
{idiomaActual === "estadosUnidos" && (
  <Text style={styles.modalText}>Verify to unlock</Text>
)}

            <TarjetaIngresoCodigo codigoCorrecto={codigoCorrecto} setCodigoCorrecto={setCodigoCorrecto} CerrarModal={CerrarModal} />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => CerrarModal()}>
{idiomaActual === "espana" && (
  <Text style={styles.textStyle}>Salir</Text>
)}
{idiomaActual === "italia" && (
  <Text style={styles.textStyle}>Uscire</Text>
)}
{idiomaActual === "francia" && (
  <Text style={styles.textStyle}>Quitter</Text>
)}
{idiomaActual === "bandera" && (
  <Text style={styles.textStyle}>Beenden</Text>
)}
{idiomaActual === "inglaterra" && (
  <Text style={styles.textStyle}>Exit</Text>
)}
{idiomaActual === "paisesBajos" && (
  <Text style={styles.textStyle}>Afsluiten</Text>
)}
{idiomaActual === "portugal" && (
  <Text style={styles.textStyle}>Sair</Text>
)}
{idiomaActual === "estadosUnidos" && (
  <Text style={styles.textStyle}>Exit</Text>
)}
            </Pressable>
      {codigoCorrecto && (
  <>
    {idiomaActual === "espana" && (
      <Text style={{ color: "red", fontSize: 16, marginTop: 10, fontFamily: 'NunitoSans_400Regular' }}>
        Código incorrecto
      </Text>
    )}
    {idiomaActual === "italia" && (
      <Text style={{ color: "red", fontSize: 16, marginTop: 10, fontFamily: 'NunitoSans_400Regular' }}>
        Codice errato
      </Text>
    )}
    {idiomaActual === "francia" && (
      <Text style={{ color: "red", fontSize: 16, marginTop: 10, fontFamily: 'NunitoSans_400Regular' }}>
        Code incorrect
      </Text>
    )}
    {idiomaActual === "bandera" && (
      <Text style={{ color: "red", fontSize: 16, marginTop: 10, fontFamily: 'NunitoSans_400Regular' }}>
        Falscher Code
      </Text>
    )}
    {idiomaActual === "inglaterra" && (
      <Text style={{ color: "red", fontSize: 16, marginTop: 10, fontFamily: 'NunitoSans_400Regular' }}>
        Incorrect code
      </Text>
    )}
    {idiomaActual === "paisesBajos" && (
      <Text style={{ color: "red", fontSize: 16, marginTop: 10, fontFamily: 'NunitoSans_400Regular' }}>
        Onjuiste code
      </Text>
    )}
    {idiomaActual === "portugal" && (
      <Text style={{ color: "red", fontSize: 16, marginTop: 10, fontFamily: 'NunitoSans_400Regular' }}>
        Código incorreto
      </Text>
    )}
    {idiomaActual === "estadosUnidos" && (
      <Text style={{ color: "red", fontSize: 16, marginTop: 10, fontFamily: 'NunitoSans_400Regular' }}>
        Incorrect code
      </Text>
    )}
  </>
)}

          </View>
        </View>
      </Modal>
      <Pressable
        onPress={() => setModalVisible(true)}>
    <TarjetaNivelDetalle setModalVisible={setModalVisible} nivel={nivel} tiempo={tiempo} navigation={navigation} ejercicio={ejercicio} numero = {numero} />
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
    backgroundColor: '#FF6B00',
    width:120
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor:"#FF6B00",
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