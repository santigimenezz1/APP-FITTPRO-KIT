import { Image, View } from "react-native"
import styles from "./LoginUsuarios.js"
import BotonLoginUsuario from "../../components/BotonLoginUsuario/BotonLoginUsuario.jsx"


const LoginUsuarios = ( {navigation} ) => {
    return (
        <View style={styles.container__loginUsuarios}>
            <Image width={350} height={90} source={{uri:"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1747227997/futlab_8_kbt77p.png"}}></Image>
            <View>
                <BotonLoginUsuario navigation={navigation}  />
            </View>
        </View>
    )
}
export default LoginUsuarios