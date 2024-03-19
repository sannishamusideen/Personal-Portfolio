import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Article from "../components/Article";
import About from "../components/About";
import AllTestimonial from "../components/AllTestimonial";
import Contact from "../components/Contact";
import Myprofile from "../components/Myprofile";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Article />
      <About />
      <Myprofile />
      <AllTestimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
