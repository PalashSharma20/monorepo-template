import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';

import {ThemeContext} from 'contexts/ThemeContext';

import {View} from 'components/Base';
import Overlay from 'components/Modal/Overlay';

import top from './top';
import PopupOption from './PopupOption';

const Popup = ({visible, onClose, children}) => {
  const {palette} = useContext(ThemeContext);

  return (
    <Overlay
      style={{backgroundColor: 'transparent'}}
      visible={visible}
      onClose={onClose}>
      <View style={[styles.popup, {shadowColor: palette.primaryText}]}>
        {children}
      </View>
    </Overlay>
  );
};

export default Popup;
export {PopupOption};

const styles = StyleSheet.create({
  popup: {
    borderRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 250,
    position: 'absolute',
    zIndex: 5,
    right: 25,
    top,
  },
});
