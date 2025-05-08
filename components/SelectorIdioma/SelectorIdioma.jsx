import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { View, StyleSheet } from "react-native";

const SelectorIdioma = () => {
  const [selectedValue, setSelectedValue] = useState("java");

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        itemStyle={styles.itemStyle} // Personaliza el estilo de los items dentro del Picker
        dropdownIconColor="#000" // Cambia el color del icono de la flecha
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    overflow: 'hidden', // Para asegurar que los bordes redondeados se muestren correctamente
    width: 150,
    height: 50,
  },
  picker: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    backgroundColor: 'white',
  },
  itemStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default SelectorIdioma;
