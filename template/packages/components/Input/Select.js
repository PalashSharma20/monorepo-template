import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';

import {ThemeContext} from 'contexts/ThemeContext';

import {View} from 'components/Base';

const Select = ({value, onValueChange, items}) => {
  const {palette} = useContext(ThemeContext);

  return (
    <View backgroundColor="input" style={styles.input}>
      <select
        style={{
          color: palette.primaryText,
          fontSize: 14,
          backgroundColor: 'transparent',
          border: 'none',
        }}
        value={value}
        onChange={e => onValueChange(e.target.value)}>
        {items.map((item, i) => (
          <option key={i} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
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
  select: {
    fontSize: 14,
  },
});
