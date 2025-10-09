import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  location:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between"
  },
  containerHistorique:{
    flex:1,
    // alignItems:"center",
    marginTop:60,
  },
  containerLocation:{
    padding:10,
    paddingTop:30,
    width:"85%",
    borderBottomWidth: 1,        // largeur de la bordure
    borderBottomColor: 'grey',  // couleur de la bordure
    borderStyle: 'solid',        // style (optionnel, 'solid' par défaut)

  },
containerWhere: {
    // padding: 16,
    marginTop: 20,
    // marginBottom: 20,
    // borderWidth: 1,
    alignItems: 'center',
    // border: '1px solid #ccc',
    // width:"70%"
  },
  containerto:{
    backgroundColor: '#ebeaeaff',
    width:"85%",
    height: 50,
    borderRadius: 14,
    
  },
  title: {
    fontSize: 18,
    marginBottom: 8,
  },
  textbas:{
    opacity:0.6,
    color:"gray",
    // fontWeight:"bold"
  },
  button: {
        paddingRight: 13,
        display:"flex",
        flexDirection:"row",
        borderRadius: 8,
        justifyContent:"space-between",
        alignItems:"center"
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize:20,
    color: '#000',

  },   
  logo1:{
    width: 50,
    height: 40,
    borderRadius: 6,
  },
}) ;