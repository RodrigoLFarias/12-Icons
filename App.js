import React from 'react'; // Importando o React
import { ImageBackground, TextInput, TouchableOpacity, StyleSheet, Text, View } from 'react-native'; // Importando os componentes necessários do React Native
import Icon from 'react-native-vector-icons/Ionicons'; // Importando o ícone Ionicons
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Importando o ícone FontAwesome

export default function App(){ // Definindo a função do componente App
  const imagemFundo = require("./src/img/florzinhaeborboleta.jpg"); // Importando a imagem de fundo

  return (
    <View style={styles.container}> {/* View principal */}
      <ImageBackground source={imagemFundo} style={styles.ImagemB}> {/* Imagem de fundo */}
        <Text style={styles.Texticon}> Bem-Vindo </Text> {/* Texto "Adicionando Ícones" */}

        <View style={styles.inputs}> {/* Contêiner dos campos de entrada */}
          <View style={styles.boxInput}> {/* Contêiner de cada campo de entrada */}
            <Icon name="person-circle-outline" size={24.5} color='white'/> {/* Ícone do usuário */}
            <TextInput style={styles.input} placeholder='Digite seu nome' placeholderTextColor='white' /> {/* Campo de entrada para o nome */}
          </View>

          <View style={styles.boxInput}> {/* Contêiner de cada campo de entrada */}
            <FontAwesome name="lock" size={24.5} color='white' /> {/* Ícone do cadeado */}
            <TextInput style={styles.input} placeholder='Digite sua senha' placeholderTextColor='white' /> {/* Campo de entrada para a senha */}
          </View>
        </View>
        <TouchableOpacity style={styles.btn}> {/* Botão de acesso */}
          <Text style={styles.txtBtn}> Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}> {/* Botão de acesso com o Google */}
          <FontAwesome name="google" size={30} color='white' />
          <Text style={styles.txtBtn}> Acessar com o Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}> {/* Botão de acesso com o Facebook */}
        <FontAwesome name="facebook" size={30} color='white'/>
          <Text style={styles.txtBtn}> Acessar com o Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}> {/* Botão "Esqueceu a senha?" */}
          {/* <FontAwesome name="google" size={30} color='white' /> */}
          <Text style={styles.txtBtn}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({ // Estilos CSS
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo semi-transparente
  },
  Texticon: {
    color: '#FFf', // Cor do texto
    fontFamily: 'Sans-Serif', // Fonte do texto
    fontSize: 25 // Tamanho do texto
  },
  inputs: {
    gap: 6,
    width: 300,
  },
  boxInput: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  input: {
    borderWidth: 0.5,
    padding: 5,
    flex: 1,
    color: 'white',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 5,
    borderRadius: 6,
    backgroundColor: '#4287f5',
    borderWidth: 0.5,
    borderColor: 'black'
  },
  txtBtn: {
    color: 'white',
  },
  ImagemB: {
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    gap: 10,
    height: '100%',
    width: "100%"
  }
});


