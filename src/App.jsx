import { Routes, Route } from "react-router";
import { LandingPage } from "./pages/Landing/LandingPage";
import { HomePage } from "./pages/Home/HomePage"
import { ItemPage } from "./pages/Item/ItemPage";
import { CheckoutPage } from "./pages/Checkout/CheckoutPage";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="item" element={<ItemPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
      </Routes>
     
     
     
    
    </>
  );
}

export default App;