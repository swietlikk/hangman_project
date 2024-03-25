import './App.css';
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Game from "./pages/Game";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";

function App() {
  return (
      <div className="App">
        <Router>
            <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
              <Route exact path='/category' element={<Category />} />
              <Route exact path='/game/:category' element={<Game />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
