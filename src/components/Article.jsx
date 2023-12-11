import React from "react";
import styled from "styled-components";
import Myskill from "./Myskills";

const ArticleSkills = () => {
  return (
    <Article>
      <section className="container">
        <small>My Skills</small>
        <h1>My Expertise</h1>
        <Myskill />
      </section>
    </Article>
  );
};

export default ArticleSkills;

let Article = styled.div`
  margin: 80px 0;

  small {
    font-weight: 500;
  }
  h1 {
    margin: 20px 0;
  }
  img {
    width: 45px;
    height: 45px;
    background-color: white;
    padding: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 10px;
  }

  .flex-skills {
    margin: 80px 0 100px;
    // display: flex;
    // justify-content: space-between;
    // flex-wrap: wrap;
  }
  .each-skill {
    background-color: #f5fcff;
    padding: 20px;
    border-radius: 15px;
    margin-bottom: 20px;
  }

  h4 {
    margin: 15px 0;
  }

  @media (min-width: 700px) {
    .flex-skills {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    .each-skill {
      width: 40%;
    }
  }

  @media (min-width: 900px) {
    .each-skill {
      width: 20%;
    }
  }
`;
