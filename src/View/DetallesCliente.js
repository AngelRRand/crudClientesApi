import React from 'react'
import { Alert, View } from 'react-native'
import { Headline, Text, Button } from 'react-native-paper';
import globalStyles from '../Styles/StylesGlobal';
const DetallesCliente = ({route}) => {

  const {nombre, empresa, telefono, correo} = route.params;

  const mostrarConfirmacion = () =>{
    Alert.alert(
      '¿Deseas eliminar al cliente?',
      'Un contacto eliminado no se puede recuperar',
      [
        {text:'Si Eliminar', onPress: ()=> eliminarContacto()},
        {text:'Volver', onPress: ()=> eliminarContacto()}
      ]
    )
  }

  const eliminarContacto = ()=>{
    
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
        onPress={()=>mostrarConfirmacion()}
        >
        Eliminar
      </Button>
    </View>
  )
}

export default DetallesCliente