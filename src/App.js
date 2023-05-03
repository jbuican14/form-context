import { createTheme, ThemeProvider } from '@material-ui/core';
import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Top from './components/Top';
import { ThemeProvider as ThemeContextProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';

const theme = createTheme({})

function App() {
  return (
    <ThemeContextProvider>
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <Top>
          <Navbar />
          <Form />
        </Top>
      </LanguageProvider>
    </ThemeProvider>
    </ThemeContextProvider>
  );
}

export default App;
