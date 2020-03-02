import React from 'react';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const ScrollView = ({children, ...rest}) => (
  <KeyboardAwareScrollView {...rest}>{children}</KeyboardAwareScrollView>
);

export default ScrollView;
