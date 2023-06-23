import React, { useState } from 'react';
import { View, Text,  Keyboard, Pressable, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import {Feather} from 'react-native-vector-icons';
 



export default function RecuperacaoSenha({navigation}) {
  const [email, setEmail] = useState('');
  const [mostrarEmail, setMostrarEmail] = useState(false);




  return (
    
    <Pressable onPress={Keyboard.dismiss} style={styles.container}>
      
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle} >Email para recuperação da senha</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
          secureTextEntry={!mostrarEmail}
      />
      <Feather style={styles.icon1} name="mail" size={15} color="#677294"/>
        <Feather style={styles.icon2} name="eye" size={20}color="#677294"/>
        <TouchableOpacity 
        style={styles.buttonPerfil}
        onPress={()=> navigation.navigate('TelaLoginProfissional')}
        >
        <Text style={styles.textButtonPerfil}>Enviar</Text>    
    </TouchableOpacity>

    </Pressable>
  );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        bottom: 10,
        alignItems: "center",
        backgroundColor: "#ffffff"

    },
    textTitle:{
        height: 110,
        marginLeft: 10,
        color: "#9DA4AC",
        alignItems: "center",
        fontSize: 20,
        marginTop: 70,
        fontWeight: "bold",
    }, 
    input: {
        width: "90%",
        height: 60,
        alignItems: "center",
        backgroundColor:"#f5f5f5",
        paddingLeft: 25,
        borderRadius: 10,
       
      },

    buttonPerfil: {
        backgroundColor: "#00CED1",
        height: 70,
        width: 350,
        marginTop: 70,
        marginLeft: 10,
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
    icon1: {
        position: 'absolute',
        left: 25,
        top: 190,
      },
    icon2: {
        position: 'absolute',
        right: 55,
        top: 200,
      },
  });