import React, { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { List, Headline, Button } from 'react-native-paper';
import globalStyles from '../Styles/StylesGlobal';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

const Inicio = ({ navigation }) => {

  const [clientes, setClientes] = useState([]);
  const [consultarAPI, setConsultarAPI] = useState(true);

  useEffect(() => {
    const cargarClientes = async () => {
      try {
        const res = await axios.get('http://192.168.1.6:3000/clientes')
        setClientes(res.data)
        setConsultarAPI(false)
      } catch (error) {
        console.log((error))
      }
    }
    if (consultarAPI) {
      cargarClientes()
    }
  }, [consultarAPI]);

  return (
    <View>
      <Headline style={globalStyles.titulo}>{clientes.length === 0 ? "Aun no hay clientes" : "Clientes"}</Headline>
      
      <FlatList
        data={clientes}
        keyExtractor={client => (client.id).toString()}
        renderItem={({ item }) => (
          <List.Item
            title={item.nombre}
            description={item.empresa}
            onPress={()=>{
              navigation.navigate('DetallesCliente', { item, setConsultarAPI })
            }}
          />
        )}
      />
      <View style={globalStyles.fab} onPress={() => navigation.navigate('NuevoCliente', { setConsultarAPI })}>
        <Ionicons name="ios-add-outline" size={24} color="black" />
      </View>
    </View>
  )


}

export default Inicio