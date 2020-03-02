import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './Home';
import Details from './Details';
import Modal from './Modal';

const Stack = createNativeStackNavigator();

const App = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen
            name="Modal"
            component={Modal}
            options={{stackPresentation: 'modal'}}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  </SafeAreaProvider>
);

export default App;
