import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';

function App() {
  const [showLogin, setShowLLogin] = useState(false);

  return (
    <>
      {/* Login Popup */}
      {showLogin && <Login setShowLLogin={setShowLLogin} />}

      <div className='app'>
        <Navbar setShowLLogin={setShowLLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
