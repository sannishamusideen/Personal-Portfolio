import React from "react";
import styled from "styled-components";
import Picture from "../assets/image/Group 11 1.png";
import Picturelom from "../assets/image/Picturelom-removebg-preview.png";

const Portfolioheader = () => {
  return (
    <Header>
      <section className="container">
        <section className="section">
          <div className="head">
            <strong>Hey, I am Shamusideen</strong>
            <h1>
              I'm a <strong>Front End Developer</strong> and{" "}
              <strong>WordPress Expert</strong>
            </h1>
            <p>
              I specialize in HTML, CCS and Javascript programming languages and
              have extensive experience in developing software for large-scale
              applications and also a WordPress Expert.
            </p>
            {/* <button>Get In Touch</button> */}

            <button
              onClick={() => (window.location = "mailto:samsonanu@yahoo.com")}
            >
              Get In Touch
            </button>
          </div>

          <div className="img-picture">
            {/* <img src={Picture} alt="" /> */}

            <div className="frame">
              <img src={Picturelom} alt="" />
            </div>
          </div>
        </section>
      </section>
    </Header>
  );
};

export default Portfolioheader;

let Header = styled.div`
  background-color: #f5fcff;
  padding: 120px 0;

  .section {
    padding-top: 50px;
  }

  .head {
    text-align: center;
    padding-top: 30px;
  }
  h1 {
    margin-top: 15px;
    font-size: 40px;

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

  .frame {
    width: 500px;
    height: 320px;
    background-color: rgb(206, 224, 234);
    border-radius: 40px;
    position: relative;

    img {
      width: 400px;
      position: absolute;
      bottom: -29px;
      left: 40px;
    }
  }
@media (min-width: 1150px) {
    .section {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .head {
      text-align: left;
    }

    .img-picture {
      width: 42%;
    }
    .head {
      width: 45%;
    }
  }

  @media (max-width: 1149px) {
    .img-picture {
      display: flex;
      justify-content: center;
      margin-top: 100px;
    }
  }

  @media (max-width: 500px) {
    .frame {
      img {
        left: 10px;
      }
    }
  }

  @media (max-width: 400px) {
    .frame {
      img {
        left: -46px;
      }
    }
  }
`;
