
import Home from './components/home';
import { Routes, Route } from 'react-router-dom'
import Details from './components/details';
import Order from './components/order';
import Contact from './components/contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path='/details/:id' element={<Details />}></Route>
      <Route path='/order' element={<Order />}></Route>
      <Route path='/contact' element={<Contact />}></Route>


    </Routes>
  );
}

export default App;
