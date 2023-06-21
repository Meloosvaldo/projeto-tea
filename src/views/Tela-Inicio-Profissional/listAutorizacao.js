import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function ListAutorizacao({data}) {
  const navigation = useNavigation(); 
  
  return (
   <TouchableOpacity style={styles.container}>
   <View style={styles.content}>
   <FontAwesome5 style={styles.icon1} name="check-circle" size={20} color="black" />
   <Text style={styles.list1} 
   onPress={()=> navigation.navigate('TelaPerfilProfissional')}>{data.id}</Text>
  
   <Text 
   style={styles.list2}
   onPress={()=> navigation.navigate('TelaPerfilProfissional')}>{data.nome}</Text>

   <Text 
   style={styles.list3}
   onPress={()=> navigation.navigate('TelaPerfilProfissional')}>{data.clinica}</Text>
  
   </View>
   </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
    container: {
     flex: 1,
     marginBottom: 10,
     borderBottomWidth: 0.5,
     borderBottomColor: "DADADA",
     paddingEnd: 60,

    }, 
    content: {
     flexDirection: "row",
     justifyContent: "center",
     marginTop: 0,
     marginBottom: 15,
    },
    list1:{
      color: "black",
      fontWeight: "bold",
      fontSize: 14, 
      paddingLeft: 15,
      margin: 2,
      marginLeft: 10,
  },
    list2:{
        color: "#000000",
        fontWeight: "bold",
        fontSize: 14, 
        paddingLeft: 20,
        margin: 2,
        marginLeft: 10,
    },
    list3:{
      color: "#000000",
      fontWeight: "bold",
      fontSize: 14, 
      paddingLeft: 42,
      margin: 2,
      marginLeft: 2,
      marginRight: 30,
    },
    list4:{
      color: "#00CED1",
      fontWeight: "bold",
      fontSize: 14, 
      paddingLeft: 25,
      margin: 2,
      marginLeft: 2,
      marginRight: 10,
    },
    icon1: {
      paddingRight: 18,
  },

}
)