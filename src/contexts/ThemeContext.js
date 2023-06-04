import {createContext} from 'react';
import useToggeState from '../hooks/useToggleState';

export const ThemeContext = createContext();

export function ThemeProvider(props) {

  // eslint-disable-next-line no-unused-vars
  const [isDarkMode, toggleTheme] = useToggeState(false);

  return (
    <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
      {props.children}
    </ThemeContext.Provider>
  )
}
