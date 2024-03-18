import React from "react";
import styled from "styled-components";
import SocialIcon from "../assets/image/Social icon.svg";
import LMS from "../assets/image/Screenshot 2024-02-29 at 12.58.01 PM.png";
import JobListing from "../assets/image/Screenshot 2024-03-13 at 4.02.38 PM.png";
import Advice_Generator from "../assets/image/Screenshot 2024-03-13 at 4.05.17 PM.png";
import vector from "../assets/image/Vector (2).svg";

const Profilelists = [
  {
    img: LMS,
    project: "Ahuse",
    word: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis hic harum maxime possimus delectus ducimus porro incidunt est, fugiat voluptatum sint exercitationem omnis eligendi optio reprehenderit, excepturi ut ratione eos!",
    // view: "View In Dribble",
  },

  {
    img: JobListing,
    project: "App Dashboard",
    word: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis hic harum maxime possimus delectus ducimus porro incidunt est, fugiat voluptatum sint exercitationem omnis eligendi optio reprehenderit, excepturi ut ratione eos!",
    // view: "View In Dribble",
  },

  {
    img: Advice_Generator,
    project: "Easy Rent",
    word: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis hic harum maxime possimus delectus ducimus porro incidunt est, fugiat voluptatum sint exercitationem omnis eligendi optio reprehenderit, excepturi ut ratione eos!",
    // view: "View In Dribble",
  },
];

const Myprofile = () => {
  return (
    <Port>
      <section className="container">
        <section className="flex-top">
          <div>
            <strong>Recent Projects</strong>
            <h1>My Portfolio</h1>
          </div>
          <button>
            <img src={SocialIcon} alt="" />
            Visit My Dribble
          </button>
        </section>

        <section className="each-profile">
          {Profilelists.map((item, index) => (
            <div className="div">
              <img src={item.img} alt="" />
              <div className="section">
                <h3>{item.project}</h3>
                <p>{item.word}</p>
                <div className="underline">
                  <div className="view">
                    <h4>View In Dribble</h4>
                    <img src={vector} alt="" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
        <div className="btn">
          <button className="bttn">View More Project</button>
        </div>
      </section>
    </Port>
  );
};

export default Myprofile;

let Port = styled.div`
  .flex-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h1 {
    font-size: 40px;
    margin: 20px 0;
  }

  button {
    display: flex;
    align-items: center;
    background: #e62872;
    border-radius: 10px;
    padding: 10px;
    height: 40px;
    color: white;
    border: 1px;
    img {
      width: 20px;
      padding-right: 10px;
    }
  }
  .div {
    margin: 40px 0;
    img {
        width: 360px;
        height: 220px;
    }
  }
  .section {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 20px;
    margin-top: -10px;
  }
  img {
    border-radius: 10px;
  }
  h3 {
    padding: 20px 0;
  }
  .view {
    display: flex;
    margin: 20px 0 5px 0;
  }
  .view img {
    width: 20px;
    margin-left: 10px;
  }
  .underline {
    border-bottom: 1px solid blue;
    display: inline-flex;
  }
  .btn {
    display: flex;
    justify-content: end;
    margin-bottom: 30px;
  }
  .bttn {
    height: 35px;
  }

   @media (min-width: 700px) {
    .each-profile {
      display: flex;
      justify-content: space-between;
    }
    .div {
      width: 30%;
    }
`;
