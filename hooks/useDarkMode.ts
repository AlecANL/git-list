import React from 'react';

export function useDarkMode() {
  const [theme, setTheme] = React.useState<string>('dark');

  function setMode(mode: string) {
    localStorage.setItem('theme', mode);
    setTheme(mode);
  }

  function toggleTheme() {
    theme === 'dark' ? setMode('ligth') : setMode('dark');
  }

  React.useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    currentTheme ? setTheme(currentTheme) : setMode('dark');
  }, []);

  return {
    toggleTheme,
    theme,
  };
}
