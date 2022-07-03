import { FpjsProvider } from '@fingerprintjs/fingerprintjs-pro-react';
import { createTheme, Fade, ThemeProvider } from '@mui/material';
import '../styles/globals.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f1f2f3',
    },
    secondary: {
      main: '#101113',
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
        <Component {...pageProps} />
      </ThemeProvider>
    </FpjsProvider>
  );
}

export default MyApp;
