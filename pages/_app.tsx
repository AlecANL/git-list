import { ThemeProvider } from 'styled-components';
import { RiMoonClearLine } from 'react-icons/ri';
import { HiSun } from 'react-icons/hi';
import { GlobalStyles, ligthTheme, darkTheme } from '../styles/global.styled';
import { useDarkMode } from '@customHooks/useDarkMode';
import { AppContext } from '@context/app-context';
import '../styles/icons.css';
import '../styles/colors.css';

function MyApp({ Component, pageProps }) {
  const { theme, toggleTheme } = useDarkMode();

  const themeMode = theme === 'dark' ? darkTheme : ligthTheme;

  return (
    <>
      <AppContext>
        <ThemeProvider theme={themeMode}>
          <GlobalStyles />
          <button
            onClick={toggleTheme}
            className="btn-float"
            title="switch dark mode"
          >
            {theme === 'dark' ? <RiMoonClearLine /> : <HiSun />}
          </button>
          <Component {...pageProps} />
        </ThemeProvider>
      </AppContext>
    </>
  );
}

export default MyApp;
