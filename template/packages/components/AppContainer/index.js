import React from 'react';
import axios from 'axios';

import {ThemeProvider} from 'contexts/ThemeContext';
import {AuthProvider, AuthConsumer} from 'contexts/AuthContext';

import {StatusBar, View} from 'components/Base';

axios.defaults.baseURL = 'https://example.com/api';

const AppContainer = ({App, Login, style}) => (
  <ThemeProvider>
    <StatusBar />
    <View style={style}>
      <AuthProvider>
        <AuthConsumer>
          {({isAuthenticated}) => (isAuthenticated ? <App /> : <Login />)}
        </AuthConsumer>
      </AuthProvider>
    </View>
  </ThemeProvider>
);

export default AppContainer;
