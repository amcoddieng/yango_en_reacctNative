import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ScrollView, Text,Image, View } from 'react-native';
import Plan1 from './plan1';
import Plan_service from './plan_service';
import Where from './where';
import Pub1 from './pub1';
import Pub2 from './pub2';
import Menu from './menu';

export default function Home() {
  return (
    <View>
      <Plan1/>
      {/* <Menu/> */}
      <ScrollView>
        <Plan_service/>
        <Where/>
        <Pub1/>
        <Pub1/>
        <Pub2/>
      </ScrollView>
    </View>
  );
}
