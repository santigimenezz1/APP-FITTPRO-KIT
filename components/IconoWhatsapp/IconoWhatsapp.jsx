import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Linking } from 'react-native';

const IconoWhatsapp = () => {
  const handleWhatsAppClick = () => {
    // Número de teléfono con prefijo internacional (+34) para España
    const phoneNumber = "34610046565";
    const message = "Hola! Necesito un código de acceso a la App FITTLLINE";

    // Construye la URL de WhatsApp
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    // Abre la URL con WhatsApp
    Linking.openURL(url).catch((err) => console.error('Error al abrir WhatsApp', err));
  };

  return (
    <TouchableOpacity onPress={handleWhatsAppClick} style={{ backgroundColor: '#25D366', borderRadius: 50, padding: 10, width:"100%", display:"flex", justifyContent:"center", alignItems:"center" }}>
      <Image
        source={{ uri: 'https://res.cloudinary.com/dcf9eqqgt/image/upload/v1738180085/whatsapp_xgrinw.png' }} // Imagen de WhatsApp
        style={styles.iconStyle}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconoWhatsapp: {
    width:70,
    backgroundColor: '#25D366', // Fondo verde de WhatsApp
    borderRadius: 50,            // Hacer el icono redondo
    padding: 10,
    textAlign:"center"                 
  },
  iconStyle: {
    width: 50,    // Ancho de la imagen
    height: 50,   // Alto de la imagen
    borderRadius: 50, // Asegura que la imagen sea redonda
  },
});

export default IconoWhatsapp;
