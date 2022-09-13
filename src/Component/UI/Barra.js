import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons';
const Barra = ({navigation, route}) => {


    const handlePress = () => {
        navigation.navigate('NuevoCliente')
    }
    return (
        <Button  onPress={() => handlePress()}>
            <Ionicons name="person-add" size={34} color="black" />
        </Button>
    )
}

export default Barra