import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ScrollView, Text,Image, View } from 'react-native';
import { styles } from './style/styleservice';
export default function plan_service() {
  return (
    <View style={styles.containerService}>
        
            <View style={styles.container1}>
                <View style={styles.serviceContainer}>
                    <Image source={require('../assets/Delivery.webp')} style={styles.serviceImage} />
                    <Text style={styles.serviceText}>Delivery</Text>
                </View>
                <View style={styles.serviceContainer}>
                    <Image source={require('../assets/Navigation.webp')} style={styles.serviceImage} />
                    <Text style={styles.serviceText}>Navigation</Text>
                </View>
                <View style={styles.serviceContainer}>
                    <Image source={require('../assets/Cargo.webp')} style={styles.serviceImage} />
                    <Text style={styles.serviceText}>Cargo</Text>
                </View>
            </View>
            <View style={styles.container2}>
                <View style={styles.serviceContainer}>
                    <Image source={require('../assets/Food.webp')} style={styles.serviceImage} />
                    <Text style={styles.serviceText}>Food</Text>
                </View>
                <View style={styles.serviceContainer1}>
                    <Image source={require('../assets/ride.webp')} style={styles.serviceImage1} />
                    <Text style={styles.serviceText}>Rides</Text>
                </View>
            </View>
    </View> 
  );
}
// const styles = StyleSheet.create({
//     containerService: {
//         padding: 1,
//         // borderWidth: 1,
//         margin: 10,
//         marginTop:30,
//         display:"flex",
//         flexDirection: 'row',
//     },
//     container1: {
//         width: '50%',
//         display: 'flex',
//         flexDirection: 'column',
//         // borderWidth: 1
//     },
//     container2: {
//         width: '50%',
//         display: 'flex',
//         flexDirection: 'column',
//         borderColor: 'red', 
//         // borderWidth: 1,
//         justifyContent:"space-between",
//         // marginTop:0
//     }, 
//     serviceContainer: {
//         flexDirection: 'column',
//         alignItems: 'center',
//         marginTop: 25,
//         justifyContent: 'center',
//         // borderWidth: 1,
//     },
//     serviceImage: {
//         width: 160,
//         height: 70,
//         borderRadius: 6,
//         marginRight: 10,
//     },
//     serviceText: {
//         fontSize: 16,
//         fontWeight: 'bold',
//     },    
//     serviceContainer1: {
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         // height: "53%",
//         // borderWidth: 3,
//     },    
//     serviceImage1: {
//         width: 160,
//         height: 170,
//         borderRadius: 6,
//         marginRight: 12,
//     },
// });