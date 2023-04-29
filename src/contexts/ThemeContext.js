import {createContext, useState} from 'react'

export const ThemeContext = createContext();

export function ThemeProvider({children}) {

  // eslint-disable-next-line no-unused-vars
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <ThemeContext.Provider value={{isDarkMode, tastValue: true}}>
      {children}
    </ThemeContext.Provider>
  )
}