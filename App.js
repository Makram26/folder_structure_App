import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import Home from './src/screens/Home';
import Store from './src/redux/store';

import Toast from 'react-native-toast-message';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
     <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </Provider>
    </>
   
  );
};

export default App;
