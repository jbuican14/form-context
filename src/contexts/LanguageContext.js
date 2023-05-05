import { createContext, useState } from 'react';

export const LanguageContext = createContext()

export const LanguageProvider = ({children}) => {
  // eslint-disable-next-line no-unused-vars
  const [language, setLanguage] = useState('french');

  const changeLanguage = (e) => {
    setLanguage(e.target.value)
    
  }

  return (
    <LanguageContext.Provider value={{language, changeLanguage}}>{children}</LanguageContext.Provider>
  )
}

export const withLanguageContext = Component => props => (
  <LanguageContext.Consumer>
    {value => <Component languageContext={value} {...props} />}
  </LanguageContext.Consumer>
)