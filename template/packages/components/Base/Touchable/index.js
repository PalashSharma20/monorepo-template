import React, {useState, useEffect} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

const Touchable = ({onPress, style, hoverStyle, children, ...rest}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [touchableStyle, setTouchableStyle] = useState(style);

  useEffect(() => {
    if (isHovering) {
      setTouchableStyle([
        StyleSheet.flatten(style),
        StyleSheet.flatten(hoverStyle),
      ]);
    } else {
      setTouchableStyle([StyleSheet.flatten(style)]);
    }
  }, [isHovering, style, hoverStyle]);

  return (
    <TouchableOpacity
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onPress={onPress}
      style={touchableStyle}
      {...rest}>
      {children}
    </TouchableOpacity>
  );
};

export default Touchable;
