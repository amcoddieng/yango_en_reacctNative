import { ImageBackground, StyleSheet, View } from "react-native";

export default function Pub2() {
  return (
    <View style={styles.containerPub2}>
      <ImageBackground
        style={styles.pub3}
        source={require("../assets/Securite.webp")}
        resizeMode="cover"
      />

      <View style={styles.containerPub2_1}>
        <ImageBackground
          style={styles.pub2}
          source={require("../assets/Experimenter.webp")}
          resizeMode="cover"
        />
        <ImageBackground
          style={styles.pub2}
          source={require("../assets/Besoin.webp")}
          resizeMode="cover"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerPub2: {
    flexDirection: "row",
    padding: 10,
    gap: 10,
    marginBottom:150
  },
  containerPub2_1: {
    flex: 1, // ✅ prend tout l’espace restant
    justifyContent: "space-between",
  },
  pub2: {
    height: 195,
    borderRadius: 20,
    // width:1,
    overflow: "hidden",
  },
  pub3: {
    flex: 1, // ✅ prend la même hauteur que la colonne de droite
    borderRadius: 20,
    // overflow: "hidden",
  },
});
