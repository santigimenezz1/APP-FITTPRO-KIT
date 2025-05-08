import { Image, View } from "react-native"
import styles from "./LoginUsuarios.js"
import BotonLoginUsuario from "../../components/BotonLoginUsuario/BotonLoginUsuario.jsx"


const LoginUsuarios = ( {navigation} ) => {
    return (
        <View style={styles.container__loginUsuarios}>
            <Image width={250} height={70} source={{uri:"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1724232180/APP%20ALFOMBRA%20DE%20FUTBOL%20AMAZON/LOGO/Imagen_10-8-24_a_las_19.15_bkb9x9.png"}}></Image>
            <View>
                <BotonLoginUsuario navigation={navigation}  />
            </View>
        </View>
    )
}
export default LoginUsuarios