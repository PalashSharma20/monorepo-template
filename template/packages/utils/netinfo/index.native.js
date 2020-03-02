import NetInfo from '@react-native-community/netinfo';

export const fetch = async () => await NetInfo.fetch();

export const addEventListener = callback =>
  NetInfo.addEventListener(args => callback(args));

export default {fetch, addEventListener};
