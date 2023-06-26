import React from 'react';
import { StatusBar, StyleSheet, View} from 'react-native';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function TelaConfiguracaoProfissional() {


  return (
    <View style={{flex: 1, backgroundColor: "blue"}}>
    </View>
   
  );
} 


const styles = StyleSheet.create({
  container: {
   width: "50%",
   height: "50%",
    justifyContent: "center",
    alignItems: "center",
  }
})