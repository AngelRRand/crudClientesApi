import React, {useEffect, useState} from 'react'
import { View, Text, FlatList } from 'react-native'
import axios from 'axios';

const Inicio = () => {

  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const cargarClientes = async()=>{
      try {
        const res = await axios.get('http://192.168.1.6:3000/clientes')
        setClientes(res.data)
      } catch (error) {
        console.log((error))
      }
    }
    cargarClientes()
  }, []);

  return (
    <View>
      <Text>Inicio</Text>
    </View>
  )

  
}

export default Inicio