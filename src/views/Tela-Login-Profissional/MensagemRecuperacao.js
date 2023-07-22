import React, { useState } from 'react';
import { View, Text,  Keyboard, Pressable, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
 

export default function MensagemRecuperacao({navigation}) {
  
  return (
    
    <Pressable onPress={Keyboard.dismiss} style={styles.container}>
      
      <View style={styles.boxTitle}>
        <Text style={styles.msgRecuperacao}>Senha recuperada com sucesso! {'\n'} Verifique seu email para alterar sua senha.</Text>
      </View>

      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.buttonPerfil}
          onPress={()=> navigation.navigate('TelaLoginProfissional')}
        >
          <Text style={styles.textButtonPerfil} >Voltar</Text>    
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
      fontSize: 18,
      color: "green",
      fontWeight: "bold",
      textAlign: "center",
      marginTop: 140,
      
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