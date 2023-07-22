import { useState } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './style';
import ListAutorizacao from './listAutorizacao';

export default function Images() {
  
  const nome = "Dr. Clara Guedes"
  const clinica= "Clínica X"
  const list = [
  
    {
      id: 1,
      nome: "Osvaldo Melo Junior",
      clinica: "Clínica X"
    },
    {
      id: 2,
      nome: "Eulalia Ribeiro",
      clinica: "Clínica X"
    },
    {
      id: 3,
      nome: "Hugo Cesar",
      clinica: "Clínica X"
    },
    {
      id: 4,
      nome: "Raphael Reis",
      clinica: "Clínica X"
    },
    {
    id: 5,
    nome: "Rafinha",
    clinica: "Clínica X"
    },
    {
      id: 6,
      nome: "Fabio",
      clinica: "Clínica X"
      },
      
  ];
  

  const [image, setImage] = useState('https://www.citypng.com/public/uploads/preview/hd-profile-user-round-blue-icon-symbol-transparent-png-11639594354dzabzsbpuv.png?v=2023071604');

  const handleImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({ //pode-se acesar também a câmera através do launchCameraAsync
      aspect: [4, 4],
      allowsEditing: true,
      base64: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
    <View>
    <TouchableOpacity onPress={handleImagePicker} style={{ marginTop: 10 }}>
        <Text style={styles.textTitle1}> Trocar Foto </Text>
        <Image
        source={{ uri: image }}
        style={styles.escolhaImg}
        onPress={handleImagePicker}
      />
      </TouchableOpacity>
      </View>
      <Text style={styles.textTitle2}> {nome} </Text>
      <View>
      <FontAwesome5 style={styles.icon1} name="times-circle" size={26} color="red" />
      <FontAwesome5 style={styles.icon2} name="clinic-medical" size={26} color="cyan" />
      <Text style={styles.textTitle3}> {clinica} </Text>
      </View>
      <Text style={styles.linha}>___________________________________________________________</Text>
     <View>
     <Text style={styles.textTitle4}>Buscar Autorizações</Text>
     <FontAwesome5 style={styles.icon3} name="caret-square-down" size={30} color="#00CED1"/>
     </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.list}
        data={list} 
        showsVerticalScroollIndicator={false}     
        renderItem={({item}) => 
        <ListAutorizacao props={item}/>} 
        />
       <View>
        <Text style={styles.textTitle5}>Nº TOTAL DE ATENDIMENTO(S)</Text>
        <Image
        source={require('./images/grafico.jpeg')}
        style={styles.imgGrafico}/>
        </View>
    </View>
  );
}
