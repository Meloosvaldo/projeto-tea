import { Camera, CameraType } from 'expo-camera';
import { useState, useRef  } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Modal, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function CameraProfissional({navigation}) {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const camRef = useRef(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null)
  const [ open, setOpen] = useState(false)
  
 if(requestPermission === true){
  return <View/>
}
if(requestPermission === false){
   return <Text>Acesso negado</Text>
}

  function AlternarCamera() {
    setType(atual => (atual === CameraType.back ? CameraType.front : CameraType.back));
  }
  async function takePicture() {
    if(camRef){
    const data = await camRef.current.takePictureAsync();
    setCapturedPhoto(data.uri);
    setOpen(true);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera style={styles.camera} 
      type={type}
      ref={camRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonFlip} onPress={AlternarCamera}>
            <FontAwesome name="exchange" size={30} color="#FFFFFF"/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonCamera}
          onPress={takePicture}>
            <FontAwesome name="camera" size={25} color="#00CED1"/>
          </TouchableOpacity>
        </View>
      </Camera>
      
      {capturedPhoto &&(
      <Modal
      animationType="slide"
      transparent={false}
      visible={open}
      > 
      <View style={styles.contentModal}>
      <TouchableOpacity style={styles.closeButton1}
      onPress={() => {setOpen(false)}}
      >
      <FontAwesome name="window-close" size={40} color="#00CED1"/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.closeButton2}
      onPress={() => {setOpen(false)}}
      >
      <FontAwesome name="upload" size={40} color="#00CED1"/>
      </TouchableOpacity>
        <Image style={styles.imgPhoto} source={{ uri : capturedPhoto}}/>
      </View>
      <TouchableOpacity 
        style={styles.buttonPerfil}
        onPress={()=> navigation.navigate('TelaInicioProfissional')}
        >
        <Text style={styles.textButtonPerfil}>OK</Text> 
         
    </TouchableOpacity>
      </Modal>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 50,
  },
  buttonFlip: {
    position: "absolute",
    bottom: 60,
    left: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00CED1",
    margim: 20,
    height: 60,
    width: 60,
    borderRadius:50,
  },
  buttonCamera: {
    position: "absolute",
    bottom: 60,
    right: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    margim: 20,
    height: 60,
    width: 60,
    borderRadius:50,
  },
  contentModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    margin: 20,
  }, 
  closeButton1: {
    position: "absolute",
    top: 100,
    right: 2,
    margin: 10,
  }, 
  closeButton2: {
    position: "absolute",
    top: 100,
    right: 80,
    margin: 10,
  }, 
  imgPhoto: {
    width: "100%",
    height: 400,
  },
  buttonPerfil: {
    position: "absolute",
    backgroundColor: "#00CED1",
    height: 50,
    width: 100,
    marginTop: 620,
    marginLeft: 150,
    marginBottom:20,
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
});
