import React, { useState, useRef, useEffect, useContext } from "react";
import { View, Image, TouchableOpacity, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./DetalleNivelVideo"; 
import { RFValue } from "react-native-responsive-fontsize";
import WebView from "react-native-webview";
import { CartContext } from "../../../../Context/Context";


const DetalleNivelVideo = () => {
    const route = useRoute();
    const { ejercicio } = route.params; 
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(true);
    const [videoDuration, setVideoDuration] = useState(0);
    const [botonActive, setBotonActive] = useState("Tutorial");
        const {closed, setClosed, userRegistro, idiomaActual} = useContext(CartContext)
    

    useEffect(() => {
        navigation.setOptions({ title: ejercicio.nombre });
    }, [navigation, ejercicio.nombre]);

    const formatDuration = (millis) => {
        const minutes = Math.floor(millis / 60000);
        const seconds = Math.floor((millis % 60000) / 1000);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds} min`;
    };

    useEffect(()=>{
        setVideoDuration(ejercicio.duracion)
    },[])



    return (
        <ScrollView>
            <View style={{ backgroundColor: "black", paddingBottom: RFValue(50), height: "auto" }}>
                <View style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 30 }}>
                    <View style={{ display: "flex", width: "80%", marginBottom: 10, flexDirection: "row-reverse", justifyContent: "space-between" }}>
                        <View>
                            <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
                                {ejercicio.estrellas.completas.map((_, index) => (
                                    <FontAwesome key={index} name="star" size={24} color="hsl(199, 76%, 28%)" />
                                ))}
                                {ejercicio.estrellas.vacias.map((_, index) => (
                                    <FontAwesome key={index} name="star-o" size={24} color="hsl(199, 76%, 28%)" />
                                ))}
                            </View>
                        </View>
                       
                    </View>
                    <Text style={{color:"white", letterSpacing:2, fontSize:25, marginBottom:10}}>{botonActive}</Text>
                    
                    {/* Video Container */}
                    <View style={{ width: "90%", height: 200 }}>
                        {
                            botonActive !== "Tutorial" ?
                            <WebView
                            source={{ uri: `https://player.vimeo.com/video/${ejercicio.videoURL}?controls=1&autoplay=1`}}
                                style={{ width: "100%", height: "100%" }}
                                allowsFullscreenVideo={true}
                                javaScriptEnabled={true}
                                mediaPlaybackRequiresUserAction={false}
                            />
                            :
                            <WebView
                            source={{ uri: `https://player.vimeo.com/video/${ejercicio.videoTrailerURL}?controls=1&autoplay=1`}}
                            style={{ width: "100%", height: "100%" }}
                            allowsFullscreenVideo={true}
                            javaScriptEnabled={true}
                            mediaPlaybackRequiresUserAction={false}
                        />
                        }
                    </View>

                    
                    <View style={{ width: RFValue(300), borderWidth: 3, borderColor: "hsl(199, 76%, 28%)", marginTop: 20 }}>
                        <Image source={{ uri: ejercicio.imagenVideo }} style={{ width: "100%", height: RFValue(120) }} />
                    </View>
                    
                    <View style={{ marginTop: 40, display: "flex", flexDirection: "row", alignItems: "center", gap: 12 }}>
                        <View style={{ display: "flex", gap: 12, width: "90%", marginBottom: 30, justifyContent: "center", flexDirection: "row" }}>
                            <TouchableOpacity 
                                style={ botonActive === "Tutorial" ?styles.botonOn : styles.botonDesactivado}
                                onPress={() => setBotonActive("Tutorial")}
                            >
                                
                                {idiomaActual === "espana" && <Text style={{ color: "white", textAlign: "center", letterSpacing: 1, fontFamily: 'NunitoSans_400Regular' }}>Tutorial</Text>}
                                {idiomaActual === "italia" && <Text style={{ color: "white", textAlign: "center", letterSpacing: 1, fontFamily: 'NunitoSans_400Regular' }}>Tutorial</Text>}
                                {idiomaActual === "francia" && <Text style={{ color: "white", textAlign: "center", letterSpacing: 1, fontFamily: 'NunitoSans_400Regular' }}>Tutoriel</Text>}
                                {idiomaActual === "bandera" && <Text style={{ color: "white", textAlign: "center", letterSpacing: 1, fontFamily: 'NunitoSans_400Regular' }}>Tutorial</Text>}
                                {idiomaActual === "paises bajos" && <Text style={{ color: "white", textAlign: "center", letterSpacing: 1, fontFamily: 'NunitoSans_400Regular' }}>Tutorial</Text>}
                                {idiomaActual === "inglaterra" && <Text style={{ color: "white", textAlign: "center", letterSpacing: 1, fontFamily: 'NunitoSans_400Regular' }}>Tutorial</Text>}
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={ botonActive === "Training" ? styles.botonOn : styles.botonDesactivado }
                                onPress={() => setBotonActive("Training")}>
                               {idiomaActual === "espana" && <Text style={{ color: "white", textAlign: "center", letterSpacing: 1, fontFamily: 'NunitoSans_400Regular' }}>Entrenamiento</Text>}
                               {idiomaActual === "italia" && <Text style={{ color: "white", textAlign: "center", letterSpacing: 1, fontFamily: 'NunitoSans_400Regular' }}>Allenamento</Text>}
                               {idiomaActual === "francia" && <Text style={{ color: "white", textAlign: "center", letterSpacing: 1, fontFamily: 'NunitoSans_400Regular' }}>Entraînement</Text>}
                               {idiomaActual === "bandera" && <Text style={{ color: "white", textAlign: "center", letterSpacing: 1, fontFamily: 'NunitoSans_400Regular' }}>Training</Text>}
                               {idiomaActual === "paises bajos" && <Text style={{ color: "white", textAlign: "center", letterSpacing: 1, fontFamily: 'NunitoSans_400Regular' }}>Training</Text>}
                               {idiomaActual === "inglaterra" && <Text style={{ color: "white", textAlign: "center", letterSpacing: 1, fontFamily: 'NunitoSans_400Regular' }}>Training</Text>}


                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default DetalleNivelVideo;
