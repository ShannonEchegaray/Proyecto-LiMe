import ItemListContainer from './components/Containers/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Cart from './components/Containers/Cart/Cart';
import './App.css';
import ItemDetailContainer from './components/Containers/ItemDetailContainer/ItemDetailContainer';
import CartContext from './components/Containers/Cart/context/CartContext';

function App() {
  return (
    <div className="App">
      <CartContext>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/:category' element={<ItemListContainer />} />   
            <Route path='/category/:id' element={<ItemDetailContainer />} />
            <Route path='/cart/*' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContext>
    </div>
  );
}

export default App;

