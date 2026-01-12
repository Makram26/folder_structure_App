import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import Toast from 'react-native-toast-message';
import Routing from './src/boot/routing';
import Store from './src/redux/store';

const App = () => {
  return (
    <Provider store={Store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <Routing />
        <Toast />
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;
