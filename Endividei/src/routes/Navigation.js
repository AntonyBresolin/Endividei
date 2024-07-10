import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginPage from '../views/LoginPage/LoginPage';
import RegisterPage from '../views/RegisterPage/RegisterPage';
import MovementsPage from '../views/MovementsPage/MovementsPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


function MyStack() {
  return (
    // TODO - implementar rotas de navegação autenticadas, possivelmente usarmos o React Context API para isso, o token será com JWT
    <Stack.Navigator>
      <Stack.Screen name="login" component={LoginPage} />
      <Stack.Screen name="register" component={RegisterPage} />
      <Stack.Screen name="movements" component={MovementsPage} />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
