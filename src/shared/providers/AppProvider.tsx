import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import QueryProvider from '@app/shared/providers/QueryProvider';

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider = ({children}: AppProviderProps) => (
  <QueryProvider>
    <SafeAreaProvider>{children}</SafeAreaProvider>
  </QueryProvider>
);

export default AppProvider;
