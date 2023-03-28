
import './App.css';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom'
import Cart from './components/Cart';
import Details from './components/Details';

function App() {
  return (
    <Routes>
      <Route path="" element={<Home />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path='/details/:id' element={<Details />}></Route>
    </Routes>
  );
}

export default App;
