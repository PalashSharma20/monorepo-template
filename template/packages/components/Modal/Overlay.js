import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, TouchableOpacity, Animated} from 'react-native';

const Overlay = ({visible, onClose, children, style}) => {
  const [seen, setSeen] = useState(false);

  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      setSeen(true);
      Animated.timing(opacity, {
        toValue: 1,
        timing: 200,
      }).start();
    } else {
      Animated.timing(opacity, {
        toValue: 0,
        timing: 200,
      }).start(() => setSeen(false));
    }
  }, [visible]);

  return (
    seen && (
      <div
        style={{
          position: 'fixed',
          zIndex: 5,
          height: '100%',
          width: '100%',
          top: 0,
          left: 0,
        }}>
        <Animated.View
          style={[styles.overlay, StyleSheet.flatten(style), {opacity}]}>
          <TouchableOpacity
            activeOpacity={1}
            onPressOut={onClose}
            style={styles.overlay}
          />
          {children}
        </Animated.View>
      </div>
    )
  );
};

export default Overlay;

const styles = StyleSheet.create({
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
