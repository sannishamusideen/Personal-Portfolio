import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/image/Logo.svg";
import hamburger from "../assets/image/icon-hamburger.svg";

const Portfolionavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Navbar>
      <section className="slide-in-top">
        <div className="overflow">
          <nav className="container">
            <img src={logo} alt="" />
            <div className={`flex-nav-bttn  ${menuOpen ? "active" : ""}`}>
              <ul className="nav-links">
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
                  <a href="#testimonials">Testimonials</a>
                </li>
              </ul>

              <div className="nav-div-bttn">
                {/* <button className="nav-bttn">Contant Me</button> */}

                <a
                  href="https://wa.me/2348100959239"
                  className="nav-bttn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Me
                </a>
              </div>
            </div>

            {/* 
          <div className="hamburger" onClick={toggleMenu}>
            <img src={hamburger} alt="" />
          </div> */}
            <div className="hamburger1" onClick={toggleMenu}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </nav>
        </div>
      </section>
    </Navbar>
  );
};

export default Portfolionavbar;

let Navbar = styled.div`
  box-shadow: 0px 5.333px 80px 0px rgba(0, 0, 0, 0.1);
  background-color: hsl(0, 0%, 98%);
  position: fixed;
  z-index: 1;
  width: 100%;

  a {
    text-decoration: none;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav img {
    width: 150px;
    height: 70px;
  }
  ul {
    display: flex;
    justify-content: space-between;
    width: 360px;

    li {
      // color: #1c1e53;
      color: #5e3bee;
    }
    li:hover {
      color: #5e3bee;
    }
  }
  .flex-nav-bttn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 65%;
  }
  .nav-bttn {
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 12px;
    border: 1px solid #5e3bee;
    color: blue;
  }
  .hamburger1 div {
    width: 25px;
    height: 3px;
    background-color: black;
    margin: 5px;
  }

  .slide-in-top {
    -webkit-animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  @media (max-width: 911px) {
    .nav-links {
      display: block;

      li {
        padding: 10px;
      }
    }
    .flex-nav-bttn {
      display: block;
      padding: 10px;
      position: absolute;
      background-color: #5e3bee;
      width: 200px;
      top: 70px;
      right: 0;
      transform: translateX(225px);

      .nav-div-bttn {
        padding: 10px;
      }
    }
    .active {
      transform: translateX(0px);
    }

    .hamburger img {
      width: 50px;
      height: 50px;
    }
    .overflow {
      overflow: hidden;
    }
  }

  @media (min-width: 912px) {
    .hamburger1 {
      display: none;
    }
  }

  /* ----------------------------------------------
 * Generated by Animista on 2023-12-12 11:26:28
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

  /**
 * ----------------------------------------
 * animation slide-in-top
 * ----------------------------------------
 */
  @-webkit-keyframes slide-in-top {
    0% {
      -webkit-transform: translateY(-1000px);
      transform: translateY(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-top {
    0% {
      -webkit-transform: translateY(-1000px);
      transform: translateY(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
