import React, { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { List, Headline } from 'react-native-paper';
import globalStyles from '../Styles/StylesGlobal';
import axios from 'axios';

const Inicio = () => {

  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const cargarClientes = async () => {
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
      <Headline style={globalStyles.titulo}>Clientes</Headline>
      <FlatList
        data={clientes}
        keyExtractor={client => (client.id).toString()}
        renderItem={({ item }) => (
          <List.Item
            title={item.nombre}
            description={item.empresa}
          />
        )}
      />
    </View>
  )


}

export default Inicio