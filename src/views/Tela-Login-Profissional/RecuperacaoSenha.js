import React, { useState } from 'react';
import { View, Text,  Keyboard, Pressable, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import {Feather} from 'react-native-vector-icons';
 

export default function RecuperacaoSenha({navigation}) {
  const [cpf, setCpf] = useState('');

  const passwordRecovery = async () => {

    try {

      const response = await fetch('https://api-benef-hml.unimednatal.com.br/{{url_benef_tasy}}/usuarios/recuperar-senha', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ cpf: cpf}), // body data type must match "Content-Type" header
      });

      const res = await response.json()
      console.log(res);
      console.log(res.Result);

      if (res.Result == 1) {
        navigation.navigate('TelaInicioProfissional')
      } else if (res.Result == 0) {
        setLoginSenhaErro("Login e/ou senha inválido(s)!")
      }
      

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false)
    }

  }

  return (
    
    <Pressable onPress={Keyboard.dismiss} style={styles.container}>
      
      <View style={styles.boxTitle}>
        <Text style={styles.textTitle} >Insira seu CPF para recuperação da senha</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={(value) => {setCpf(value)}}
      />
      <Feather style={styles.icon1} name="user" size={15} color="#677294"/>
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
        bottom: 0,
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
    
    textButtonPerfil:{
        fontSize: 20,
        color: "#ffffff",
    },
    icon1: {
        position: 'absolute',
        left: 30,
        top: 200,
      },
    icon2: {
        position: 'absolute',
        right: 55,
        top: 200,
      },
  });