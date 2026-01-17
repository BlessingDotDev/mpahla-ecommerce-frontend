import { Header } from "../../conponents/Header";
import { Footer } from "../../conponents/Footer";
import "../../shared-styles/between-shop-and-item.css";
import "./HomePage.css";

export function HomePage() {
  return (
    <>
      <Header />

      <div className="main-container">
        <div className="grid-layout js-grid-layout">
        </div>
      </div>

      <Footer />
    </>
  );
}