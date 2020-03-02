import DeviceInfo from 'react-native-device-info';

export default DeviceInfo.hasNotch() ? 105 : 80;
