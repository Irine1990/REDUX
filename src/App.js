
import './App.css';
import NavBar from './component/NavBar'
import Home from './component/Home'
import { Routes, Route } from 'react-router-dom';
import CartDetails from './component/CartDetails';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartDetails />} />

      </Routes>
      <Home />
    </div>
  );
}

export default App;
