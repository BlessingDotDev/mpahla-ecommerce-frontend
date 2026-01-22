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

function App() {
  const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
  
    useEffect(() => {
      const fetchCartData = async () => {
        const response = await axios.get('http://localhost:5000/api/cart');
        setCart(response.data);
        console.log(response.data)
      }
  
      fetchCartData();
    }, []);
  

  return (
    <Routes>
      <Route 
        path="/" 
        element={<LandingPage 
          cart={ cart } />} />
      
      <Route 
        path="home/:name?" 
        element={<HomePage 
          products={products} 
          setProducts={setProducts}/>} 
          cart={cart}
      />
      <Route 
        path="item/:id" 
        element={<ItemPage 
          products={products} 
            setProducts={setProducts}/>} />

      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={< OrdersPage />} />
      <Route path="tracking" element={<TrackingPage />} />
      <Route path="#" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;