import React from "react";
import styled from "styled-components";
import Profile from "./Profile";
import SocialIcon from "../assets/image/Social icon.svg";

const ProfilePage = () => {
  return (
    <Allprofile>
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
      </section>
    </Allprofile>
  );
};

export default ProfilePage;

let Allprofile = styled.div`
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
`;
