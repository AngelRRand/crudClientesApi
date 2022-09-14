import React, { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { List, Headline , Button} from 'react-native-paper';
import globalStyles from '../Styles/StylesGlobal';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

const Inicio = () => {

  const [clientes, setClientes] = useState([]);
  const [consultarAPI, setConsultarAPI] = useState(true);

  useEffect(() => {
    const cargarClientes = async () => {
      try {
        const res = await axios.get('http://192.168.1.6:3000/clientes')
        setClientes(res.data)
      } catch (error) {
        console.log((error))
      }
    }
    if(consultarAPI){
      cargarClientes()
    }
  }, [consultarAPI]);

  return (
    <View>
      <Headline style={globalStyles.titulo}>{clientes.length === 0 ? "Aun no hay clientes" : "Clientes"}</Headline>
      <Button>
        Nuevo cliente
      </Button>
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