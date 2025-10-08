import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
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
