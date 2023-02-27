import React from 'react';
import { useLazyGetUserQuery } from 'features/authentication/services';

const useInitUser = () => {
  const [getUser] = useLazyGetUserQuery();

  React.useEffect(() => {
    getUser();
  }, []);
};

export default useInitUser;
