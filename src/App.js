import { createTheme, ThemeProvider } from '@material-ui/core';
import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Top from './components/Top';

const theme = createTheme({})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Top>
      <Navbar />
      <Form />
    </Top>
    </ThemeProvider>
  );
}

export default App;
