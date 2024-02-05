import React from "react";
import Product1 from "../assets/image/HTML5_logo.png";
import Product2 from "../assets/image/CSS3_logo_and_wordmark.svg-removebg-preview.png";
import Product3 from "../assets/image/JavaScript-logo.png";
import Product4 from "../assets/image/WordPress_blue_logo.svg-removebg-preview.png";

const Skills = [
  {
    name: "HTML",
    word: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
    imageSrc: Product1,
    alt: "",
  },
  {
    name: "CSS",
    word: "Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML",
    imageSrc: Product2,
    alt: "",
  },
  {
    name: "Javascript",
    word: "JavaScript often abbreviated as JS, is a programming language and core technology of the World Wide Web, alongside HTML and CSS.",
    imageSrc: Product3,
    alt: "",
  },
  {
    name: "WordPress",
    word: "WordPress is a web content management system. It was originally created as a tool to publish blogs.",
    imageSrc: Product4,
    alt: "",
  },
];

const Myskill = () => {
  return (
    <div className="flex-skills">
      {Skills.map((item, index) => (
        <section className="each-skill">
          <img className="image" src={item.imageSrc} alt="" />
          <h4>{item.name}</h4>
          <p>{item.word}</p>
        </section>
      ))}
    </div>
  );
};

export default Myskill;
