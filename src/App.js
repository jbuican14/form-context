import { createTheme, ThemeProvider } from '@material-ui/core';
import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';

const theme = createTheme({})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Form />
    </ThemeProvider>
  );
}

export default App;
