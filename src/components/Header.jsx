import React from "react";
import styled from "styled-components";
import Picture from "../assets/image/Group 11 1.png";

const Portfolioheader = () => {
  return (
    <Header>
      <section className="container">
        <section className="section">
          <div className="head">
            <strong>Hey, I am Shamusideen</strong>
            <h2>
              I create <strong>product design</strong> and brand experience
            </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
              saepe hic natus molestias, nesciunt quam non veritatis consequatur
              temporibus, animi doloribus quod cumque necessitatibus earum
              voluptatem nostrum aspernatur nam ullam?
            </p>
            <button>Get In Touch</button>
          </div>

          <div className="img-picture">
            <img src={Picture} alt="" />
          </div>
        </section>
      </section>
    </Header>
  );
};

export default Portfolioheader;

let Header = styled.div`
  background-color: #f5fcff;
  padding: 50px 0;

  .section {
    padding-top: 30px;
  }

  .head {
    text-align: center;
  }
  h2 {
    margin-top: 15px;

    strong {
      color: #5e3bee;
    }
  }
  .head p {
    margin: 20px 0;
  }

  .head button {
    background-color: #5e3bee;
    color: white;
    border-radius: 5px;
    border: 1px;
    padding: 15px;
    cursor: pointer;
    margin: 25px 0;
  }
  .img-picture img {
    margin: 30px 0;
  }

  @media (min-width: 912px) {
    .section {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .head {
      text-align: left;
    }
  }
`;
