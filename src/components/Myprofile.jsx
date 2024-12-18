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
    project: "Learning Management System",
    word: "A Learning Management System (LMS) is a software application or platform designed to facilitate the administration, delivery, tracking, and management of educational courses, training programs, or learning content. It play a vital role in modern education and training.",
    // view: "View In Dribble",
  },

  {
    img: JobListing,
    project: "Job Listing",
    word: "A job listing is a formal announcement created by employers or hiring managers to attract qualified candidates for available job positions within their organization.  Job listings play a crucial role in connecting employers with potential candidates and facilitating the recruitment process. ",
    // view: "View In Dribble",
  },

  {
    img: Advice_Generator,
    project: "Advice Generator",
    word: "An Advice Generator is a software tool or application designed to provide users with random pieces of advice, guidance, or wisdom on various topics. These generators are often created for entertainment, motivation, or as a quick source of inspiration.",
    // view: "View In Dribble",
  },
];

const Myprofile = () => {
  return (
    <Port id="portfolio">
      <section className="container">
        <section className="flex-top">
          <div>
            <strong>Recent Projects</strong>
            <h1>My Portfolio</h1>
          </div>
          <div className="btn_visit">
            <a href="https://vercel.com/engrloverboys-projects" target="_blank">
              <button>
                <img src={SocialIcon} alt="" />
                Visit My Vercel
              </button>
            </a>
          </div>
        </section>

        <section className="each-profile">
          {Profilelists.map((item, index) => (
            <div className="div">
              <div className="image">
                <img src={item.img} alt="" />
              </div>
              <div className="section">
                <h3>{item.project}</h3>
                <p>{item.word}</p>
                <div className="underline">
                  <a
                    href="https://vercel.com/engrloverboys-projects"
                    target="_blank"
                  >
                    <div className="view">
                      <h4>View In Vercel</h4>
                      <img src={vector} alt="" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>
        <div className="btn">
          <a href="https://github.com/sannishamusideen" target="_blank">
            <button className="bttn">View More Project</button>
          </a>
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
    cursor: pointer;
    img {
      width: 20px;
      padding-right: 10px;
    }
  }
  .div {
    margin: 40px 0;
    .image {
      width: 360px;
     height: 204px;
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

    a{
      text-decoration: none;
      color: black;
    }
  }
  .btn {
    display: flex;
    justify-content: end;
    margin-bottom: 30px;

    a{
      text-decoration: none;
    }
  }
  .bttn {
    height: 35px;
  }
  .btn_visit {
    a {
      text-decoration: none;
    }

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
