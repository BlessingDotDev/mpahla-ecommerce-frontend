import { Header } from "../../conponents/Header";
import { Footer } from "../../conponents/Footer";

export function LandingPage() {
  return (
    <>
    <Header />

      <div className="main-container">
        <div className="background-image-container">
          <div className="background-overlay">
            <p>Livin' that everyday vibe</p>
            <a href="shop.html">
              <button className="js-shop-all-button">
                Shop All
              </button>
            </a>
          </div>
        </div>

        <div className="home-grid-layout js-home-grid-layout">
        </div>
      </div>

      <Footer />
    </>
  );
}