import React, {useContext} from 'react';
import {StyleSheet, Text} from 'react-native';
import {ThemeContext} from 'contexts/ThemeContext';

import {Touchable} from 'components/Base';

const Button = ({
  color = 'primary',
  title,
  onPress,
  fill,
  buttonStyle,
  buttonTextStyle,
  buttonHoverStyle,
}) => {
  const {palette} = useContext(ThemeContext);

  return (
    <Touchable
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor:
            palette[`${fill}Background`] || palette[fill] || 'transparent',
        },
        StyleSheet.flatten(buttonStyle),
      ]}
      hoverStyle={[{opacity: 0.8}, buttonHoverStyle]}>
      <Text
        style={[
          styles.buttonText,
          {
            color: palette[`${color}Text`] || palette[color] || color,
          },
          StyleSheet.flatten(buttonTextStyle),
        ]}>
        {title}
      </Text>
    </Touchable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
  },
});
