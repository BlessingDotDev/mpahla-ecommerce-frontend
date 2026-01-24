import axios from "axios";
import { useEffect, useState } from "react"; 
import { Routes, Route } from "react-router";
import { LandingPage } from "./pages/landing/LandingPage";
import { HomePage } from "./pages/Home/HomePage"
import { ItemPage } from "./pages/Item/ItemPage";
import { CheckoutPage } from "./pages/Checkout/CheckoutPage";
import { OrdersPage } from "./pages/Orders/OrdersPage.jsx";
import { TrackingPage } from "./pages/Tracking/TrackingPage";
import { NotFoundPage } from "./pages/Notfound/NotFoundPage.jsx";
import { getTotalQuantity } from "./utils/getTotalQuantity.js";

function App() {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const loadCart = async () => {
        const response = await axios.get('http://localhost:5000/api/cart');
        setCart(response.data);
      }
  
    useEffect(() => {
      loadCart();
    }, []);
    
    useEffect(() => {
      const totalQuantity =  getTotalQuantity(cart);
      setTotalQuantity(totalQuantity);
      
    }, [cart]);
    
  

  return (
    <Routes>
      <Route 
        path="/" 
        element={<LandingPage 
          totalQuantity={ totalQuantity } />} />
      
      <Route 
        path="home/:name?" 
        element={<HomePage />} 
          totalQuantity={totalQuantity}
      />
      <Route 
        path="item/:id" 
        element={<ItemPage 
          totalQuantity={totalQuantity}
          loadCart={loadCart}/>} 
      />

      <Route 
        path="checkout" 
        element={<CheckoutPage 
          cart={cart} 
          loadCart={loadCart}
          totalQuantity={totalQuantity} />} 
      />
      <Route 
        path="orders" 
        element={< OrdersPage 
          cart={cart} 
          loadCart={loadCart}/>} 
      />

      <Route path="tracking/:orderid?/:productid?" element={<TrackingPage cart={cart} />} />
      <Route path="#" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;