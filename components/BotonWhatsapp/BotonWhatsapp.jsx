import React from 'react';
import { View, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BotonWhatsapp = () => {
  const handlePress = () => {
    const phoneNumber = '34610046565'; // Tu número con el prefijo de España
    const url = `https://wa.me/${phoneNumber}`;
    Linking.openURL(url);
  };

  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <Icon name="whatsapp" size={40} color="#25D366" />
      </TouchableOpacity>
    </View>
  );
};

export default BotonWhatsapp;
