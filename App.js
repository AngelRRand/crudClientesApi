//React-Native-Navegation

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//React-Native-Paper

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import DetallesCliente from './src/View/DetallesCliente';
import Inicio from './src/View/Inicio';
import NuevoCliente from './src/View/NuevoCliente';

const Stack = createNativeStackNavigator();
export default function App() {


  



  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Inicio'
        >
          <Stack.Screen
            name='inicio'
            component={Inicio}
          />
          <Stack.Screen
            name='NuevoCliente'
            component={NuevoCliente}
            options={{
              title: 'Nuevo Cliente'
            }}
          />
          <Stack.Screen
            name='DetallesCliente'
            component={DetallesCliente}
            options={{
              title: 'Nuevo Cliente'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}