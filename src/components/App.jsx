import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../theme';
import { GlobalStyles } from '../global';
import Toggle from './Toggle';
import { useDarkMode } from '../useDarkMode';
import Clock from './Clock';

function App() {

  const [theme, setTheme, componentMounted] = useDarkMode();

  console.log(componentMounted)

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  if(!componentMounted) {
    return <div />
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Clock />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <h1>It's a {theme} theme!</h1>
        <footer><span>Credits:</span>
          <small><b>Sun</b> icon made by <a href="https://www.flaticon.com/authors/smalllikeart">smalllikeart</a> from <a href="https://www.flaticon.com">www.flaticon.com</a></small>
          <small><b>Moon</b> icon made by <a href="https://www.freepik.com/home">Freepik</a> from <a href="https://www.flaticon.com">www.flaticon.com</a></small></footer>
      </>
    </ThemeProvider>
  )
}

export default App;
