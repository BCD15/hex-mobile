import React from 'react';
import { StyleSheet, View, ImageBackground, Text, Image, TextInput,} from 'react-native';
import { Button, Card } from 'react-native-paper';

import backgroundImage from '../../assets/background.png'
import Logo from '../../assets/logo.png'
import Google from '../../assets/google.png'
import Facebook from '../../assets/facebook.png'
import Twitter from '../../assets/twitter.png'

export default function Login ({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.image}>
        
        <View style={styles.header}>
          <Image source={Logo} style={styles.logo}>
          </Image>
          <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold',}}>
            Consultar Processo
          </Text>
        </View>

        <View style={styles.main}>
          <Card mode='contained' style={styles.card}>
            <TextInput 
              name="Email" 
              placeholder='  Email'
              type='email'  
              label="Email"
              style={styles.input}
            />

            <TextInput 
              name="senha" 
              placeholder='  Senha' 
              label="Password"
              type="password"
              style={styles.input}
            />

            <View style={{alignItems: 'center',}}>
              <Button mode="elevated" onPress={() => navigation.navigate('Home')} style={styles.botao}>
                <Text style={{color: '#FFF',}}>Login</Text>
              </Button>
            </View>

          </Card>
        </View>

        <View style={styles.footer}>
          <Text style={{color: '#fff', fontWeight: 'bold', marginBottom: 20, fontSize: 17,}}>Ou entre com:</Text>
          <View style={{flexDirection: 'row',}}>
            <Image source={Facebook} style={{width: 35, height: 35, marginRight: 10,}}></Image>
            <Image source={Google} style={{width: 35, height: 35, marginLeft: 10, marginRight: 10,}}></Image>
            <Image source={Twitter} style={{width: 35, height: 35, marginLeft: 10,}}></Image>
          </View>
        </View>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
  },

  header: {
    alignItems: 'center',
    marginTop: 75,
    // backgroundColor: 'red',
    height: '20%',
  },

  logo: {
    height: 82,
    width: 258,
    marginBottom: 43,
    marginRight: 20,
  },

  main:{
    alignItems: 'center',
    justifyContent: 'center',
    height: '41%',
    // backgroundColor: 'blue',
  },

  card: {
    backgroundColor: 'transparent',
    width: '90%',
    height: '70%',
    padding: 10,
    marginTop: 10,
  },

  titleContainer: {
    alignItems: 'center',
  },

  title: {
    fontWeight: 'bold',
    color: '#FF5F0F',
  },

  input: {
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    margin: 15,
    width: '90%',
    height: 39,
  },

  botao: {
    width: 130,
    backgroundColor: '#1F6967',
  },

  footer: {
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center', 
    // backgroundColor: 'green',
  },
});