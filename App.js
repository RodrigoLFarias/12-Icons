import { TextInput, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Adicionando Ícones </Text>

        <View style = {styles.inputs}>
            <View style = {styles.boxInput}>
              <Icon name="person-circle-outline" size={35}> </Icon>
              <TextInput style= {styles.input} placeholder='Digite seu nome'/>
            </View>

            <View style = {styles.boxInput}>
              <FontAwesome name="lock" size={35} />
              <TextInput style= {styles.input} placeholder='Digite sua senha'/>
            </View>
        </View>
        <TouchableOpacity style = {styles.btn}>
           <Text style = {styles.txtBtn}> Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.btn}>
          <FontAwesome name="google" size={35} color= 'white' />
          <Text style = {styles.txtBtn}> Acessar com o Google</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,

  },
  inputs: {
    gap: 6,
    width: 300
  },
  boxInput: {
  flexDirection: 'row',
  justifyContent: 'center',
  gap: 20,
  },

  input:{
 borderWidth: 1,
  padding: 5,
  width: '100%',

  },

  btn:{
    flexDirection: 'row',
    gap: 10,
    padding: cls10,
    borderRadius: 6,
    backgroundColor: '#4287f5'

  },
  txtBtn:{
  color: 'black'
  },
  

});
