// TarjetaNivel.jsx
import { ImageBackground, Pressable, Text, View } from "react-native";
import styles from "../TarjetaNivel/TarjetaNivel.js";
import { useContext } from "react";
import { CartContext } from "../../Context/Context.jsx";
import { FontAwesome } from '@expo/vector-icons';

const TarjetaNivel = ({ data, nivel, tiempo, navigation }) => {
  const { closed, idiomaActual } = useContext(CartContext);
  const rutaNivel = nivel.nombre;

  return (
    <ImageBackground
      source={{
        uri:
          nivel.imagen ||
          "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1747219924/4125b593-3b1a-446b-b222-6d9dd6945592_lymwxp.png",
      }}
      style={styles.fondoImagen}
      imageStyle={{ borderRadius: 12 }}
    >
      {/* Capa oscura */}
      <View style={styles.overlay} />

      <Pressable
        onPress={() => navigation.navigate("DetalleNivel", { rutaNivel, data })}
        style={styles.container__tarjetaNivel}
      >
        {/* Texto centrado */}
        <View style={styles.centroTexto}>
          <Text style={styles.text}>
            {idiomaActual === "espana" ? nivel.nombre : nivel.nombreAlemania}
          </Text>
        </View>

        {/* Tarjeta naranja en la esquina inferior izquierda */}
        <View style={styles.tarjetaNaranja}>
          <Text style={styles.textoTarjetaNaranja}>
            {nivel.nombre === "Escalera" && "¡PIES RÁPIDOS Y PRECISOS!"}
            {nivel.nombre === "Conos" && "¡DOMINA EL BALÓN!"}
            {nivel.nombre === "Mixtos" && "¡RETO COMPLETO!"}
            {nivel.nombre === "Con balón" && "¡PELOTA EN ACCIÓN!"}
          </Text>
        </View>

        {/* Estrellas o candado */}
        {closed ? (
          <View style={styles.container__candado} />
        ) : (
          <View style={{ flexDirection: "row", gap: 5, position: 'absolute', top: 10, right: 10 }}>
            {data.data.estrellas.completas.map((_, i) => (
              <FontAwesome key={i} name="star" size={22} color="#FF6B00" />
            ))}
            {data.data.estrellas.vacias.map((_, i) => (
              <FontAwesome key={i} name="star-o" size={22} color="#FF6B00" />
            ))}
          </View>
        )}
      </Pressable>
    </ImageBackground>
  );
};

export default TarjetaNivel;
