import React from "react";
import styled from "styled-components";
import vector from "../assets/image/Vector (2).svg";

const Profile = (props) => {
  return (
    <EachProfile>
      <section className="each-profile">
        <img src={props.img} alt="" />
        <div className="section">
          <h3>{props.project}</h3>
          <p>{props.word}</p>
          <div className="underline">
            <div className="view">
              <h4>View In Dribble</h4>
              <img src={vector} alt="" />
            </div>
          </div>
        </div>
      </section>
    </EachProfile>
  );
};

export default Profile;

let EachProfile = styled.div`
  section {
    margin: 40px 0;
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

  }
`;
