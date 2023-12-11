import React from "react";
import Product1 from "../assets/image/product-chain 1.svg";
import Product2 from "../assets/image/tag 1.svg";
import Product3 from "../assets/image/feather-pen 1.svg";
import Product4 from "../assets/image/feather-pen 1 (1).svg";

const Skills = [
  {
    name: "Strategy & Direction",
    word: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    imageSrc: Product1,
    alt: "",
  },
  {
    name: "Branding & Logo",
    word: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    imageSrc: Product2,
    alt: "",
  },
  {
    name: "UI & UX Design",
    word: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    imageSrc: Product3,
    alt: "",
  },
  {
    name: "Webflow Development",
    word: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
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
