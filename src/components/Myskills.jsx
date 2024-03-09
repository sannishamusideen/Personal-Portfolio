import React from "react";
import styled from "styled-components";
import Product1 from "../assets/image/HTML5_logo.png";
import Product2 from "../assets/image/CSS3_logo_and_wordmark.svg-removebg-preview.png";
import Product3 from "../assets/image/JavaScript-logo.png";
import Product4 from "../assets/image/WordPress_blue_logo.svg-removebg-preview.png";
import Product5 from "../assets/image/pngwing.com.png";
import Product6 from "../assets/image/pngwing.com (1).png";
import Product7 from "../assets/image/nextjs.svg";
import Product8 from "../assets/image/vercel.svg";
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
  {
    name: "Figma",
    word: "Figma is a collaborative web application for interface design, with additional offline features enabled by desktop applications for macOS and Windows.",
    imageSrc: Product5,
    alt: "",
  },
  {
    name: "ReactJS",
    word: "React is a free and open-source front-end JavaScript library for building user interfaces based on components. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.",
    imageSrc: Product6,
    alt: "",
  },
  {
    name: "NextJS",
    word: "Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.",
    imageSrc: Product7,
    alt: "",
  },
  {
    name: "Vercel",
    word: "Vercel Inc., formerly ZEIT is an American cloud platform as a service company. The company maintains the Next.js web development framework.",
    imageSrc: Product8,
    alt: "",
  },
];

const Myskill = () => {
  return (
    <Expertise>
      <div className="flex-skills">
        {Skills.map((item, index) => (
          <section className="each-skill">
            <img className="image" src={item.imageSrc} alt="" />
            <h4>{item.name}</h4>
            <p>{item.word}</p>
          </section>
        ))}
      </div>
    </Expertise>
  );
};

export default Myskill;

let Expertise = styled.div`
  .each-skill:hover {
    border-bottom: 4px solid #5e3bee;
  }
`;
