import React, {useState} from 'react'
import { View } from 'react-native'
import { TextInput, Headline, Button } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons';
import globalStyles from '../Styles/StylesGlobal'
import styles from '../Styles/StylesNuevo'

const NuevoCliente = () => {

  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [empresa, setEmpresa] = useState('');
  
  const guardarCliente = ()=>{
    //Validar 
    if(nombre === '' || telefono === '' || correo === '' || empresa === ''){
      return;
    }
    //Generar el cliente

    //guardar el cliente en la API

    //Redireccionar

    //Limpiar states
  }
  return (
    <View style={globalStyles.contenedor}>
      <Headline style={globalStyles.titulo}>Añadir Nuevo Cliente</Headline>
      <TextInput
        label='Nombre'
        placeholder='Horacio'
        onChange={texto=>setNombre(texto)}
        value={nombre}
        style={styles.input}
      />
      <TextInput
        label='Telefono'
        placeholder='3516506025'
        onChange={texto=>setTelefono(texto)}
        value={telefono}
        style={styles.input}
      />
      <TextInput
        label='Correo'
        placeholder='Hola@gmail.com'
        onChange={texto=>setCorreo(texto)}
        value={correo}
        style={styles.input}
      />
      <TextInput
        label='Empresa'
        placeholder='Horacio.inc'
        onChange={texto=>setEmpresa(texto)}
        value={empresa}
        style={styles.input}
      />

      <Button mode='contained' onPress={()=> guardarCliente()}>
        <Ionicons name="ios-add" size={24} color="white" />
        Guardar Cliente
      </Button>

    </View>
  )
}

export default NuevoCliente