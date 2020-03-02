import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import {ThemeContext} from 'contexts/ThemeContext';

import {View} from 'components/Base';

const Select = ({value, onValueChange, items, ...rest}) => {
  const {palette} = useContext(ThemeContext);

  return (
    <View backgroundColor="input" style={styles.input}>
      <RNPickerSelect
        style={{
          inputIOS: {
            color: palette.primaryText,
          },
        }}
        placeholder={{}}
        value={value}
        onValueChange={onValueChange}
        items={items}
        {...rest}
      />
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    padding: 10,
    marginBottom: 5,
    borderRadius: 4,
  },
});
