import { ImageBackground, Text, StyleSheet, View } from "react-native";
import { styles } from "./style/stylepub1";

export default function Pub1(){
    return(
        <View style={styles.containerPub1}>
            <ImageBackground style={styles.pub1} source={require('../assets/Decouverte.webp')}
            >
                <Text style={styles.text}>Decouvrer les super fonctionnaltes de yango</Text>
            </ImageBackground>
        </View>
    )
}

