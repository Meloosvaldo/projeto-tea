import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    formaContexto: {
      width: "100%",
      height: "100%",
      bottom: 1,
      alignItems: "center",
      marginTop: 0,
      backgroundColor: "#ffffff"

    },
    input: {
      width: "90%",
      height: 60,
      alignItems: "center",
      backgroundColor:"#f5f5f5",
      marginBottom: 5,
      paddingLeft: 35,
      borderRadius: 10,
     
    },
    buttonAcessar: {
    backgroundColor: "#00CED1",
    height: 70,
    margin: 1,
    marginTop: 2,
    paddingHorizontal: 120,
    alignItems:"center",
    justifyContent:"center",
    elevation: 2,
    borderRadius: 50,
    fontWeight: "bold",
   },
    textButtonAcessar:{
      fontSize: 26,
      color: "#ffffff",
     },   
    icon1: {
      position: 'absolute',
      left: 30,
      top: 235,
    },
    icon2: {
      position: 'absolute',
      left: 30,
      top: 320,
    },
    icon3: {
      position: 'absolute',
      right: 40,
      top: 325,
    },
    icon4: {
      position: 'absolute',
      alignItems: "center",
      top: 540,
    },
    msgCS1: {
      fontSize: 18,
      color: "#00CED1",
      justifyContent: "center",
      paddingTop: 10,
      paddingLeft: 10,
    },
    msgCS2: {
      fontSize: 18,
      color: "#00CED1",
      justifyContent: "center",
      paddingTop: 8,
      paddingLeft: 30,
    },
    msgCS3: {
      fontSize: 12,
      color: "#00CED1",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 95,
    },
    msgErro:{
      fontSize: 10,
      color: "red",
      fontWeight: "bold",
      paddingRight: 250,
      paddingBottom: 5,
      paddingTop: 1,
    },
    msgErroLoginSenha:{
      fontSize: 10,
      color: "red",
      fontWeight: "bold",
      textAlign: "center",
      paddingBottom: 2,
    },
    boxTitle: {
      paddingTop: 70,
  },
  textTitle1:{
      flexDirection: "row",
      height: 40,
      marginLeft: 30,
      color: "#9DA4AC",
      alignItems: "center",
      fontSize: 30,
      marginBottom: 2,
  },
  textTitle2:{
      color: "#8C8C8C",
      fontSize: 20,
      marginBottom: 10,
  },
  img1: {
      flexDirection: "row",
      resizeMode: "cover",
      width: 40, 
      height: 40,
      marginBottom: 10,
      marginTop: 5,
      marginLeft: 10,
  },
  img2: {
      flexDirection: "row",
      borderRadius: 90,
      width: 88, 
      height: 88,
      marginTop: 16,
      marginLeft: 25,
  },

  
  });
  
  export default styles;