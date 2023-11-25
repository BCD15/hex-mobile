import React from 'react';
import { StyleSheet, View, ImageBackground, Text, Image,TouchableWithoutFeedback } from 'react-native';
import { Button, } from 'react-native-paper';

import backgroundImage from '../../assets/background.png'
import backgroundFoto from '../../assets/whiteHex.png'
import PerfilIcon from '../../assets/perfilIcon.png'
import SetaIcon from '../../assets/seta.png'

export default function Equipe ({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.image}>

        <View style={styles.header}>
            <ImageBackground source={backgroundFoto} style={styles.foto}>
                <TouchableWithoutFeedback>
                    <Image source={PerfilIcon} style={styles.perfilIcon}></Image>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Home")}>
                    <Image source={SetaIcon} style={styles.SetaIcon}></Image>
                </TouchableWithoutFeedback>
            </ImageBackground>
        </View>
        <View style={styles.main}>
              <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold', marginTop: -110, marginBottom: -20,}}>
                Sua Equipe:
              </Text>
                <View style={styles.cardIntegrantes}>
                    <View style={{alignItems: 'center',}}>
                        <Text style={{fontWeight: 'bold', fontSize: 20,}}>Integrantes</Text>
                    </View>
                    <Text style={{fontSize: 17, marginLeft: 10, marginBottom: 5, marginTop: 5,}}>Particpante</Text>
                    <Text style={{fontSize: 17, marginLeft: 10, marginBottom: 5, marginTop: 5,}}>Particpante</Text>
                    <Text style={{fontSize: 17, marginLeft: 10, marginBottom: 5, marginTop: 5,}}>Particpante</Text>
                    <Text style={{fontSize: 17, marginLeft: 10, marginBottom: 5, marginTop: 5,}}>Particpante</Text>
                </View>
                <View style={styles.cardAvaliadores}>
                    <View style={{alignItems: 'center',}}>
                        <Text style={{fontWeight: 'bold', fontSize: 20,}}>Avaliações</Text>
                    </View>
                    <Text style={{fontSize: 17, marginLeft: 10, marginBottom: 2, marginTop: 2,}}>Avaliador</Text>
                    <Text style={{fontSize: 17, marginLeft: 10, marginBottom: 2, marginTop: 2,}}>Nota:</Text>
                    <Text style={{fontSize: 17, marginLeft: 10, marginBottom: 2, marginTop: 2,}}>Avaliador</Text>
                    <Text style={{fontSize: 17, marginLeft: 10, marginBottom: 2, marginTop: 2,}}>Nota:</Text>
                    <Text style={{fontSize: 17, marginLeft: 10, marginBottom: 2, marginTop: 2,}}>Avaliador</Text>
                    <Text style={{fontSize: 17, marginLeft: 10, marginBottom: 2, marginTop: 2,}}>Nota:</Text>
                    <Text style={{fontSize: 17, marginLeft: 10, marginBottom: 2, marginTop: 2,}}>Avaliador</Text>
                    <Text style={{fontSize: 17, marginLeft: 10, marginBottom: 2, marginTop: 2,}}>Nota:</Text>
                    <Text style={{fontSize: 17, marginLeft: 10, marginBottom: 2, marginTop: 2,}}>Avaliador</Text>
                    <Text style={{fontSize: 17, marginLeft: 10, marginBottom: 2, marginTop: 2,}}>Nota:</Text>
                </View>    
                <View style={styles.footer}>
                    <Button mode="elevated" onPress={() => navigation.navigate('Consideracoes')} style={styles.botao}>
                        <Text style={{color: '#FFF',}}>Considerações</Text>
                    </Button>
                    <Button mode="elevated" onPress={() => navigation.navigate('Resultados')} style={styles.botao}>
                        <Text style={{color: '#FFF',}}>Resultados</Text>
                    </Button>
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

  cardAvaliadores: {
    backgroundColor: '#D9D9D9',
    width: '85%',
    height: '48%',
    borderRadius: 15,
  },

  botao: {
    width: 178,
    backgroundColor: '#1F6967',
  },

  footer: {
    paddingTop: 15,
    height: '10%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around', 
  },
});