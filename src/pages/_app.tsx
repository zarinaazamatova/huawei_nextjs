import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '@/styles/theme';
import { Provider } from 'react-redux';
import GlobalStyles from '../styles/GlobalStyles';

import { store } from '../store/store';

export const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
