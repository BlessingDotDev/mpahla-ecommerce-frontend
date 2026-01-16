import { LandingPage } from "./pages/Landing/LandingPage";
import { HomePage } from "./pages/Home/HomePage"
import { ItemPage } from "./pages/Item/ItemPage";
import { CheckoutPage } from "./pages/Checkout/CheckoutPage";

function App() {
  return (
    <>
      <LandingPage />
      <HomePage />
      <ItemPage />
      <CheckoutPage />
    </>
  );
}

export default App;