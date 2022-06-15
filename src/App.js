import './App.css';
import Navbar from './components/Navbar';
import StartPage from './components/StartPage';
import WhyPage from './components/WhyPage';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <StartPage />
      <WhyPage />
    </Router>
  );
}

export default App;
