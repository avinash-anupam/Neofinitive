import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo1 from "../images/logo1.png";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  const clickHandler = () => {
    setIsMobile(!isMobile);
  };

  return (
    <Navbar1>
      <img src={logo1} style={{ width: "192px", height: "138px" }} />
      <div style={{ display: "flex" }}>
        <ul className={isMobile ? "navfeat active" : "navfeat"}>
          <li className="lists">
            <a href="#1" className="nav-link">
              Home
            </a>
          </li>
          <li className="lists">
            <a href="#2" className="nav-link">
              Services
            </a>
          </li>
          <li className="lists">
            <a href="" className="nav-link">
              About Us
            </a>
          </li>
        </ul>
        <ul>
          <li className="lists">
            <a href="#4" className="nav-link1">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div className="mobile-menu-icon" onClick={clickHandler}>
        {isMobile ? (
          <CloseIcon
            style={{
              cursor: "pointer",
              width: "40px",
              height: "40px",
              border: "1px solid black",
              borderRadius: "10px",
            }}
          />
        ) : (
          <MenuIcon
            style={{
              cursor: "pointer",
              width: "40px",
              height: "40px",
              border: "1px solid black",
              borderRadius: "10px",
            }}
          />
        )}
      </div>
    </Navbar1>
  );
}

export default Navbar;

const Navbar1 = styled.div`
  background-color: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px;
  .navfeat {
    display: flex;
  }
  .lists {
    list-style: none;
    margin: 25px;
    font-size: 20px;
    font-weight: 600;
    line-height: 34.05px;
    color: #1938a7;
  }

  .mobile-menu-icon {
    display: none;
  }
  .nav-link {
    color: #1938a7;
    text-decoration: none;
    padding: 1rem;
    transition: all 300ms ease-in-out;
  }
  .nav-link:hover {
    color: white;
    border-radius: 5px;
    background-color: #1938a7;
  }
  .nav-link1 {
    color: #1938a7;
    text-decoration: none;
    padding: 1rem;
    transition: all 300ms ease-in-out;
  }
  .nav-link1:hover {
    color: white;
    border-radius: 5px;
    background-color: #1938a7;
  }

  @media screen and (max-width: 1020px) {
    padding: 15px 15px;
    padding-bottom: 0px;
    .log {
      display: flex;
      position: absolute;
      top: 15px;
      left: 35px;
    }
    // .navfeat {
    //   display: none;
    // }

    .navfeat {
      position: fixed;
      top: 19%;
      left: -100%;
      flex-direction: column;
      align-items: center;
      background-color: #242424;
      width: 100%;
      height: 100%;
      padding: 1.6rem 0;
      transition: all 300ms ease-in-out;
      z-index: 100;
    }
    .navfeat.active {
      left: 0%;
      transition: all 300ms ease-in-out;
    }
    .lists {
      color: white;
      width: 100%;
      text-align: center;
    }
    .nav-link {
      font-size: 1.8rem;
      width: 100%;
      color: white;
    }
    .mobile-menu-icon {
      display: block;
    }
    .nav-link1 {
      position: relative;
      right: 25%;
      color: white;
      border-radius: 5px;
      background-color: #1938a7;
    }
  }
`;
