import React from "react";
import styled from "styled-components";
import logo from "../assets/image/Shams_Logo_Medium.png";
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
            {/* <li>Home</li> */}
            <li>
              <a
                href="https://personal-portfolio-frat.vercel.app"
                class="activate"
                target="_blank"
              >
                Home
              </a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#about">About me</a>
            </li>
            <li>
              <a
                href="https://wa.me/2348100959239"
                className="nav-bttn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Me
              </a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
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
              <a
                href="https://www.linkedin.com/in/shamusideen-sanni-259013233/"
                target="_blank"
              >
                <img src={linkedin} alt="" />
              </a>
            </span>
          </div>
        </div>

        <div className="footer-down">
          <p>Made with 💖 by Engr.Loverboy</p>

          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li className="set">Cookies Settings</li>
          </ul>
        </div>
        

        <div class="test-wrapper owl-carousel">
  <!--Item 1-->
          <div class="test-words item">
            <p class="test-personal">
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>
            <p class="test-name">Mike taylor</p>
            <p class="lah">Lahore, Pakistan</p>
          </div>
  
  
  <!--Item 2-->
  <div class="test-words item">
            <p class="test-personal">
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>
            <p class="test-name">Mike taylor</p>
            <p class="lah">Lahore, Pakistan</p>
          </div>
        </div>

<style>
  .test-wrapper{
    display: flex;
  }
  .test-personal{
    font-weight: 500;
    font-size: 16px;
    line-height: 32px;
    color: #5E6282;
    margin-bottom: 34px;
    padding-bottom: 0px;
  }
  .lah {
    color: #5E6282;
    font-weight: 500;
    font-size: 14px;
  }
  .test-name{
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 5px;
    padding-bottom: 0px;
  }
</style>



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
      align-items: center;
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
