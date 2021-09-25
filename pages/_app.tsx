import { GlobalStyles } from '../styles/global.styled';
import '../styles/icons.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
