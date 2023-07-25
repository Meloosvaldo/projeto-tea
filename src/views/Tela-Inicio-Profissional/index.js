import { useState } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './style';
import ListAutorizacao from './listAutorizacao';

export default function TelaInicioProfissional({navigation}) {
  
  const nome = "Dr. Clara Guedes"
  const clinica= "Clínica X"
  const [listVisivel, setListVisivel] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
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

  const itemSelection = (id) => {
    
    const isItemSelected = selectedItems.includes(id);

    if (isItemSelected) {
      setSelectedItems((prevSelected) => prevSelected.filter((item) => item !== id));
    } else {
      setSelectedItems((prevSelected) => [...prevSelected, id]);
    }
  };

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
      <FontAwesome5 onPress={()=> navigation.navigate('TelaPerfilProfissional')} style={styles.icon4} name="times-circle" size={22} color="red" />
      <FontAwesome5 style={styles.icon1} name="bell" size={26} color="gray" />
      <FontAwesome5 style={styles.icon2} name="bars" size={24} color="cyan" />
      <FontAwesome5 style={styles.icon3} name="clinic-medical" size={26} color="cyan" />
      <Text style={styles.textTitle3}> {clinica} </Text>
      </View>
      <Text style={styles.linha}>___________________________________________________________</Text>
     <View >
     <Text style={styles.textTitle4}>Buscar Autorizações</Text>
     <TouchableOpacity onPress={() => setListVisivel(!listVisivel)} style={{ marginTop: 10 }}>
     <FontAwesome5 style={styles.icon5} name="caret-square-down" size={30} color="#00CED1"/>
      </TouchableOpacity>
     </View>
    {listVisivel && (
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.list}
          data={list}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => itemSelection(item.id)}>
              <ListAutorizacao
                props={item}
                isSelected={selectedItems.includes(item.id)}
              />
            </TouchableOpacity>
          )}
        />
      )}
       <View>
        <Text style={styles.textTitle5}>Nº TOTAL DE ATENDIMENTO(S)</Text>
        <Image
        source={require('./images/grafico.jpeg')}
        style={styles.imgGrafico}/>
        </View>
    </View>
  );
}
