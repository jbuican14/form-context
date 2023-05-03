import {createContext, useState} from 'react'

export const ThemeContext = createContext();

export function ThemeProvider(props) {

  // eslint-disable-next-line no-unused-vars
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
      {props.children}
    </ThemeContext.Provider>
  )
}