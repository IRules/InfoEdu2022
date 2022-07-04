import { FpjsProvider } from '@fingerprintjs/fingerprintjs-pro-react';
import { createTheme, Fade, ThemeProvider } from '@mui/material';
import '../styles/globals.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
<<<<<<< HEAD
=======
      grey: {
        900: '#FFFFFF',
        secondary: '#FFFFFF',
      },
      disabled: '#FFFFFF',
>>>>>>> 3817f7b5f25f278cf274f343c93b709a23d24d49
    },
    secondary: {
      main: '#ffffff',
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
