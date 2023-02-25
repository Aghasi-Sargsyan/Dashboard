import { useLazyGetUserQuery } from 'features/authentication/services/authApi';
import React from 'react';

const useInitUser = () => {
  const [getUser] = useLazyGetUserQuery();

  React.useEffect(() => {
    getUser();
  }, []);
};

export default useInitUser;
