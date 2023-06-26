import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function ListAutorizacao({props}) {
  const navigation = useNavigation(); 
  
  return (
   <TouchableOpacity style={styles.container}>
   <View style={styles.content}>
   <FontAwesome5 style={styles.icon1} name="check-circle" size={20} color="gray" />
   <Text style={styles.list1} 
   onPress={()=> navigation.navigate('TelaPerfilProfissional')}>{props.id}</Text>
    
   <Text 
   style={styles.list2}
   onPress={()=> navigation.navigate('TelaPerfilProfissional')}>{props.nome}</Text>

   <Text 
   style={styles.list3}
   onPress={()=> navigation.navigate('TelaPerfilProfissional')}>{props.clinica}</Text>
  
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
      color: "gray",
      fontWeight: "bold",
      fontSize: 14, 
      paddingLeft: 15,
      margin: 2,
      marginLeft: 10,
      width: "10%",
  },
    list2:{
        color: "gray",
        fontWeight: "bold",
        fontSize: 14, 
        paddingLeft: 20,
        margin: 2,
        marginLeft: 10,
        width: "40%",
    },
    list3:{
      color: "red",
      fontWeight: "bold",
      fontSize: 14, 
      paddingLeft: 42,
      margin: 2,
      marginLeft: 2,
      marginRight: 30,
      width: "30%",
    },
    icon1: {
      marginLeft: 50,
      paddingTop: 5,
  },

}
)