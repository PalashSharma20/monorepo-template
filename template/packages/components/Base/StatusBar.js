import React, {useContext} from 'react';
import {StatusBar} from 'react-native';
import {ThemeContext} from 'contexts/ThemeContext';

export default () => {
  const {theme} = useContext(ThemeContext);

  return (
    <StatusBar barStyle={`${theme === 'dark' ? 'light' : 'dark'}-content`} />
  );
};
