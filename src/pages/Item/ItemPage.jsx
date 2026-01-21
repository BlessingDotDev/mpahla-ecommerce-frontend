import { Header } from "../../components/Header";
import { ItemPageContainer } from "./ItemPageContainer";
import { Footer } from "../../components/Footer";

export function ItemPage({ products }) {
  return (
    <>
      <Header /> 

      <ItemPageContainer products={products} />

      <Footer />
    </>
  );
}