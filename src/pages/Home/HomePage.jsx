import { Header } from "../../components/Header";
import { HomePageGrid } from "./HomePageGrid";
import { Footer } from "../../components/Footer";
import { Swiper } from "../../components/Swiper";

export function HomePage({products, setProducts, cart}) {

  return (
    <>
      <Header cart={cart}/>

       <Swiper products={products} />

       <HomePageGrid products={products} setProducts={setProducts} />

      <Footer />
    </>
  );
}