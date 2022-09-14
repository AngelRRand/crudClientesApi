import React from 'react'
import { Alert, View } from 'react-native'
import { Headline, Text, Button } from 'react-native-paper';
import globalStyles from '../Styles/StylesGlobal';
import axios from 'axios';
const DetallesCliente = ({ navigation, route }) => {
  const { setConsultarAPI } = route.params
  const { nombre, empresa, telefono, correo, id } = route.params;

  const mostrarConfirmacion = () => {
    Alert.alert(
      '¿Deseas eliminar al cliente?',
      'Un contacto eliminado no se puede recuperar',
      [
        { text: 'Si Eliminar', onPress: () => eliminarContacto() },
        { text: 'Volver', style: 'cancel' }
      ]
    )
  }

  const eliminarContacto = async () => {
    const url = `http://192.168.1.6:3000/clientes/${id}`
    try {
      await axios.delete(url)
    } catch (error) {
      console.log(error)
    }
    //Redireccionar
    navigation.navigate('inicio')
    //Reiniciando la consulta
    setConsultarAPI(true)
  }

  return (
    <View style={globalStyles.contenedor}>
      <Headline style={globalStyles.titulo}>{nombre}</Headline>
      <Text style={globalStyles.text}>Empresa: {empresa}</Text>
      <Text style={globalStyles.text}>Telefono: {telefono}</Text>
      <Text style={globalStyles.text}>Correo: {correo}</Text>

      <Button
        style={globalStyles.eliminar}
        mode='contained'
        onPress={() => mostrarConfirmacion()}
      >
        Eliminar
      </Button>
      <View 
      style={globalStyles.fab} 
      onPress={() => navigation.navigate('NuevoCliente', { cliente:route.params.item, setConsultarAPI })}>
        <Ionicons name="brush-sharp" size={24} color="black" />
      </View>
    </View>
  )
}

export default DetallesCliente