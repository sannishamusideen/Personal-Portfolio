import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Article from "../components/Article";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Article />
      <Footer />
    </div>
  );
};

export default Home;
