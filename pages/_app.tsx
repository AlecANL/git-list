import { GlobalStyles, ligthTheme, darkTheme } from '../styles/global.styled';
import '../styles/icons.css';
import { useDarkMode } from '../hooks/useDarkMode';
import { ThemeProvider } from 'styled-components';
import { AppContext } from '../context/app-context';

function MyApp({ Component, pageProps }) {
  const { theme, toggleTheme } = useDarkMode();

  const themeMode = theme === 'dark' ? darkTheme : ligthTheme;
  function handleThemeMode() {
    toggleTheme();
  }

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <AppContext>
          <GlobalStyles />
          <button onClick={handleThemeMode} className="btn-float">
            {theme === 'dark' ? '🌔' : '☀️'}
          </button>
          <Component {...pageProps} />
        </AppContext>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
