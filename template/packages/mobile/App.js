import React from 'react';
import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
import SplashScreen from 'react-native-splash-screen';

import AppContainer from 'components/AppContainer';
import LoginScreen from 'components/Screens/LoginScreen';

import App from './screens/App';

enableScreens();

const AppWrapper = () => {
  SplashScreen.hide();
  return <AppContainer App={App} Login={LoginScreen} style={{flex: 1}} />;
};

export default AppWrapper;
