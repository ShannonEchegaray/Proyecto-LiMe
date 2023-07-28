import ItemListContainer from "./pages/item-list/item-list";
import NavBar from "./components/nav-bar/nav-bar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Cart from "./pages/cart/cart";
import "./App.css";
import ItemDetailContainer from "./pages/item-detail/item-detail";
import CartContext from "./components/cart/context/cart-context";
import UserContext from "./components/context/user-context";
import Form from "./components/form/purchase-form";
import SignUp from "./pages/sign-up/sign-up";
import SignIn from "./pages/sign-in/sign-in";

function App() {
  return (
    <div className="App">
      <UserContext>
        <CartContext>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/:category" element={<ItemListContainer />} />
              <Route path="/category/:id" element={<ItemDetailContainer />} />
              <Route path="/cart/*" element={<Cart />} />
              <Route path="/form" element={<Form />} />
              <Route path="/form/:id" element={<Form />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/signIn" element={<SignIn />} />
            </Routes>
          </BrowserRouter>
        </CartContext>
      </UserContext>
    </div>
  );
}

export default App;
