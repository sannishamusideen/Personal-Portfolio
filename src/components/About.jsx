import React from "react";
import styled from "styled-components";
import Image from "../assets/image/About Me.png";

const AboutMe = () => {
  return (
    <About>
      <section className="container">
        <section className="flex">
          <div className="image">
            <img src={Image} alt="" />
          </div>

          <div className="aboutme">
            <strong>About</strong>
            <h1>About Me</h1>
            <p>
              I'm a front end developer with three years of experience in web
              development. I've worked on a variety of projects for clients in
              the retail, travel, and healthcare industries. I'm passionate
              about creating great user experiences and have a strong
              understanding of usability and accessibility standards.
            </p>

            <p>
              I am a hard working, honest individual. I am a good timekeeper,
              always willing to learn new skills. I am friendly, helpful and
              polite, have a good sense of humour. I am able to work
              independently in busy environments and also within a team setting.
            </p>
          </div>
        </section>
      </section>
    </About>
  );
};

export default AboutMe;

let About = styled.div`
  .flex {
    margin: 30px 0;
    padding: 40px 0;
  }

  h1 {
    margin-top: 20px;
    font-size: 40px;
  }
  p {
    margin: 20px 0;
  }

  @media (min-width: 912px) {
    .flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .aboutme {
      text-align: left;
    }

    .image {
      width: 45%;
    }
    .aboutme {
      width: 45%;
    }
  }
`;
