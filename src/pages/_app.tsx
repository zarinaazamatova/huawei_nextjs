import React, { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '@/styles/theme';
import { Provider } from 'react-redux';
import { store } from '../store/store';
export const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
