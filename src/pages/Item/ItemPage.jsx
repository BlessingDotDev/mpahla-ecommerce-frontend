import { Header } from "../../components/Header";
import { ItemPageContainer } from "./ItemPageContainer";
import { Footer } from "../../components/Footer";

export function ItemPage({ totalQuantity, loadCart }) {
  return (
    <>
      <Header totalQuantity={totalQuantity} /> 

      <ItemPageContainer loadCart={loadCart} />

      <Footer />
    </>
  );
}