import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Vibration, Image, Keyboard, Pressable } from 'react-native';
import styles from './style';
import {Feather} from 'react-native-vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 

import { SafeAreaView } from 'react-native-safe-area-context';
import { ActivityIndicator } from 'react-native';

export default function TelaLoginProfissional({navigation}) {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [textButton] = useState('Acessar');
  const [mensagemErro, setMensagemErro] = useState("");
  const [loginSenhaErro, setLoginSenhaErro] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const authUser = async () => {

    verificarLogin()

    try {

      const response = await fetch('https://api-benef-hml.unimednatal.com.br/usuarios/logar', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ login: login, senha: senha }), // body data type must match "Content-Type" header
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

  function verificarLogin() {
    if(login == null || senha == null){
      Vibration.vibrate();
        setMensagemErro("Campo obrigatório*")
        setLoginSenhaErro(null)
    }
  };

  return (


    <SafeAreaView>
      {isLoading
      ?<ActivityIndicator/>
      :<View onPress={Keyboard.dismiss} style={styles.formaContexto}>
        <View>
          <View style={styles.img1}>
          <Image
          source={require('./imagens/unimed.jpg')}
          style={{ width: 180, height: 120, resizeMode: "contain" }}
        />
        <Image
          source={require('./imagens/menino.jpg')}
          style={styles.img2}
        />
          </View>
          <View style={styles.boxTitle}>
              <Text style={styles.textTitle1} >Área do Profissional</Text>
              <Text  style={styles.textTitle2}>Informe os seus dados para o acesso</Text>
          </View>
          <Text style={styles.msgErroLoginSenha}>{loginSenhaErro}</Text>
          </View>
        <View></View>
        <TextInput
          style={styles.input}
          placeholder="CPF"
          value={login}
          onChangeText={(value) => {setLogin(value)}}
          maxLength={20}
          
        />
        <Text style={styles.msgErro}>{mensagemErro}</Text>
        <Feather style={styles.icon1} name="user" size={15} color="#677294"/>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={senha}
          onChangeText={(value) => {setSenha(value)}}
          maxLength={20}
          secureTextEntry={!mostrarSenha}
        />
        <Text style={styles.msgErro}>{mensagemErro}</Text>
        
        <Feather style={styles.icon2} name="lock" size={15} color="#677294"/>
        <Feather style={styles.icon3} name={mostrarSenha ? "eye" : "eye-off"} size={20}color="#677294" 
            onPress={() => setMostrarSenha(!mostrarSenha)}/>
      
      <View>
        <TouchableOpacity 
              style={styles.buttonAcessar}
              onPress={authUser}
              >
              <Text style={styles.textButtonAcessar}>{textButton}</Text>
              
              </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.msgCS1}>Não possui cadastro? Cadastre-se aqui</Text>
          
          <TouchableOpacity 
          onPress={()=> navigation.navigate('RecuperacaoSenha')}>
          <Text style={styles.msgCS2}>Esqueceu a senha? Recupere aqui</Text>  
          </TouchableOpacity>
        </View>
        
        
        <Text style={styles.msgCS3}>Entre utilizando reconhecimento facial</Text>
        <FontAwesome style={styles.icon4} name="id-badge" size={55} color="gray"
        onPress={()=> navigation.navigate('CameraProfissional')}/> 
        
      </View>
      }
    </SafeAreaView>
    
  );
};
   
