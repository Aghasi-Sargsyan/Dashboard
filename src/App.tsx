import React from 'react';
import AppRouter from 'features/routing/components/AppRouter';
import useInitUser from 'features/authentication/hooks/useInitUser';

const App = () => {
  useInitUser();

  return <AppRouter />;
};

export default App;
