import React from 'react';
import {StyleSheet} from 'react-native';

import {View, Text, Button} from 'components/Base';

const Home = ({navigation}) => (
  <View style={styles.container}>
    <Button title="Details" onPress={() => navigation.navigate('Details')} />
    <Button
      title="Modal"
      onPress={() => navigation.navigate('Modal', {from: 'Home'})}
    />
  </View>
);

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
