import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./style/style_menuitem";
import { useNavigation } from "@react-navigation/native";

type ItemmenuProps = {
  title: string;
  details?: string;
  icon: string;
  nav: string;
};

export default function Itemmenu({ title, details, icon, nav }: ItemmenuProps) {
  const navigation = useNavigation(); 

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate("Historique")} 
    >
      <Feather name={icon} size={30} color="black" />
      <View>
        <Text style={styles.text}>{title}</Text>
        {details && <Text>{details}</Text>}
      </View>
      <Feather name="chevron-right" size={30} color="black" />
    </TouchableOpacity>
  );
}
