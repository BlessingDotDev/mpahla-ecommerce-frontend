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
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Item" element={<ItemPage />} />
        <Route path="/Checkout" element={<CheckoutPage />} />
      </Routes>
     
     
     
    
    </>
  );
}

export default App;