import { FpjsProvider } from '@fingerprintjs/fingerprintjs-pro-react';
import { createTheme, Fade, ThemeProvider } from '@mui/material';
import Head from 'next/head';
import consoleHandler from '../lib/consoleHandler';
import '../styles/globals.css';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      mode: 'dark',
      main: '#ff8150',
    },
    secondary: {
      mode: 'dark',
      main: '#ffffff',
    },
    succes: {
      dark: '#ffffff',
    },
  },
});

function MyApp({ Component, pageProps }) {
  setInterval(() => {
    consoleHandler();
  }, 2000);

  return (
      <ThemeProvider theme={theme}>
        <Head>
          <title>ProjectAlpha</title>
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
      
  );
}

export default MyApp;
