import { ThemeProvider } from '@material-ui/core';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
