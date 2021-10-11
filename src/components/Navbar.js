import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo1 from "../images/logo1.png";
import $ from "jquery";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  const clickHandler = () => {
    setIsMobile(!isMobile);
  };

  $(document).ready(function () {
    $(window).scroll(function () {
      // var x = window.matchMedia("(max-width: 780px)");
      // if (x.matches) {
      //   var a = document.querySelector("#navbarscrollback");
      //   a.style.backgroundColor = "crimson";
      // }

      if (this.scrollY > 30) {
        var a = document.querySelector(".navbarbar");
        if (a) {
          a.style.backgroundColor = "white";
        }
      } else {
        var a = document.querySelector(".navbarbar");
        if (a) {
          a.style.backgroundColor = "transparent";
        }
      }
    });
  });

  return (
    <Navbar1 className="navbarbar">
      <img src={logo1} style={{ width: "172px", height: "118px" }} />
      <div style={{ display: "flex" }}>
        <ul className={isMobile ? "navfeat active" : "navfeat"}>
          <li className="lists">
            <a href="/#1" className="nav-link2">
              Home
            </a>
          </li>
          <li className="lists">
            <a href="/#2" className="nav-link">
              Services
            </a>
          </li>
          <li className="lists">
            <Link to="/" className="nav-link">
              About Us
            </Link>
          </li>
          {/* <li className="lists">
            <Link to="/team" className="nav-link">
              Team
            </Link>
          </li> */}
        </ul>
        <ul>
          <li className="lists">
            <Link to="/#4" className="nav-link1">
              Contact Us
            </Link>
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
  position: fixed;
  width: 95%;
  z-index: 1000;
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
    color: #0096ff;
    text-decoration: none;
    padding: 1rem;
    padding: 12px 20px;
    transition: all 300ms ease-in-out;
  }
  .nav-link:hover {
    color: white;
    border-radius: 5px;
    background-color: #1938a7;
  }
  .nav-link1 {
    text-decoration: none;
    padding: 1rem;
    padding: 10px 18px;
    transition: all 300ms ease-in-out;
    color: white;
    border-radius: 5px;
    background-color: #1938a7;
    border: 2px solid #1938a7;
  }
  .nav-link1:hover {
    background-color: white;
    color: #1938a7;
    border: 2px solid #1938a7;
  }
  .nav-link2 {
    color: #1938a7;
    text-decoration: none;
    padding: 1rem;
    padding: 12px 20px;
    transition: all 300ms ease-in-out;
  }
  .nav-link2:hover {
    color: white;
    border-radius: 5px;
    background-color: #1938a7;
  }

  @media screen and (max-width: 1160px) {
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
      top: 13%;
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
    .nav-link2 {
      font-size: 1.8rem;
      width: 100%;
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
