import { Header } from "../../components/Header";
import { HomePageGrid } from "./HomePageGrid";
import { Footer } from "../../components/Footer";
import "../../shared-styles/between-shop-and-item.css";
import "./HomePage.css";

export function HomePage() {
  return (
    <>
      <Header />

      <div className="main-container">
       <HomePageGrid />
      </div>

      <Footer />
    </>
  );
}