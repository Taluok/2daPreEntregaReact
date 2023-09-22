import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/itemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./context/CartContext";
import Checkout from "./components/Checkout/Checkout"

function App() {

  return (
    
    <div>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* Aca se muestran todos los productos */}
          <Route path="/" element={<ItemListContainer />} />
          {/* Aca se muestran los productos por categorias */}
          <Route path="/category/:categoryId" element={<ItemListContainer />} />


          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>

      </CartProvider>
    </div>

  );
}

export default App;
