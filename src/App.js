import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Homescreen from './pages/homescreen';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" Component={Homescreen}/>
        </Routes>
    </Router>
  );
}

export default App;
