export const fetch = async () =>
  await new Promise(resolve => resolve({isConnected: navigator.onLine}));

export const addEventListener = callback => {
  const updateOnlineStatus = () => callback({isConnected: navigator.onLine});

  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);

  return () => {
    window.removeEventListener('online', updateOnlineStatus);
    window.removeEventListener('offline', updateOnlineStatus);
  };
};

export default {fetch, addEventListener};
