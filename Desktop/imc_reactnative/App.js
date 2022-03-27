import *  as React from 'react';
import { 
  Text,
  View, 
  StyleSheet, 
  TextInput,
  Button
} from 'react-native';
import Constants from 'expo-constants';

import { Card } from 'react-native-paper';


export default class App extends React.Component {
    constructor(props){
      super(props)
      this.state = {altura:0,massa:0,resultado:0,resultadoText:""}
      this.calcular = this.calcular.bind(this) 
    } 
    
    calcular(){
      let imc = this.state.massa / (this.state.altura * this.state.altura)
      let s = this.state
      s.resultado = imc

        if(s.resultado < 18.5){
          s.resultadoText ='Abaixo do Peso'
        }
        else if (s.resultado < 25){
          s.resultadoText ='Peso Normal'
        }
         else if (s.resultado < 30){
        s.resultadoText ='Sobrepeso'
        }
        else if (s.resultado < 35) {
          s.resultadoText ='Obesidade grau I'
        }
        else if (s.resultado < 40) {
          s.resultadoText ='Obesidade grau II'
        }
        else{
          s.resultadoText ='Obesidade Grau III'
        }
      this.setState(s)
    }

  render(){
  return (
  <View style={styles.container}>
  
    <Card style={styles.card}>
      <Text style={styles.paragraph}>
        Calculadora de IMC
      </Text>

      <Text style={styles.titulo}>Peso :</Text>

      <TextInput style={styles.input} 
      placeholder="Peso" onChangeText={(massa) => this.setState({massa})}
      value={this.state.massa}
      />

      <Text style={styles.titulo}>Altura :</Text>

      <TextInput style={styles.input} 
      placeholder="Altura" onChangeText={(altura) => this.setState({altura})}
      value={this.state.altura}
      />

      <Text style={styles.titulo}>IMC :</Text>

      <TextInput editable={false} style={styles.input} placeholder="Seu IMC Atual" value={this.state.resultado.toFixed(2)} />
      

      <View style={styles.botao}>
        <Button title='Calcular'  color="#DC143C" onPress={this.calcular}/>
      </View>

    </Card>
  
  </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  card: {
    padding: 20,
    paddingBottom: 50,
  },

  titulo: {
    color: '#FF69B4',
  },

  input: {
    borderColor: '#B22222',
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginBottom: 12,
    color: '#FF69B4',
  },

  botao:{
    backgroundColor: '#DC143C',
  },

  paragraph: {
    margin: 24,
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#DC143C',
  },
});
