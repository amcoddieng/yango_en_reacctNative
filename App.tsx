import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ScrollView, Text,Image, View } from 'react-native';
import Plan1 from './composant/plan1';
import Plan_service from './composant/plan_service';
import Where from './composant/where';
import Pub1 from './composant/pub1';
import Pub2 from './composant/pub2';

export default function App() {
  return (
    <View>
      <Plan1/>
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


