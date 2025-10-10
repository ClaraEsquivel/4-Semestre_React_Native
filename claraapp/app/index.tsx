//Importação
import {View, Text, StyleSheet} from 'react-native';

//Corpo do Aplicativo
export default function App(){


  return(
    <View style = {styles.central}>

      <Text style = {styles.titulo}>APP Barbearia</Text>
      <Text style = {styles.titulo2}>A melhor barbearia da CBX!</Text>

    </View>


  );
}


//Area de Estilização - CSS
const styles = StyleSheet.create({
  central:{
    backgroundColor: '#191970',
    flex:1, //ocupa toda a tela
    justifyContent: 'center',
    alignItems: 'center',
  },

  titulo:{
    color: 'white',
    fontSize: 50,
    fontWeight: '600'
  },

  titulo2:{
    color: 'yellow',
    fontSize: 30,
    fontWeight: '500'
  },
  
})
