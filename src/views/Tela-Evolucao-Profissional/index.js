import React from 'react';
import { StatusBar, StyleSheet, View} from 'react-native';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function TelaConfiguracaoProfissional() {


  return (
    <View style={{flex: 1, backgroundColor: "pink"}}>
    </View>
   
  );
} 


const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: "center",
   alignItems: "center",
  }
})