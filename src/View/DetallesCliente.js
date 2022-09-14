import React from 'react'
import { View } from 'react-native'
import { Headline, Text, Button } from 'react-native-paper';
import globalStyles from '../Styles/StylesGlobal';
const DetallesCliente = ({route}) => {

  const {nombre, empresa, telefono, correo} = route.params;

  return (
    <View style={globalStyles.contenedor}>
      <Headline style={globalStyles.titulo}>{nombre}</Headline>
      <Text style={globalStyles.text}>Empresa: {empresa}</Text>
      <Text style={globalStyles.text}>Telefono: {telefono}</Text>
      <Text style={globalStyles.text}>Correo: {correo}</Text>

      <Button>
        Eliminar
      </Button>
    </View>
  )
}

export default DetallesCliente