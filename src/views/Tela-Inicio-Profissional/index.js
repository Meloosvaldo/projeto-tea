import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import styles from './style';
import { FontAwesome5 } from '@expo/vector-icons';
import ListAutorizacao from './listAutorizacao';



const name = "Dr. Clara Guedes";

const list = [
  
  {
    id: 1,
    nome: "Osvaldo Melo Junior",
    clinica: "Med+"
  },
  {
    id: 2,
    nome: "Eulalia Ribeiro",
    clinica: "Lab+"
  },
  {
    id: 3,
    nome: "Hugo Cesar",
    clinica: "Unimed"
  },
  {
    id: 4,
    nome: "Raphael Reis",
    clinica: "Unimed"
  },
  {
  id: 5,
  nome: "Rafinha",
  clinica: "Unimed"
  },
  {
    id: 6,
    nome: "Fabio",
    clinica: "Unimed"
    },
];



export default function TelaInicioProfissional({navigation}) {
  return (
    <View style={styles.formaContexto}>
      <View>
        <Text style={styles.textClinica}>Clínica Med+</Text>
      </View>
      <Image
        source={require('./images/profissional.jpg')}
        style={styles.img2}
      />
      <View>
        <Text style={styles.textTitle2}>{name}</Text>
      </View>
      <View>
      <Text style={styles.textButton3}>Buscar Autorizações</Text>
      <FontAwesome5 style={styles.icon5} name="caret-square-down" size={26} color="#00CED1"/>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.list}
        data={list}      
        showsVerticalScroollIndicator={false}
        renderItem={({item}) => 
        <ListAutorizacao props={item}/>}

        
    
        />
      <View >
      <FontAwesome5 style={styles.icon2} name="plus" size={20} color="cyan" />
        <Text style={styles.textTitle4}>Nº TOTAL DE ATENDIMENTO(S)</Text>
    
      </View>
      <Image
        source={require('./images/grafico.jpeg')}
        style={styles.img}
      />
      <TouchableOpacity 
        onPress={()=> navigation.navigate('TelaPerfilProfissional')}>
           <FontAwesome5 style={styles.icon1} name="times-circle" size={22} color="gray" />
    </TouchableOpacity>
    </View> 
)};
