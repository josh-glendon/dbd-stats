import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Homescreen from './pages/homescreen';
import PerkGen from './pages/perkgen';
import NavBar from './components/navbar';
import PlayerStats from './pages/playerstats';

function App() {
  return (
    <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" Component={Homescreen}/>
          <Route path="/random-perk-generator" Component={PerkGen} />
          <Route path="/playerstats/:steamID" Component={PlayerStats}/>
        </Routes>
    </Router>
  );
}

export default App;
