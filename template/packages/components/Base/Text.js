import React, {useContext} from 'react';
import {StyleSheet, Text} from 'react-native';
import {ThemeContext} from 'contexts/ThemeContext';

export default ({children, color = 'primary', style, ...rest}) => {
  const {palette} = useContext(ThemeContext);

  return (
    <Text
      style={[
        {
          color: palette[`${color}Text`] || palette[color] || color,
        },
        StyleSheet.flatten(style),
      ]}
      {...rest}>
      {children}
    </Text>
  );
};
