export const getItem = async key => {
  const values = await multiGet([key]);
  return values[0] ? values[0][1] : null;
};

export const setItem = async (key, value) => await multiSet([[key, value]]);

export const multiGet = async keys =>
  await new Promise(resolve => {
    chrome.storage.local.get(keys, object => {
      const values = Object.keys(object).map(key => [key, object[key]]);
      resolve(values);
    });
  });

export const multiSet = async values => {
  let object = {};
  values.forEach(value => (object[value[0]] = value[1]));
  return await new Promise(resolve =>
    chrome.storage.local.set(object, () => resolve()),
  );
};

export const clear = async () =>
  await new Promise(resolve => chrome.storage.local.clear(() => resolve()));

export default {getItem, setItem, multiGet, multiSet, clear};
