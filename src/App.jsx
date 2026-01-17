import { Routes, Route } from "react-router";
import { LandingPage } from "./pages/landing/LandingPage";
import { HomePage } from "./pages/Home/HomePage"
import { ItemPage } from "./pages/Item/ItemPage";
import { CheckoutPage } from "./pages/Checkout/CheckoutPage";
import { OrdersPage } from "./pages/orders/OrdersPage";
import { TrackingPage } from "./pages/Tracking/TrackingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="home" element={<HomePage />} />
      <Route path="item" element={<ItemPage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={< OrdersPage />} />
      <Route path="tracking" element={<TrackingPage />} />
    </Routes>
  );
}

export default App;