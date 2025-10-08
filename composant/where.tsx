
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { View,StyleSheet, Text,Image, TouchableOpacity } from "react-native";
import { Historique } from '../data';
import { styles } from './style/styleWhere';

export default function Where() {
    return (
        <View style={styles.containerWhere}>
            <View style={styles.containerto}>
                <TouchableOpacity style={styles.button}> 
                  <Image source={require('../assets/ride.webp')} style={styles.logo1} />
                  <Text style={styles.buttonText}>Where to ?</Text>
                  <FontAwesome5 name="chevron-circle-right" size={24} color="black" />
                </TouchableOpacity>
            </View>
            {/* afficher l'historique de data ici en parcourant le tableau des données */}
            {/* <View>  
              <Text style={styles.title}>Recent</Text> */}
              {/* ici on peut mapper à travers un tableau de données pour afficher les éléments récents (maximum 3)*/}
              {Historique.slice(0, 3).map((location, index) => (
                <View key={index} style={styles.containerLocation}>
                  <TouchableOpacity style={styles.location}>
                    <FontAwesome6 name="location-dot" size={24} color="black" />
                    <View>
                      <Text>{location.lieu}</Text>
                      <Text style={styles.textbas}>{location.rue}</Text>
                    </View>
                    <Text>{location.minute}</Text>
                  </TouchableOpacity>
                </View>
              ))}
            {/* </View> */}

            {/* <View style={styles.containerLocation}>
              <TouchableOpacity style={styles.location}>
                <FontAwesome6 name="location-dot" size={24} color="black" />
                <View>
                  <Text>Rue-YF-553, 13</Text>
                  <Text>Yoff, almadies, ...nt, DAKAR REGION</Text>
                </View>
                <Text>
                  27 min
                </Text>
              </TouchableOpacity>
            </View> */}
            {/* <View style={styles.containerLocation}>
              <TouchableOpacity style={styles.location}>
                <FontAwesome6 name="location-dot" size={24} color="black" />
                <View>
                  <Text>Rue-YF-553, 13</Text>
                  <Text>Yoff, almadies, ...nt, DAKAR REGION</Text>
                </View>
                <Text>
                  27 min
                </Text>
              </TouchableOpacity>
            </View> */}
             {/* <View style={styles.containerLocation}>
              <TouchableOpacity style={styles.location}>
                <FontAwesome6 name="location-dot" size={24} color="black" />
                <View>
                  <Text>Rue-YF-553, 13</Text>
                  <Text>Yoff, almadies, ...nt, DAKAR REGION</Text>
                </View>
                <Text>
                  27 min
                </Text>
              </TouchableOpacity>
            </View> */}
 
        </View>
    );
}

// const styles = StyleSheet.create({
//   location:{
//     display:"flex",
//     flexDirection:"row",
//     justifyContent:"space-between"
//   },
//   containerLocation:{
//     padding:10,
//     width:"85%",
//     borderBottomWidth: 1,        // largeur de la bordure
//     borderBottomColor: 'grey',  // couleur de la bordure
//     borderStyle: 'solid',        // style (optionnel, 'solid' par défaut)

//   },
// containerWhere: {
//     // padding: 16,
//     marginTop: 20,
//     // marginBottom: 20,
//     // borderWidth: 1,
//     alignItems: 'center',
//     // border: '1px solid #ccc',
//     // width:"70%"
//   },
//   containerto:{
//     backgroundColor: '#ebeaeaff',
//     width:"85%",
//     height: 50,
//     borderRadius: 14,
    
//   },
//   title: {
//     fontSize: 18,
//     marginBottom: 8,
//   },
//   button: {
//         paddingRight: 13,
//         display:"flex",
//         flexDirection:"row",
//         borderRadius: 8,
//         justifyContent:"space-between",
//         alignItems:"center"
//   },
//   buttonText: {
//     fontWeight: 'bold',
//     fontSize:20,
//     color: '#000',

//   },   
//   logo1:{
//     width: 50,
//     height: 40,
//     borderRadius: 6,
//   },
// }) ;