import React from 'react';

import AppContainer from 'components/AppContainer';
import LoginScreen from 'components/Screens/LoginScreen';
import {Text} from 'components/Base';

const AppWrapper = () => (
  <AppContainer App={() => <Text>Web</Text>} Login={LoginScreen} />
);

export default AppWrapper;
