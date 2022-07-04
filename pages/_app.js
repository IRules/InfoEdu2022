import { FpjsProvider } from '@fingerprintjs/fingerprintjs-pro-react';
import { createTheme, Fade, ThemeProvider } from '@mui/material';
import Head from 'next/head';
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
  return (
    <FpjsProvider
      loadOptions={{
        apiKey: 'OuLlP8IbQByBH1aHzwet',
        endpoint: 'https://verifier.tomaind.com',
        region: 'eu',
      }}
    >
      <ThemeProvider theme={theme}>
        <Head>
          <title>ProjectAlpha</title>
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </FpjsProvider>
  );
}

export default MyApp;
