import ItemListContainer from './components/Containers/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Cart from './components/Containers/Cart/Cart';
import './App.css';
import ItemDetailContainer from './components/Containers/ItemDetailContainer/ItemDetailContainer';
import CartContext from './components/Containers/Cart/context/CartContext';
import UserContext from './components/UserContext/UserContext';
import Form from "./components/Form/Form"
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

function App() {

  return (
    <div className="App">
      <UserContext>
        <CartContext>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/:category' element={<ItemListContainer />} />   
              <Route path='/category/:id' element={<ItemDetailContainer />} />
              <Route path='/cart/*' element={<Cart />} />
              <Route path="/form" element={<Form />}/>
              <Route path="/form/:id" element={<Form />}/>
              <Route path="/signUp" element={<SignUp />}/>
              <Route path="/signIn" element={<SignIn />}/>
            </Routes>
          </BrowserRouter>
        </CartContext>
      </UserContext>
    </div>
  );
}

export default App;

