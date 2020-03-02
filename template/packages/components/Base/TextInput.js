import React, {useContext} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {ThemeContext} from 'contexts/ThemeContext';

export default ({style, ...rest}) => {
  const {palette} = useContext(ThemeContext);

  return (
    <TextInput
      style={[
        {
          color: palette.primaryText,
        },
        StyleSheet.flatten(style),
      ]}
      placeholderTextColor={palette.placeholderText}
      {...rest}
    />
  );
};
