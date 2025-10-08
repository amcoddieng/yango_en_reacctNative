import { View, Text, TouchableOpacity, ScrollView} from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { styles } from "./style/styleWhere";
import { Historique } from "../data";
export default function Historiques() {
  return (
    <ScrollView style={styles.containerHistorique}>
                {Historique.map((location, index) => (
                <View key={index} style={styles.containerLocation}>
                  <TouchableOpacity style={styles.location}>
                    <FontAwesome6 name="location-dot" size={24} color="black" />
                    <View>
                      <Text>{location.lieu}</Text>
                      <Text>{location.rue}</Text>
                    </View>
                    <Text>{location.minute}</Text>
                  </TouchableOpacity>
                </View>
              ))}
    </ScrollView>
  );
}

