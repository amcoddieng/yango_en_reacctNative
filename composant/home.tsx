import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ScrollView, Text,Image, View } from 'react-native';
import Plan1 from './plan1';
import Plan_service from './plan_service';
import Where from './where';
import Pub1 from './pub1';
import Pub2 from './pub2';
import { useGetLocation } from './getlocation';
import MapView, { Marker } from 'react-native-maps';

export default function Home() {
  return (
    // console.log(useGetLocation()),
    <View>
      <Plan1/>
      
      {/* <Menu/> */}
      <ScrollView>
        {/* afficher ce que returne getLocation
        <Getlocation/> */}
        <Plan_service/>
        <Where/>
        <Pub1/>
        <Pub1/>
        <Pub2/>
        {/* <MapView
          style={{ flex: 1 }}
          region={{
            latitude: 12,
            longitude: 12,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker coordinate={{ latitude:12, longitude:12 }} title="Ma position actuelle" />
        </MapView> */}
      </ScrollView>
    </View>
  );
}
