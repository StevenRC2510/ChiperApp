import React, {ReactNode} from 'react';
import {QueryClient, QueryClientProvider, setLogger} from 'react-query';

type QueryProviderType = {
  children: ReactNode;
  shouldRetry?: boolean;
};

const QueryProvider = ({children, shouldRetry}: QueryProviderType) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {retry: shouldRetry ?? true, refetchOnWindowFocus: false},
    },
  });

  if (shouldRetry === false) {
    setLogger({
      log: console.log,
      warn: console.warn,
      error: () => {},
    });
  }

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
