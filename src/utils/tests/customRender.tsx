import React, {ReactNode} from 'react';
import {render} from '@testing-library/react-native';

const AllTheProviders = ({children}: {children: ReactNode}) => {
  return <> {children}</>;
};

const customRender = (ui: any, options?: any) =>
  render(ui, {wrapper: AllTheProviders, ...options});

export * from '@testing-library/react-native';

export {customRender as render};
