import {AppRegistry} from 'react-native';

import 'assets/styles/base.css';
import 'assets/styles/web.css';

import AppWrapper from './App';

AppRegistry.registerComponent('web', () => AppWrapper);
AppRegistry.runApplication('web', {
  rootTag: document.getElementById('app'),
});
