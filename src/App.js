import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Trending from './components/Trending';
import Random from './components/Random';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/trending" element={<Trending/>}></Route>
    <Route path="/random" element={<Random/>}></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
