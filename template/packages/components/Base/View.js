import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {ThemeContext} from 'contexts/ThemeContext';

export default ({children, backgroundColor = 'primary', style, ...rest}) => {
  const {palette} = useContext(ThemeContext);

  return (
    <View
      style={[
        {
          backgroundColor:
            palette[`${backgroundColor}Background`] ||
            palette[backgroundColor] ||
            backgroundColor,
        },
        StyleSheet.flatten(style),
      ]}
      {...rest}>
      {children}
    </View>
  );
};
