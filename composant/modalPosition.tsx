import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useGetLocation } from './getlocation';

export default function ModalPosition({ visible, onClose }: { visible: boolean, onClose: () => void }) {
  const location = useGetLocation();
  
  const latitude = location?.coords?.latitude || 14.6937; // par défaut Dakar
  const longitude = location?.coords?.longitude || -17.4441;

  console.log("Position actuelle :", latitude, longitude); // ✅ Mettre ici, avant le return

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={false}
      onRequestClose={onClose}
    >
       <View style={{ flex: 1 }}>
         {/* <MapView
          style={{ flex: 1 }}
          region={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker coordinate={{ latitude, longitude }} title="Ma position actuelle" />
        </MapView>   */}

        <TouchableOpacity  onPress={onClose}>
          <Text >Fermer</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
