import React, { useState } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Feather } from '@expo/vector-icons';
import { styles } from './style/styleplan1';
import ModalPosition from './modalPosition';
import { useNavigation } from '@react-navigation/native';

export default function Plan1() {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation(); 
  return (
    <View>
      <View style={styles.plan1}>
        <View>
          <Image source={require('../assets/Yango1.png')} style={styles.logo1} />

          <TouchableOpacity style={styles.viewplan} onPress={() => setVisible(true)}>
            {/* <AntDesign name="enviromento" size={20} color="black" /> */}
            <Text>Ma position</Text>
            <Feather name="chevron-right" size={20} color="black" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.icone}  onPress={() => navigation.navigate("Menu" as never)}>
          <AntDesign name="menu" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <ModalPosition visible={visible} onClose={() => setVisible(false)} />
    </View>
  );
}
