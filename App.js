import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';

import LoginScreen from './src/screens/Login'
import HomeScreen from './src/screens/Home'
import EquipeScreen from './src/screens/Equipe'
import ConsideracoesScreen from './src/screens/Consideracoes'
import ResultadosScreen from './src/screens/Resultados'


import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <PaperProvider>
        <NavigationContainer>
        <StatusBar hidden={true}/>
          <Stack.Navigator screenOptions={{ headerShown: false}}>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Equipe" component={EquipeScreen} />
              <Stack.Screen name="Consideracoes" component={ConsideracoesScreen} />
              <Stack.Screen name="Resultados" component={ResultadosScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
  );
}