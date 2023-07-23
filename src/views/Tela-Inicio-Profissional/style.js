import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    
    container:{
        flex: 1,
        flexDirection:'column',
        alignItems: "center",
        backgroundColor: "#FFFFFF", 
       },
       escolhaImg: { 
        flexDirection: "column",
        width: 70,
        height: 70,
        borderRadius: 50, 
        resizeMode: "contain",
        right: 100,
        bottom: 15,
       },
       linha: {
        bottom: 80,
        color: "gray",
        fontWeight: "bold"
       },
       icon1: {
        flexDirection: "row",
        bottom: 100,
        left: 140,
      },
      icon2: {
        flexDirection: "row",
        bottom: 125,
        left: 180,
      },
      icon3: {
        flexDirection: "row",
        bottom: 100,
        left: 105,
      },
      icon4: {
        flexDirection: "row",
        bottom: 95,
        left: 150,
      },
      list: {
        flexDirection: "column",
        marginStart: 14,
        marginEnd: 14,
        bottom: 70,
      },
      textTitle1: {
        color: "black",
        fontSize: 16,
        right: 112,
        bottom: 12,
      },
      textTitle2: {
        color: "black",
        fontSize: 16,
        right: 110,
        bottom: 15,
      },
      textTitle3: {
        color: "black",
        fontSize: 16,
        left: 130,
        bottom: 115,
      },
      textTitle4: {
        color: "#00CED1",
        right: 50,
        bottom: 60,
        fontSize: 20,
      },
      textTitle5: {
        color: "#00CED1",
        left: 50,
        bottom: 40,
        fontSize: 20,
      },
      imgGrafico: {
        resizeMode: "stretch",
        width: 400, 
        height: 130,
      },

})

export default styles;