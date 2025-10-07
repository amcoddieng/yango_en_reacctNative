import { ImageBackground, StyleSheet, View } from "react-native";


export default function Pub1(){
    return(
        <View style={styles.containerPub1}>
            <ImageBackground style={styles.pub1} source={require('../assets/Decouverte.webp')}
            >

            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    containerPub1:{
        // borderWidth:1,
        width:"100%",
        paddingLeft:10,
        paddingRight:10,
        paddingTop:10,
    },
    pub1:{
        
        height:200,
        borderRadius:30,
        // borderWidth:1,
        
    }
})