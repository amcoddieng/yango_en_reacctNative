import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",  // aligne verticalement
    justifyContent: "space-between",
    backgroundColor: "#E0E0E0",
    padding: 10,
    // borderRadius: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    // marginBottom: 10, 
    // marginVertical: 5,
  },
  text: {
    // je veux que le text prenne toute la place possible entre l'icone et la fleche
    width: 250,
    fontWeight: "500",
    fontSize: 16,
    // marginLeft: 10,
  },
    item2: {
    flexDirection: "row",   
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,  
    borderBottomWidth: 1,}
});
