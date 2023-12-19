import React from "react";
import styled from "styled-components";
import star from "../assets/image/Vector.svg";

const Testimonail = (props) => {
  return (
    <EachTestimonail>
      <div className="star">
        <span>
          <img src={star} alt="" />
        </span>
        <span>
          <img src={star} alt="" />
        </span>
        <span>
          <img src={star} alt="" />
        </span>
        <span>
          <img src={star} alt="" />
        </span>
        <span>
          <img src={star} alt="" />
        </span>
      </div>

      <p className="word">{props.word}</p>

      <div className="profile">
        <img src={props.img} alt="" />
        <div className="pro-details">
          <h5>{props.name}</h5>
          <p>{props.title}</p>
        </div>
      </div>
    </EachTestimonail>
  );
};

export default Testimonail;

let EachTestimonail = styled.div`
  border: 1px solid #006b6a;
  border-radius: 5px;
  padding: 20px;
  span img {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }

  .word {
    margin: 20px 0;
  }

  .profile {
    display: flex;
    align-items: center;
  }

  .profile img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 20px;
  }
  .star{
    display: flex;
  }

  h5{
    margin-bottom: 5px;
  }
`;
