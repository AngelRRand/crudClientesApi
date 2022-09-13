import React, {useEffect} from 'react'
import { View, Text } from 'react-native'
import axios from 'axios';

const Inicio = ({}) => {

  useEffect(() => {
    const cargarClientes = async()=>{
      try {
        const res = await axios.get('http://192.168.1.6:3000/clientes')
      } catch (error) {
        
      }
    }
  }, []);

  return (
    <View>
      <Text>Inicio</Text>
    </View>
  )

  
}

export default Inicio