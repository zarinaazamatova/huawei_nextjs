
import type { AppProps } from 'next/app';
import defaultTheme from '@/styles/theme';
import { ThemeProvider } from 'styled-components';


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
  <ThemeProvider theme={defaultTheme}>
  <Component {...pageProps} />
  </ThemeProvider>
  </>
  )
}