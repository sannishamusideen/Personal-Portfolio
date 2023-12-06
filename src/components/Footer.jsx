import React from "react";
import styled from "styled-components";
import logo from "../assets/image/Logo.svg";
import facebook from "../assets/image/Facebook.svg";
import twitter from "../assets/image/Twitter.svg";
import instagram from "../assets/image/Instagram.svg";
import linkedin from "../assets/image/LinkedIn.svg";

const Portfoliofooter = () => {
  return (
    <Footer>
      <div className="footer container">
        <div className="flex-footer">
          <img src={logo} alt="" />

          <ul>
            <li>Home</li>
            <li>Portfolio</li>
            <li>About me</li>
            <li>Contact</li>
            <li>Testimonials</li>
            <li>Portfolio</li>
          </ul>

          <div className="footer-social">
            <span>
              <img src={facebook} alt="" />
            </span>
            <span>
              <img src={twitter} alt="" />
            </span>
            <span>
              <img src={instagram} alt="" />
            </span>
            <span>
              <img src={linkedin} alt="" />
            </span>
          </div>
        </div>

        <div className="footer-down">
          <p>Made with 💖 by Airdokan</p>

          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li className="set">Cookies Settings</li>
          </ul>
        </div>
      </div>
    </Footer>
  );
};

export default Portfoliofooter;

let Footer = styled.div`
  background-color: #f5fcff;
  margin-bottom: 30px;

  .footer {
    text-align: center;
    // padding: 20px 0;
  }

  .footer .flex-footer img {
    width: 150px;
  }
  .footer .flex-footer ul {
    margin: 20px 0;
  }
  .footer .flex-footer ul li {
    margin: 15px;
  }
  .footer .flex-footer {
    border-bottom: 1px solid rgba(40, 41, 56, 0.55);
    padding: 40px 0px;
  }
  .footer .flex-footer .footer-social span img {
    width: 30px;
  }

  .footer .footer-down {
    padding: 20px 0 40px 0;
  }

  .footer .footer-down ul {
    display: flex;
    justify-content: center;
  }

  .footer .footer-down ul li {
    margin-right: 15px;
    padding-top: 20px;
  }

  @media (min-width: 911px) {
    .flex-footer {
      display: flex;
      justify-content: space-between;
    }

    .footer .flex-footer ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0;
      width: 500px;
    }

    .footer .flex-footer ul li {
      margin: 0;
    }

    .footer .footer-down {
      display: flex;
      justify-content: space-between;
    }

    .footer .footer-down ul li {
      padding-top: 0;
    }
    .footer .footer-down ul .set {
      margin-right: 0;
    }
  }
`;
