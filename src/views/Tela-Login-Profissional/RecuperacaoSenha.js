import React, { useState } from 'react';
import { View, Text,  Keyboard, Pressable, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import {Feather} from 'react-native-vector-icons';
 

export default function RecuperacaoSenha({navigation}) {
  const [cpf, setCpf] = useState('');
  const [recoveryMessage, setRecoveryMessage] = useState("");

  const passwordRecovery = async () => {

    try {
      const response = await fetch('[URLAPI]/usuarios/recuperar-senha', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ login: cpf}), // body data type must match "Content-Type" header
      });

      const res = await response.json()
      console.log(res);
      console.log(res.Result);


      if (res.Result == 1) {
        navigation.navigate('MensagemRecuperacao')
        //setRecoveryMessage(res.Message)        
      } else if (res.Result == 0) {
        setRecoveryMessage("Profissional não encontrado.")
      }

    } catch (error) {
      console.error(error);
    } finally {

    }

  }

  return (
    
    <Pressable onPress={Keyboard.dismiss} style={styles.container}>
      
      <View style={styles.boxTitle}>
        <Text style={styles.textTitle} >Insira seu CPF para recuperação da senha</Text>
        <Text style={styles.msgRecuperacao}>{recoveryMessage}</Text>
      </View>

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="CPF"
          value={cpf}
          onChangeText={(value) => {setCpf(value)}}
        />
        <Feather style={styles.icon1} name="user" size={15} color="#677294"/>
        <TouchableOpacity 
          style={styles.buttonPerfil}
          onPress={passwordRecovery}
        >
          <Text style={styles.textButtonPerfil}>Enviar</Text>    
        </TouchableOpacity>
      </View>      
      

    </Pressable>
  );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        bottom: 0,
        alignItems: "center",
        backgroundColor: "#ffffff"

    },
    textTitle:{
        height: 110,
        marginLeft: 10,
        color: "#9DA4AC",
        textAlign: "center",
        fontSize: 20,
        marginTop: 70,
        fontWeight: "bold",
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
    msgRecuperacao:{
      fontSize: 12,
      color: "red",
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: 10,
    },
    textButtonPerfil:{
        fontSize: 20,
        color: "#ffffff",
    },
    icon1: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        left: 30,
      },
    icon2: {
        position: 'absolute',
        right: 55,
        top: 200,
      },
  });