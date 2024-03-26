import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Homescreen from './pages/homescreen';
import PerkGen from './pages/perkgen';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" Component={Homescreen}/>
          <Route path="/random-perk-generator" Component={PerkGen} />
        </Routes>
    </Router>
  );
}

export default App;
