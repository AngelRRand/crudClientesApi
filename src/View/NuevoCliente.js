import React, {useState} from 'react'
import { View } from 'react-native'
import { TextInput, Headline, Button, Paragraph, Dialog, Portal } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons';
import globalStyles from '../Styles/StylesGlobal'
import styles from '../Styles/StylesNuevo'
import axios from 'axios';

const NuevoCliente = ({navigation}) => {

  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [alert, setAlert] = useState(false);

  const regresar = () => {
    navigation.navigate('inicio')
}
  const guardarCliente = async()=>{
    //Validar 
    if(nombre === '' || telefono === '' || correo === '' || empresa === ''){
      setAlert(true)
      return;
    }
    //Generar el cliente
    const cliente = {nombre, telefono, correo, empresa}
    console.log(cliente, 'hola buenas ')
    //guardar el cliente en la API
    try {
      await axios.post('http://192.168.1.6:3000/clientes', cliente)
    } catch (error) {
      console.log(error)
    }
    //Redireccionar
    regresar()
    //Limpiar states
    setNombre('')
    setTelefono('')
    setCorreo('')
    setEmpresa('')
    setAlert('')
  }

  return (
    <View style={globalStyles.contenedor}>
      <Headline style={globalStyles.titulo}>Añadir Nuevo Cliente</Headline>
      <TextInput
        label='Nombre'
        placeholder='Horacio'
        onChangeText={texto=>setNombre(texto)}
        value={nombre}
        style={styles.input}
      />
      <TextInput
        label='Telefono'
        placeholder='3516506025'
        onChangeText={texto=>setTelefono(texto)}
        value={telefono}
        style={styles.input}
      />
      <TextInput
        label='Correo'
        placeholder='Hola@gmail.com'
        onChangeText={texto=>setCorreo(texto)}
        value={correo}
        style={styles.input}
      />
      <TextInput
        label='Empresa'
        placeholder='Horacio.inc'
        onChangeText={texto=>setEmpresa(texto)}
        value={empresa}
        style={styles.input}
      />

      <Button mode='contained' onPress={()=> guardarCliente()}>
        <Ionicons name="ios-add" size={24} color="white" />
        Guardar Cliente
      </Button>

      <Portal>
        <Dialog
          visible={alert}
          onDismiss={()=>setAlert(false)}
        >
          <Dialog.Title>Error</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Todos los espacios son obligatorios</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={()=>setAlert(false)}>OK</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>


    </View>
  )
}

export default NuevoCliente