import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from './src/View/Inicio';

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

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}