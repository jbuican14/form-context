import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default function Top({children}) {
  const context = useContext(ThemeContext);
  const { isDarkMode } = context;

  const styles = {
    background: isDarkMode? "rgb(29 69 29)": "rgb(255, 255, 255)",
    height: "100vh"
  }
  return (
    <div style={styles}>{children}</div>
  )
}
