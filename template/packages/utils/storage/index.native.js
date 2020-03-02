import AsyncStorage from '@react-native-community/async-storage';

export const getItem = async key => await AsyncStorage.getItem(key);

export const setItem = async (key, value) =>
  await AsyncStorage.setItem(key, value);

export const multiGet = async keys => await AsyncStorage.multiGet(keys);

export const multiSet = async values => await AsyncStorage.multiSet(values);

export const clear = async () => await AsyncStorage.clear();

export default {getItem, setItem, multiGet, multiSet, clear};
