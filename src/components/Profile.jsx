import React from "react";
import styled from "styled-components";

const Profile = (props) => {
  return (
    <EachProfile>
      <section>
        <img src={props.img} alt="" />
        <div className="section">
          <h3>{props.project}</h3>
          <p>{props.word}</p>
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
`;
