import React, {useState, useEffect} from 'react';

import NetInfo from 'utils/netinfo';

const Online = ({children}) => {
  const [visible, setVisible] = useState(true);

  NetInfo.fetch().then(({isConnected}) => setVisible(isConnected));

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(({isConnected}) =>
      setVisible(isConnected),
    );

    return unsubscribe;
  });

  return visible ? children : <></>;
};

export default Online;
