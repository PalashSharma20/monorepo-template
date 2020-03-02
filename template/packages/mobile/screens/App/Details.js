import React from 'react';
import {StyleSheet} from 'react-native';

import {View, Text, Button} from 'components/Base';

const Details = ({navigation}) => (
  <View style={styles.container}>
    <Text>Details</Text>
    <Button
      title="Modal"
      onPress={() => navigation.navigate('Modal', {from: 'Details'})}
    />
  </View>
);

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
