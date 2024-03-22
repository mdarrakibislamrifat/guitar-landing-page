import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import ProductSection from "../components/ProductSection/ProductSection";
import WhyChooseUS from "../components/WhyChooseUs/WhyChooseUS";
import TrendingProducts from "../components/TrendingProducts/TrendingProducts";

const Main = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <Navbar />
      <Banner />
      <ProductSection />
      <TrendingProducts />
      <WhyChooseUS />
      <Footer />
    </div>
  );
};

export default Main;
