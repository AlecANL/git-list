import { GlobalStyles } from '../styles/global.styled';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
