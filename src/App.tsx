import React from 'react';
import { AppRouter } from 'features/routing/components';
import { useInitUser } from 'features/authentication/hooks';

const App = () => {
  useInitUser();

  return <AppRouter />;
};

export default App;
