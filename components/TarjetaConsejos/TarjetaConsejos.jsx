import { Text, View } from "react-native"
import styles from "./TarjetaConsejos"
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";
import { useContext } from "react";
import { CartContext } from "../../Context/Context";




const TarjetaConsejos = () => {
            const {closed, setClosed, userRegistro, idiomaActual} = useContext(CartContext)
    
    return (
        <View style={styles.container__tarjetaConsejos}>
            <Text style={styles.tittle}>Consejos</Text>
            <View style={styles.container__consejos}>
            <FontAwesome name="calendar-check-o" size={24} color="hsl(199, 76%, 28%)" />  
                      <View style={{width:"80%"}}>
                      {idiomaActual === "espana" && <Text style={{color:"white", letterSpacing:1, fontSize:RFValue(13),fontFamily: 'NunitoSans_400Regular',}}>Entrena de 10-30 minutos por dia para obtener los mejores resultados. La constancia es fundamental</Text>}
                    {idiomaActual === "italia" && <Text style={{color:"white", letterSpacing:1, fontSize:RFValue(13),fontFamily: 'NunitoSans_400Regular',}}>Allénati per 10-30 minuti al giorno per ottenere i migliori risultati. La costanza è fondamentale</Text>}
                    {idiomaActual === "francia" && <Text style={{color:"white", letterSpacing:1, fontSize:RFValue(13),fontFamily: 'NunitoSans_400Regular',}}>Entraîne-toi de 10 à 30 minutes par jour pour obtenir les meilleurs résultats. La constance est essentielle</Text>}
                    {idiomaActual === "bandera" && <Text style={{color:"white", letterSpacing:1, fontSize:RFValue(13),fontFamily: 'NunitoSans_400Regular',}}>Trainiere 10–30 Minuten pro Tag, um die besten Ergebnisse zu erzielen. Beständigkeit ist entscheidend</Text>}
                    {idiomaActual === "paises bajos" && <Text style={{color:"white", letterSpacing:1, fontSize:RFValue(13),fontFamily: 'NunitoSans_400Regular',}}>Trainiere 10–30 Minuten pro Tag, um die besten Ergebnisse zu erzielen. Beständigkeit ist entscheidend</Text>}
                    {idiomaActual === "inglaterra" && <Text style={{color:"white", letterSpacing:1, fontSize:RFValue(13),fontFamily: 'NunitoSans_400Regular',}}>Train for 10–30 minutes per day to achieve the best results. Consistency is key</Text>}
            </View>
            </View>

            <View style={styles.container__consejos}>
            <AntDesign name="clockcircleo" size={24} color="hsl(199, 76%, 28%)" />           
             <View style={{width:"80%"}}>
                    {idiomaActual === "espana" && <Text style={{color:"white", letterSpacing:1, fontSize:RFValue(13),fontFamily: 'NunitoSans_400Regular',}}>Empieza despacio, dominalo y luego tu decides la velocidad</Text>}
                    {idiomaActual === "italia" && <Text style={{color:"white", letterSpacing:1, fontSize:RFValue(13),fontFamily: 'NunitoSans_400Regular',}}>Inizia lentamente, padroneggialo e poi decidi tu la velocità</Text>}
                    {idiomaActual === "francia" && <Text style={{color:"white", letterSpacing:1, fontSize:RFValue(13),fontFamily: 'NunitoSans_400Regular',}}>Commence lentement, maîtrise-le, puis décide de la vitesse</Text>}
                    {idiomaActual === "bandera" && <Text style={{color:"white", letterSpacing:1, fontSize:RFValue(13),fontFamily: 'NunitoSans_400Regular',}}>Beginne langsam, meistere es und entscheide dann über die Geschwindigkeit</Text>}
                    {idiomaActual === "paises bajos" && <Text style={{color:"white", letterSpacing:1, fontSize:RFValue(13),fontFamily: 'NunitoSans_400Regular',}}>Beginne langsam, meistere es und entscheide dann über die Geschwindigkeit</Text>}
                    {idiomaActual === "inglaterra" && <Text style={{color:"white", letterSpacing:1, fontSize:RFValue(13),fontFamily: 'NunitoSans_400Regular',}}>Start slow, master it, and then decide the speed</Text>}
            </View>
            </View>
            <View style={styles.container__consejos}>
            <FontAwesome6 name="person-running" size={24} color="hsl(199, 76%, 28%)" />   
                     <View style={{width:"80%"}}>
                     {idiomaActual === "espana" && <Text style={{color:"white", letterSpacing:1, fontSize:RFValue(13),fontFamily: 'NunitoSans_400Regular',}}>No te sales ejercicios para mejorar por igual diferentes habilidades</Text>}
                    {idiomaActual === "italia" && <Text style={{color:"white", letterSpacing:1, fontSize:RFValue(13),fontFamily: 'NunitoSans_400Regular',}}>Non saltare gli esercizi per migliorare equamente le diverse abilità</Text>}
                    {idiomaActual === "francia" && <Text style={{color:"white", letterSpacing:1, fontSize:RFValue(13),fontFamily: 'NunitoSans_400Regular',}}>Ne saute pas les exercices pour améliorer de manière équilibrée différentes compétences</Text>}
                    {idiomaActual === "bandera" && <Text style={{color:"white", letterSpacing:1, fontSize:RFValue(13),fontFamily: 'NunitoSans_400Regular',}}>Überspringe keine Übungen, um verschiedene Fähigkeiten gleichermaßen zu verbessern</Text>}
                    {idiomaActual === "paises bajos" && <Text style={{color:"white", letterSpacing:1, fontSize:RFValue(13),fontFamily: 'NunitoSans_400Regular',}}>Überspringe keine Übungen, um verschiedene Fähigkeiten gleichermaßen zu verbessern</Text>}
                    {idiomaActual === "inglaterra" && <Text style={{color:"white", letterSpacing:1, fontSize:RFValue(13),fontFamily: 'NunitoSans_400Regular',}}>Don't skip exercises to improve different skills equally</Text>}
            </View>
            </View>

            

        </View>
    )
}
export default TarjetaConsejos