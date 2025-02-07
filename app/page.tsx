import Image from "next/image";
import NavbarMain from "./components/navbarmain";
import Hero from "./components/hero";
import BrandDifference from "./components/featurs";
import ProductCards from "./components/newCeramics";
import PopularProducts from "./components/popularproducts";
import JoinTheClub from "./components/subscription";
import BrandStory from "./components/brandStory";
import Footer from "./components/footer";


export default function Home() {
  return (

    <main>

      <div>
        <NavbarMain />
        <Hero />
        <BrandDifference/>
        <ProductCards/>
        <PopularProducts/>
        <JoinTheClub/>
        <BrandStory/>
        <Footer/>

      </div>
    </main>
  );
}
