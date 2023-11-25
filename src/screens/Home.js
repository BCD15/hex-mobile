import React from 'react';
import { StyleSheet, View, ImageBackground, Text, Image, TouchableWithoutFeedback, } from 'react-native';

import backgroundImage from '../../assets/background.png'
import backgroundFoto from '../../assets/backgroundFoto.png'
import PerfilIcon from '../../assets/perfilIcon.png'
import IFCLogo from '../../assets/logoIFC.png'
import mato from '../../assets/mato.png'

export default function Home ({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.image}>

        <View style={styles.header}>
            <ImageBackground source={backgroundFoto} style={styles.foto}>
              <Image source={PerfilIcon} style={styles.perfilIcon}></Image>
              <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold', marginBottom: 10, marginTop: 10,}}>
                Processo:
              </Text>
            </ImageBackground>
        </View>
            <View style={styles.main}>
                <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold', marginTop: 10,}}>Eventos</Text>
                <View style={styles.card}>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('Equipe')}>
                        <Image source={mato} style={{width: '60%', height: '100%', borderRadius: 13,}}></Image>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('Equipe')}>
                        <Image source={IFCLogo} style={{width: '40%', height: '100%', borderRadius: 13,}}></Image>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.card}>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('Equipe')}>
                        <Image source={mato} style={{width: '60%', height: '100%', borderRadius: 13,}}></Image>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => navigation.navgate('Equipe')}>
                        <Image source={IFCLogo} style={{width: '40%', height: '100%', borderRadius: 13,}}></Image>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.card}>
                    <TouchableWithoutFeedback onPress={() => navigation.navgate('Equipe')}>
                        <Image source={mato} style={{width: '60%', height: '100%', borderRadius: 13,}}></Image>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => navigation.navgate('Equipe')}>
                        <Image source={IFCLogo} style={{width: '40%', height: '100%', borderRadius: 13,}}></Image>
                    </TouchableWithoutFeedback>
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

  foto: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },

  header: {
    height: '20%',
  },

//   logo: {
//     height: 82,
//     width: 258,
//     // marginBottom: 40,
//     marginRight: 20,
//   },

  perfilIcon: { 
    width: 45,
    height: 45,
    alignSelf: 'flex-end',
    marginRight: 10,
    marginBottom: 35,
  },

  main:{
    alignItems: 'center',
    height: '80%',
    justifyContent: 'space-evenly',
  },

  card: {
    width: '85%',
    height: '20%',
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 13,
    marginBottom: 30,
  },
});