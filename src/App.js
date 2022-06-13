import './App.css';
import Navbar from './components/Navbar';
import StartPage from './components/StartPage';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <StartPage />
    </Router>
  );
}

export default App;
