export const getItem = async key =>
  await new Promise(resolve => resolve(localStorage.getItem(key)));

export const setItem = async (key, value) =>
  await new Promise(resolve => resolve(localStorage.setItem(key, value)));

export const multiGet = async keys => {
  return await new Promise(resolve =>
    resolve(keys.map(key => [key, localStorage.getItem(key)])),
  );
};

export const multiSet = async values => {
  return await new Promise(resolve => {
    values.forEach(pair => localStorage.setItem(pair[0], pair[1]));
    resolve();
  });
};

export const clear = async () =>
  await new Promise(resolve => {
    localStorage.clear();
    resolve();
  });

export default {getItem, setItem, multiGet, multiSet, clear};
