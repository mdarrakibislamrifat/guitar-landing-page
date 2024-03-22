import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import ProductSection from "../components/ProductSection/ProductSection";
import WhyChooseUS from "../components/WhyChooseUs/WhyChooseUS";
import TrendingProducts from "../components/TrendingProducts/TrendingProducts";
import FAQ from "../components/FAQ/FAQ";
import PriceDeals from "../components/PriceDeals/PriceDeals";

const Main = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <Navbar />
      <Banner />
      <ProductSection />
      <TrendingProducts />
      <WhyChooseUS />
      <PriceDeals />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Main;
