import React from 'react';
import { StyleSheet, View, ImageBackground, Text, Image,TouchableWithoutFeedback } from 'react-native';

import backgroundImage from '../../assets/background.png'
import backgroundFoto from '../../assets/whiteHex.png'
import PerfilIcon from '../../assets/perfilIcon.png'
import SetaIcon from '../../assets/seta.png'

export default function Consideracoes ({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.image}>

        <View style={styles.header}>
            <ImageBackground source={backgroundFoto} style={styles.foto}>
                <TouchableWithoutFeedback>
                    <Image source={PerfilIcon} style={styles.perfilIcon}></Image>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Equipe")}>
                    <Image source={SetaIcon} style={styles.SetaIcon}></Image>
                </TouchableWithoutFeedback>
            </ImageBackground>
        </View>
        <View style={styles.main}>
            <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold', marginTop: -90,}}>Considerações</Text>
                <View style={styles.cardIntegrantes}>
                    <View style={{alignItems: 'center',}}>
                        <Text style={{fontWeight: 'bold', fontSize: 20,}}>Avaliador</Text>
                    </View>
                    <Text style={{fontSize: 17, marginLeft: 10, marginRight: 10, marginBottom: 5, marginTop: 5,}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis diam pulvinar, 
                        tempus sem ac, efficitur magna. Mauris ac tincidunt elit, a pharetra sem. Sed id quam ligula. 
                        Ut sollicitudin interdum purus.
                    </Text>
                </View>
                <View style={styles.cardIntegrantes}>
                    <View style={{alignItems: 'center',}}>
                        <Text style={{fontWeight: 'bold', fontSize: 20,}}>Avaliador</Text>
                    </View>
                    <Text style={{fontSize: 17, marginLeft: 10, marginRight: 10, marginBottom: 5, marginTop: 5,}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis diam pulvinar, 
                        tempus sem ac, efficitur magna. Mauris ac tincidunt elit, a pharetra sem. Sed id quam ligula. 
                        Ut sollicitudin interdum purus. 
                    </Text>
                </View>
                <View style={styles.cardIntegrantes}>
                    <View style={{alignItems: 'center',}}>
                        <Text style={{fontWeight: 'bold', fontSize: 20,}}>Avaliador</Text>
                    </View>
                    <Text style={{fontSize: 17, marginLeft: 10, marginRight: 10, marginBottom: 5, marginTop: 5,}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis diam pulvinar, 
                        tempus sem ac, efficitur magna. Mauris ac tincidunt elit, a pharetra sem. Sed id quam ligula. 
                        Ut sollicitudin interdum purus.
                    </Text>
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
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    height: '100%',
  },

  header: {
    height: '20%',
    backgroundColor: 'transparent',
  },

  perfilIcon: { 
    width: 45,
    height: 45,
    // alignSelf: 'flex-end',
    marginRight: 10,
    marginTop: 25,
  },

  SetaIcon: {
    width: 45,
    height: 45,
    // alignSelf: 'flex-start',
    marginLeft: 10,
    marginTop: 25,
  },

  main:{
    alignItems: 'center',
    height: '80%',
    justifyContent: 'space-evenly',
  },

  cardIntegrantes: {
    backgroundColor: '#D9D9D9',
    width: '85%',
    height: '27%',
    borderRadius: 15,
  },
});