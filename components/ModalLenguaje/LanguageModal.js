import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

const ModalLenguaje = ({ isVisible, onClose, onSelectLanguage }) => {
  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose} style={{ justifyContent: 'flex-start', margin: 0 }}>
      <View style={{ width:100, backgroundColor: 'white', padding: 22, marginTop: 50, marginRight: 20 }}>
        <Text style={{ fontSize: 20, marginBottom: 12 }}>Selecciona un idioma</Text>
        <TouchableOpacity onPress={() => onSelectLanguage('es')}>
          <Text style={{ fontSize: 16, marginBottom: 12 }}>Español</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onSelectLanguage('en')}>
          <Text style={{ fontSize: 16, marginBottom: 12 }}>Inglés</Text>
        </TouchableOpacity>
        {/* Añadir más opciones de idioma según sea necesario */}
        <TouchableOpacity onPress={onClose}>
          <Text style={{ fontSize: 16, color: 'blue' }}>Cerrar</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ModalLenguaje;
