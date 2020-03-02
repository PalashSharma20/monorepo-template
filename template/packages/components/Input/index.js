import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';

import {ThemeContext} from 'contexts/ThemeContext';

import {View, Text, TextInput} from 'components/Base';

import Select from './Select';

const StyledTextInput = ({style, type, ...rest}) => {
  const {palette} = useContext(ThemeContext);

  return (
    <TextInput
      style={[
        styles.input,
        {backgroundColor: palette.inputBackground},
        type === 'textarea' ? styles.multilineInput : null,
        style,
      ]}
      {...rest}
    />
  );
};

export {StyledTextInput};

const Input = ({label, type = 'text', children, ...rest}) => (
  <View style={styles.inputContainer}>
    <Text color="secondary" style={styles.inputLabel}>
      {label}
    </Text>
    {children || (
      <>
        {type === 'select' ? (
          <Select
            value={rest.value}
            onValueChange={rest.onValueChange}
            items={rest.items}
          />
        ) : (
          <StyledTextInput type={type} {...rest} />
        )}
      </>
    )}
  </View>
);

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
    paddingHorizontal: 10,
    flex: 1,
  },
  inputLabel: {
    marginBottom: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    marginBottom: 5,
    borderRadius: 4,
  },
  multilineInput: {height: 200, paddingTop: 10},
});
