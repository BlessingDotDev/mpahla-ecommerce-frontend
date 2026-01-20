import { Header } from "../../components/Header";
import { HomePageGrid } from "./HomePageGrid";
import { Footer } from "../../components/Footer";

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