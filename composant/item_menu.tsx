import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./style/style_menuitem";
import { useNavigation } from "@react-navigation/native";

type ItemmenuProps = {
  title: string;
  details?: string;
  icon: string;
  nav: string; // le nom de l’écran où naviguer
};

export default function Itemmenu({ title, details, icon, nav }: ItemmenuProps) {
  const navigation = useNavigation(); // ✅ à mettre ici (dans le composant)

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate("Historique")} // ✅ on passe une chaîne, pas {nav}
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
