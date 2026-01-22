import { useState } from "react";
import { Header } from "../../components/Header";
import { HomePageGrid } from "./HomePageGrid";
import { Footer } from "../../components/Footer";
import { Swiper } from "../../components/Swiper";

export function HomePage({totalQuantity}) {
  const [products, setProducts] = useState([]);

  return (
    <>
      <Header totalQuantity={totalQuantity}/>

       <Swiper products={products} />

       <HomePageGrid products={products} setProducts={setProducts} />

      <Footer />
    </>
  );
}