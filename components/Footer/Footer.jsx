const { View, Text } = require("react-native")
import { RFValue } from "react-native-responsive-fontsize";
import styles from "./Footer"
import Icon from 'react-native-vector-icons/MaterialIcons';


const Footer = () => {
    return (
        <View style={styles.footer}>
            <View style={styles.footer__play}>
         <Icon name="play-arrow" size={RFValue(30)} color="white"  />
         <Text style={styles.footer__play__text}>Ejercicios</Text>
            </View>

            <View style={styles.footer__play}>
         <Icon name="settings" size={RFValue(30)} color="white"  />
         <Text style={styles.footer__play__text}>Configuración</Text>
            </View>

        </View>

    )
}
export default Footer