// TarjetaNivel.js
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container__tarjetaNivel: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 16,
    position: "relative",
  },
  fondoImagen: {
    width: "100%",
    height: RFValue(150),
    borderRadius: 12,
    overflow: "hidden",
    marginTop: 10,
    justifyContent: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  text: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "NunitoSans_400Regular",
    textAlign: "center",
  },
  centroTexto: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  tarjetaNaranja: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "#FF6B00",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    maxWidth: "80%",
  },
  textoTarjetaNaranja: {
    color: "white",
    fontSize: RFValue(13),
    fontFamily: "NunitoSans_400Regular",
  },
  container__candado: {
    alignItems: "center",
    gap: 3,
  },
  candadoTexto: {
    color: "white",
    fontFamily: "NunitoSans_400Regular",
  },
});

export default styles;
