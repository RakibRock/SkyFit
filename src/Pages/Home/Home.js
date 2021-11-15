import React from "react";
import Footer from "../Shared/Footer/Footer";
import Extra1 from "./Extra1/Extra1";
import HeroSection from "./HeroSection/HeroSection";
import Navigation from "./Navigation/Navigation";
import Products from "./Products/Products";
import Reviews from "./Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <HeroSection></HeroSection>
      <Products></Products>
      <Extra1></Extra1>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
