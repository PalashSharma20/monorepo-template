import React from 'react';
import {StyleSheet} from 'react-native';

import {View, Text} from 'components/Base';

const Home = ({route}) => {
  const {from} = route.params;
  return (
    <View style={styles.container}>
      <Text>Modal accessed from {from}</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
