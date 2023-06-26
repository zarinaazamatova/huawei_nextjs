/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import type { AppProps } from 'next/app';
import defaultTheme from '@/styles/theme';
import { ThemeProvider } from 'styled-components';
import  GlobalStyles  from '../styles/GlobalStyles';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles/>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
