import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import { FontAwesome5, Fontisto, } from '@expo/vector-icons'; 




export default function TelaPerfilProfissional({navigation}) {
  return (
    
    <View style={styles.formaContexto}>
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
        <View style={styles.boxPerfil}>
        <Text style={styles.textTitle}>Selecione o tipo de usuário</Text>
    
    <TouchableOpacity 
        style={styles.buttonPerfil}
        //onPress={()=> navigation.navigate('RecuperacaoSenha')}
        >
         <FontAwesome5 style={styles.icon2} name="user-tie" size={30} color="white" />
        <Text style={styles.textButtonPerfil}>Beneficiário</Text> 
         
    </TouchableOpacity>
    <TouchableOpacity 
        style={styles.buttonPerfil}
        onPress={()=> navigation.navigate('TelaLoginProfissional')}
        >
        <Fontisto style={styles.icon1} name="doctor" size={30} color="white" />
        <Text style={styles.textButtonPerfil}>Profissional</Text>    
    </TouchableOpacity>
    <TouchableOpacity 
        style={styles.buttonVersao}
        >
        <Text style={styles.textButtonVersao}>Versão 1.0</Text>    
    </TouchableOpacity>
    </View>
    </View>
  );
}