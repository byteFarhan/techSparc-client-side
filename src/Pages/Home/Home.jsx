// import { Rating } from "@material-tailwind/react";
import Banner from "../../Shared/Banner/Banner";
import About from "../../components/About/About";
import Brands from "../../components/Brands/Brands";
import ClientTestimonial from "../../components/ClientTestimonial/ClientTestimonial";
import useAuth from "../../hooks/useAuth";
// import DefaultRating from "../../components/DefaultRating/DefaultRating";

const Home = () => {
  const { darkMode } = useAuth();
  return (
    <div className={`${darkMode ? "bg-slate-800" : ""}`}>
      <Banner />
      <Brands></Brands>
      <About />
      {/* <DefaultRating /> */}
      {/* <Rating value={4.5} readonly /> */}
      <ClientTestimonial />
    </div>
  );
};

export default Home;
