import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { styles } from './style/styleplan1';

export default function plan1() {
  const navigation = useNavigation(); // hook pour navigation

  return (
    <View>
      <View style={styles.plan1}>
        <View>
          <Image source={require('../assets/Yango1.png')} style={styles.logo1} />
          <View style={styles.viewplan}>
            <Text>Mermoz-Sacre Coeur</Text>
            <Feather name="chevron-right" size={20} color="black" />           
          </View> 

        </View>
        <TouchableOpacity style={styles.icone} onPress={() => navigation.navigate('Menu')}>
          <AntDesign name="menu" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   logo1: {
//     width: 122,
//     height: 40,
//     borderRadius: 6,
//   },
//   plan1: {
//     width: '100%',
//     borderRadius: 6,
//     padding: 16,
//     marginTop: 30,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   icone: {
//     padding: 8,
//   },
// });
