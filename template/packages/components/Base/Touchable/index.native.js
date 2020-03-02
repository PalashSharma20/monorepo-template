import React from 'react';
import {TouchableOpacity} from 'react-native';

const Touchable = ({onPress, style, children}) => (
  <TouchableOpacity onPress={onPress} style={style}>
    {children}
  </TouchableOpacity>
);

export default Touchable;
