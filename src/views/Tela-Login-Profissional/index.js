import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Vibration, Image, Keyboard, Pressable } from 'react-native';
import styles from './style';
import {Feather} from 'react-native-vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 

import UsuarioController from '../../api/user_request';

export default function TelaLoginProfissional({navigation}) {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  //const [isLoading, setLoading] = useState(false);
  const [textButton] = useState('Acessar');
  const [mensagemErro, setMensagemErro] = useState("");
  const [loginSenhaErro, setLoginSenhaErro] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  var controller = new UsuarioController();

  const authUserMod = async () => {
    try {
      // setLoading(true)
      credentials = controller.authUser(login,senha);
      console.log(credentials)
      if(credentials != null){
        navigation.navigate('TelaInicioProfissional', { credentials: credentials}) ;
      }
    } catch (error) {
      console.error(error);
    } finally {

    }
  }

  function verificarLogin() {
    if(login == null && senha == null){
      Vibration.vibrate();
        setMensagemErro("campo obrigatório*")
        setLoginSenhaErro(null)

    }
   };
   
   function fazerLogin(){
    if (login == "a" && senha == 1) {
        console.log("Login com sucesso!")
        navigation.navigate('TelaInicioProfissional')
        setMensagemErro(null)
        setLoginSenhaErro(null)
    } else {
      setLoginSenhaErro("Erro login ou Senha!")
    }
  };

   function validarLogin(){
    if (login != null && senha != null) {
      fazerLogin()
      setLogin()
      setSenha()
  
    } else {
      verificarLogin() 
      setLoginSenhaErro("")
      
    }
  };

  return (
    
    <Pressable onPress={Keyboard.dismiss} style={styles.formaContexto}>
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
        placeholder="Login"
        onChangeText={setLogin}
        value={login}
        maxLength={20}
        
      />
       <Text style={styles.msgErro}>{mensagemErro}</Text>
       <Feather style={styles.icon1} name="user" size={15} color="#677294"/>
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={setSenha}
        value={senha}
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
            onPress={authUserMod}
            >
            <Text style={styles.textButtonAcessar}>{textButton}</Text>
            
            </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.msgCS1}>Não possui cadastro? Cadastre-se aqui</Text>
        <Text style={styles.msgCS2}>Esqueceu a senha? Recupere aqui</Text>
        <Text style={styles.msgCS3}>Entre utilizando sua impressão digital</Text>
      </View>
      
      <FontAwesome5 style={styles.icon4} name="fingerprint" size={60} color="black"
       onPress={()=> navigation.navigate('CameraProfissional')} /> 

       
    </Pressable>
  );
};
   
