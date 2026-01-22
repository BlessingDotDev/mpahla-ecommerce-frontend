import axios from "axios";
import { useEffect, useState } from "react"; 
import { Routes, Route } from "react-router";
import { LandingPage } from "./pages/landing/LandingPage";
import { HomePage } from "./pages/Home/HomePage"
import { ItemPage } from "./pages/Item/ItemPage";
import { CheckoutPage } from "./pages/Checkout/CheckoutPage";
import { OrdersPage } from "./pages/orders/OrdersPage";
import { TrackingPage } from "./pages/Tracking/TrackingPage";
import { NotFoundPage } from "./pages/Notfound/NotFoundPage.jsx";
import { getTotalQuantity } from "./utils/getTotalQuantity.js";

function App() {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  
    useEffect(() => {
      const fetchCartData = async () => {
        const response = await axios.get('http://localhost:5000/api/cart');
        setCart(response.data);
      }
  
      fetchCartData();
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
          cart={cart}
          totalQuantity={totalQuantity}/>} />

      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={< OrdersPage />} />
      <Route path="tracking" element={<TrackingPage />} />
      <Route path="#" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;