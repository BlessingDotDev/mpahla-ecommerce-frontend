import { Header } from "../../components/Header";
import { HomePageGrid } from "./HomePageGrid";
import { Footer } from "../../components/Footer";

export function HomePage({products, setProducts}) {
  return (
    <>
      <Header />

       <HomePageGrid products={products} setProducts={setProducts} />

      <Footer />
    </>
  );
}