import React from 'react';

import {ScrollView} from 'react-native';

export default ({children, ...rest}) => (
  <ScrollView {...rest}>{children}</ScrollView>
);
