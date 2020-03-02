import React from 'react';
import {StyleSheet} from 'react-native';

import OptionButton from 'components/OptionButton';

const PopupOption = ({title, onPress, icon, style, ...rest}) => (
  <OptionButton
    title={title}
    onPress={onPress}
    icon={icon}
    style={[styles.popupOption, StyleSheet.flatten(style)]}
    {...rest}
  />
);

export default PopupOption;

const styles = StyleSheet.create({
  popupOption: {
    borderBottomColor: '#88888825',
    borderBottomWidth: 1,
  },
});
