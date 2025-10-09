import { ScrollView, StyleSheet, Text, View } from "react-native";
import Profil from "./profil";
import Itemmenu from "./item_menu";
import { menuItems1, menuItems2, menuItems3, menuItems4, profil } from "../data";
import { Feather, FontAwesome6 } from "@expo/vector-icons";
import { styles } from "./style/styleMenu";

export default function Menu(){
    return(
       
            <ScrollView style={styles.containerItem}>
                <Profil prenom={profil.prenom} nom={profil.nom} numero={profil.numero}/>
                <View style={styles.view1}>
                    {/* afficher les éléments du menu ici */}
                    {menuItems1.map(item => (
                        <Itemmenu nav={item.nav} key={item.id} title={item.title} details={item.details} icon={item.icon} />
                    ))}
                </View>
                <View>
                    {/*affichons les element du menu item3 : on le parcourt */}
                    {menuItems3.map(item => (
                        <Itemmenu nav={item.nav} key={item.id} title={item.title} details={item.details} icon={item.icon} />
                    ))}
                </View>
                {/*ligne de séparation */}
                <View style={styles.separateur}>
                    <FontAwesome6 name="gift" size={24} color="yellow" />
                    <Text style={{color:"white",}}>Earn as a driver</Text>
                    <Feather name="chevron-right" size={30} color="red" />
                </View>
                <View>
                        {/*affichons les element du menu item4 : on le parcourt  */}
                    {menuItems4.map(item => (
                        <Itemmenu nav={item.nav} key={item.id} title={item.title} details={item.details} icon={item.icon} />
                    ))}
                </View>    
                <View>
                <View style={{borderBottomWidth:0, borderBottomColor:"#ccc", marginVertical:10}}></View>
                        {/*affichons les element du menu item4 : on le parcourt  */}
                    {menuItems2.map(item => (
                        <Itemmenu nav={item.nav} key={item.id} title={item.title} details={item.details} icon={item.icon} />
                    ))}
                </View> 
            </ScrollView>
    )
}
