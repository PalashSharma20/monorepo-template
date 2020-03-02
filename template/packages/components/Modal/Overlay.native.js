import React from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Overlay = ({visible, onClose, children, style}) => (
  <Modal
    animationType="fade"
    transparent={true}
    visible={visible}
    onRequestClose={onClose}>
    <KeyboardAvoidingView
      style={[styles.overlay, StyleSheet.flatten(style)]}
      behavior="padding"
      enabled>
      <TouchableOpacity
        activeOpacity={1}
        onPressOut={onClose}
        style={styles.overlay}
      />
      {children}
    </KeyboardAvoidingView>
  </Modal>
);

export default Overlay;

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
