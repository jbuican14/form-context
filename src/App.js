import { createTheme, ThemeProvider } from '@material-ui/core';
import './App.css';
import Navbar from './components/Navbar';

const theme = createTheme({})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
