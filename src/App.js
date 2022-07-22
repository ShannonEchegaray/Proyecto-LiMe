import './App.css';
import ItemListContainer from './components/Containers/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Cart from './components/Cart';
import ItemDetailContainer from './components/Containers/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/:category' element={<ItemListContainer />} />   
          <Route path='/category/id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
