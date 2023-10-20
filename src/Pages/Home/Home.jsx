import Banner from "../../Shared/Banner/Banner";
import About from "../../components/About/About";
import Brands from "../../components/Brands/Brands";
import ClientTestimonial from "../../components/ClientTestimonial/ClientTestimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <Brands></Brands>
      <About />
      <ClientTestimonial />
    </div>
  );
};

export default Home;
