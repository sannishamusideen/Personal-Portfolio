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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
              nihil ea quia modi. Optio, totam. Autem voluptas, est similique
              sequi porro quos corrupti eius magni reprehenderit, qui doloribus,
              tenetur aliquam! Quae debitis, repellendus blanditiis commodi
              minus ipsa, deserunt ipsam fuga nisi perspiciatis reprehenderit
              non iste ipsum porro, minima eius rem autem? Sit expedita enim
              doloribus dolorum, quibusdam alias exercitationem eaque.
            </p>

            <p>
              Ducimus, at alias quia nam magnam dolor tempora officiis ex
              accusamus architecto est molestias fugiat consequuntur. Modi odio
              possimus architecto laudantium rerum nam perspiciatis, vel dolor
              dolorem molestiae officia perferendis!
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
    margin-top: 15px;
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
