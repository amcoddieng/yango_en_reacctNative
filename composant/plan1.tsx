import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ScrollView, Text,Image, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function plan1() {
  return (
    <View>
      <View style={styles.plan1}>
        <View>
            <Image source={require('../assets/Yango1.png')} style={styles.logo1} />
            <Text >Mermoz-Sacre Coeur</Text>
        </View>
        <View style={styles.icone}>
        <AntDesign name="menu" size={24} color="black" />
      </View>
      </View>
<View>
        {/* <Text>Bonjour</Text> */}
</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo1:{
    width: 122,
    height: 40,
    borderRadius: 6,
  },
  plan1:{
    width: '100%',
    borderColor: 'red',
    // borderWidth: 1,
    borderRadius: 6,
    padding: 16,
    marginTop: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icone:{
    // width: 50,
    // height: 50,
    // borderRadius: 6,
    // marginTop: -50,
    // marginLeft: 320,
  }
});

