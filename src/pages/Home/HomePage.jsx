import axios from "axios";
import { useEffect, useState } from "react"; 
import { Header } from "../../components/Header";
import { HomePageGrid } from "./HomePageGrid";
import { Footer } from "../../components/Footer";
import { Swiper } from "../../components/Swiper";

export function HomePage({products, setProducts}) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCartData = async () => {
      const response = await axios.get('http://localhost:5000/api/cart');
      setCart(response.data)
    }

    fetchCartData();
  }, []);

  return (
    <>
      <Header cart={cart}/>

       <Swiper products={products} />

       <HomePageGrid products={products} setProducts={setProducts} />

      <Footer />
    </>
  );
}