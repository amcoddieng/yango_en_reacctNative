import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    containerService: {
        padding: 1,
        // borderWidth: 1,
        margin: 10,
        marginTop:30,
        display:"flex",
        flexDirection: 'row',
    },
    container1: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        // borderWidth: 1
    },
    container2: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        borderColor: 'red', 
        // borderWidth: 1,
        justifyContent:"space-between",
        // marginTop:0
    }, 
    serviceContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 25,
        justifyContent: 'center',
        // borderWidth: 1,
    },
    serviceImage: {
        width: 160,
        height: 70,
        borderRadius: 6,
        marginRight: 10,
    },
    serviceText: {
        fontSize: 16,
        fontWeight: 'bold',
    },    
    serviceContainer1: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // height: "53%",
        // borderWidth: 3,
    },    
    serviceImage1: {
        width: 160,
        height: 170,
        borderRadius: 6,
        marginRight: 12,
    },
});