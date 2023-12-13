import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Article from "../components/Article";
import About from "../components/About";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Article />
      <About />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
