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
      <div className="overflow">
        <nav className="container">
          <img src={logo} alt="" />

          <div className={`flex-nav-bttn ${menuOpen ? "active" : ""}`}>
            <ul className="nav-links">
              <li>Home</li>
              <li>Portfolio</li>
              <li>About me</li>
              <li>Testimonials</li>
            </ul>

            <div className="nav-div-bttn">
              <button className="nav-bttn">Contant Me</button>
            </div>
          </div>

          <div className="hamburger" onClick={toggleMenu}>
            <img src={hamburger} alt="" />
          </div>
        </nav>
      </div>
    </Navbar>
  );
};

export default Portfolionavbar;

let Navbar = styled.div`
  box-shadow: 0px 5.333px 80px 0px rgba(0, 0, 0, 0.1);

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
      color: #1c1e53;
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
    .hamburger {
      display: none;
    }
  }
`;
