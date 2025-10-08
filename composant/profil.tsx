import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { styles } from "./style/styleprofil";
type profilProps = {
    prenom: string;
    nom: string;
    numero: string;
};

export default function Profil({ prenom, nom, numero }: profilProps) {
    const navigation = useNavigation();
  return (
    <View style={styles.containerprofil}>
      {/* Header avec flèche */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={30} color="black" />
        </TouchableOpacity>
      </View>

      {/* Image de profil */}
      <Image style={styles.imgpro} source={require('../assets/profil.png')} />

      {/* Nom avec icône */}
      <View style={styles.edit}>
        <Text style={styles.editText}>{prenom} {nom}</Text>
        <FontAwesome5 name="chevron-circle-right" size={24} color="black" />
      </View>

      {/* Numéro de téléphone */}
      <Text>{numero}</Text>
    </View>
  );
}

