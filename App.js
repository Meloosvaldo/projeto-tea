import React from 'react';
import {Feather} from 'react-native-vector-icons';
import VectorIcon from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TelaInicioProfissional from './src/views/Tela-Inicio-Profissional';
import TelaEvolucaoProfissional from './src/views/Tela-Evolucao-Profissional';
import TelaHistoricoProfissional from './src/views/Tela-Historico-Profissional';
import TelaConfiguracaoProfissional from './src/views/Tela-Configuracao-Profissional';


import TelaPerfilProfissional from './src/views/Tela-Perfil-Profissional';
import TelaLoginProfissional from './src/views/Tela-Login-Profissional';
import CameraProfissional from './src/camera';
import RecuperacaoSenha from './src/views/Tela-Login-Profissional/RecuperacaoSenha';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
  

function Tabs() {
  
   return (
      <Tab.Navigator
      screenOptions={{
         Style:{
          borderTopColor: "transparente",
        },
        tabBarActiveTintColor: "#00CED1",
        tabBarStyle: {
         backgroundColor: "#fff", 
         paddingBottom: 3,
          paddingTop: 3,
        }
      }}
      >
       <Tab.Screen 
       name="início" 
       component={TelaInicioProfissional} 
       options={{ title: "", tabBarIcon: () => {
          return <VectorIcon name="home" size={25} color="#00CED1" />
       }
      }}/>

       <Tab.Screen 
       name="evolução" 
       component={TelaEvolucaoProfissional}
       options={{ title: "", tabBarIcon: () => {
          return <Feather name="clipboard" size={25} color="#00CED1" />
       }
      }}/>

       <Tab.Screen 
       name="histórico" 
       component={TelaHistoricoProfissional} 
       options={{ title: "",tabBarIcon: () => {
          return <VectorIcon name="landmark" size={25} color="#00CED1"/>
       }
      }}/>

       <Tab.Screen 
       name="configuração" 
       component={TelaConfiguracaoProfissional}   
       options={{ tabBarIcon: () => {
          return <Feather name="settings" size={25} color="#00CED1" />
       }
      }}/>
      </Tab.Navigator>
    )
};

export default function App() {
   return (
     <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name="TelaPerfilProfissional" component={TelaPerfilProfissional} 
         options={{title: '' }}/>
         <Stack.Screen name="CameraProfissional" component={CameraProfissional} options={{title: ''}}/>
         <Stack.Screen name="TelaLoginProfissional" component={TelaLoginProfissional} options={{title: ''}}/>
         <Stack.Screen name="TelaInicioProfissional" component={Tabs} 
          options={{title: '',
          headerShown: false,
          headerTitleStyle: {
          }
       
          }}/>
         <Stack.Screen name="RecuperacaoSenha" component={RecuperacaoSenha} options={{title: ''}}/>
       </Stack.Navigator>
     </NavigationContainer> 
   );
 }
 