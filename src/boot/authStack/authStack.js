import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/auth/Login';
import Register from '../../screens/auth/Register';
import EmailVerification from '../../screens/auth/EmailVerification';
import { StatusBar } from 'react-native';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (

    <>
      <StatusBar
        barStyle="dark-content"     // or "dark-content"
        backgroundColor="#FFFFFF"    // Android only
      />

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen
          name="EmailVerification"
          component={EmailVerification}
          // options={{ headerShown: true, title: 'Verify' }}
        />
      </Stack.Navigator>
    </>
  );
};

export default AuthStack;
