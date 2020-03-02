import React, {useContext} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {ThemeContext} from 'contexts/ThemeContext';

import {View, Text} from 'components/Base';
import Overlay from 'components/Modal/Overlay';
import {StyledTextInput} from 'components/Input';

export const DialogTitle = ({children}) => (
  <Text style={styles.title}>{children}</Text>
);

export const DialogDescription = ({children}) => (
  <Text color="secondary" style={styles.description}>
    {children}
  </Text>
);

export const DialogInput = props => (
  <View style={styles.dialogInputContainer}>
    <StyledTextInput {...props} />
  </View>
);

export const DialogButtonsContainer = ({children, style}) => (
  <View style={[styles.dialogButtonsContainer, StyleSheet.flatten(style)]}>
    {children}
  </View>
);

export const DialogButton = ({children, ...rest}) => (
  <TouchableOpacity style={styles.dialogButton} {...rest}>
    <Text style={styles.dialogButtonText}>{children}</Text>
  </TouchableOpacity>
);

const Dialog = ({
  visible,
  children,
  title,
  description,
  onSubmit,
  onClose,
  ...rest
}) => {
  const {palette} = useContext(ThemeContext);

  return (
    <Overlay
      style={{backgroundColor: palette.dialogBackground}}
      visible={visible}
      onClose={onClose}>
      <View style={styles.dialog}>
        {children || (
          <>
            {title && <DialogTitle>{title}</DialogTitle>}
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
            <DialogButtonsContainer>
              {onSubmit && (
                <DialogButton onPress={onClose}>Cancel</DialogButton>
              )}
              <DialogButton onPress={onSubmit || onClose}>OK</DialogButton>
            </DialogButtonsContainer>
          </>
        )}
      </View>
    </Overlay>
  );
};

export default Dialog;

const styles = StyleSheet.create({
  dialog: {
    position: 'relative',
    zIndex: 100,
    width: '90%',
    maxWidth: 500,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    padding: 10,
  },
  title: {
    fontSize: 24,
    marginTop: 20,
    marginHorizontal: 20,
  },
  description: {
    marginTop: 10,
    marginHorizontal: 20,
  },
  dialogInputContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    height: 40,
  },
  dialogButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 10,
    marginTop: 10,
  },
  dialogButton: {
    padding: 10,
    marginLeft: 5,
    borderRadius: 4,
  },
  dialogButtonText: {
    textTransform: 'uppercase',
  },
});
