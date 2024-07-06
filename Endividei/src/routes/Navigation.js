import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginPage from '../views/LoginPage/LoginPage';
import RegisterPage from '../views/RegisterPage/RegisterPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={LoginPage} />
      <Stack.Screen name="register" component={RegisterPage} />
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
