import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
formaContexto: {
    width: "100%",
    height: "100%",
    bottom: 1,
    alignItems: "baseline",
    marginTop: 1,
    backgroundColor: "#ffffff",
    },
buttonPerfil: {
    backgroundColor: "#00CED1",
    height: 70,
    width: 300,
    marginTop: 40,
    marginLeft: 50,
    marginBottom:1,
    alignItems:"center",
    justifyContent:"center",
    elevation: 4,
    borderRadius: 50,
    fontWeight: "bold",
},
textButtonPerfil:{
    fontSize: 20,
    color: "#ffffff",
}, 
img1: {
    flexDirection: "row",
    resizeMode: "cover",
    width: 40, 
    height: 40,
    marginBottom: 10,
    marginTop: 5,
    marginLeft: 40,
},
img2: {
    flexDirection: "row",
    borderRadius: 90,
    width: 88, 
    height: 88,
    marginTop: 16,
    marginLeft: 25,
}, 
textTitle:{
    height: 40,
    marginLeft: 65,
    color: "#00CED1",
    alignItems: "center",
    fontSize: 22,
    marginTop: 50,
}, 
buttonVersao: {
    backgroundColor: "#00CED1",
    height: 60,
    width: 150,
    marginTop: 100,
    marginLeft: 130,
    marginBottom:5,
    alignItems:"center",
    justifyContent:"center",
    elevation: 4,
    fontWeight: "bold",
},
textButtonVersao:{
    fontSize: 18,
    color: "#ffffff",
},
boxPerfil: {
    width: "100%",
    height: "100%",
    backgroundColor: (777,777,777),
    marginRight: 20,
    marginTop: 80,
   borderRadius: 10,
},
icon1: {
    position: 'absolute',
    left: 50,
    top: 20,
},
icon2: {
    position: 'absolute',
    left: 50,
    top: 20,
},
});
  
  export default styles;