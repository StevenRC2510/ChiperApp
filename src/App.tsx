import React from 'react';

import AppProvider from '@app/shared/providers/AppProvider';

import Layout from '@app/views/Layout';

const App = () => (
  <AppProvider>
    <Layout />
  </AppProvider>
);

export default App;
