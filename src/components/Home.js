import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import bac11 from "../images/bac11.png";
import bac22 from "../images/bac22.png";
import serviceimg1 from "../images/Group 21.svg";
import serviceimg2 from "../images/noun_plug in_3854621 3.svg";
import serviceimg3 from "../images/Group 20.svg";
import serviceimg4 from "../images/Group 15.svg";
import serviceimg5 from "../images/Group 17.svg";
import serviceimg6 from "../images/Group.svg";
import serviceimg7 from "../images/Group 16.svg";
import serviceimg8 from "../images/Group 18.svg";
import serviceimg9 from "../images/Group 19.svg";
import Footer from "./Footer";
import Getintouch from "./Getintouch";

function Home() {
  return (
    <Container>
      <Navbar />
      <img src={bac11} className="bacimage1" />
      <Welcome id='1'>
        <div className="welcomecontent">
          <h1 className="welcomehead">Neofinitve Infra</h1>
          <p style={{ width: "431px", fontSize: "20px", marginBottom: "30px" }}>
            We specialise in construction/erection of telecommunication
            structures and also provide all types of telecom related works and
            services.
          </p>
          <div className="welcomebtn">Get in touch</div>
        </div>
        <img src={bac22} className="bacimage2" />
      </Welcome>
      <div id='2' className="services0">
        <h2 className="serviceshead">Our Services</h2>
        <br />
        <hr className="hr1" />
        <br />
        <p>
          Neofinitive infra provides a wide variety of client services and
          solutions across the telecommunication and construction life cycle.
        </p>
      </div>
      <div className="services1">
        <div className="childservices1">
          <img src={serviceimg1} style={{ marginBottom: "10px" }} />
          <h1>Civil</h1>
          <p>GBT and all types of tower construction work.</p>
        </div>
        <div className="childservices1">
          <img src={serviceimg2} style={{ marginBottom: "10px" }} />
          <h1>Electrical</h1>
          <p>
            Rack and DG installation, Electrical cable wiring and all types of
            electrical service works.
          </p>
        </div>
        <div className="childservices1">
          <img src={serviceimg3} style={{ marginBottom: "10px" }} />
          <h1>E.B</h1>
          <p>S.T (Short Transmission) </p>
          <p>L.T(Long Transmission)</p>
        </div>
      </div>
      <div className="services2">
        <div className="childservices1">
          <img src={serviceimg4} style={{ marginBottom: "10px" }} />
          <h1>Outdoor small cell work</h1>
          <p>
            Outdoor rack installation and laying power cable and I&C of small
            cell.
          </p>
        </div>
        <div className="childservices1">
          <img src={serviceimg5} style={{ marginBottom: "10px" }} />
          <h1>Indoor small cell work</h1>
          <p>
            Fiber and power Cable laying, outdoor IT rack installation and I&C
            of small cell in commercial complex.
          </p>
        </div>
        <div className="childservices1">
          <img src={serviceimg6} style={{ marginBottom: "10px" }} />
          <h1>WIFI</h1>
          <p>Route survey and all types of cable installation and services</p>
        </div>
      </div>
      <div className="services3">
        <div className="childservices1">
          <img src={serviceimg7} style={{ marginBottom: "10px" }} />
          <h1>Sector addition work</h1>
        </div>
        <div className="childservices1">
          <img src={serviceimg8} style={{ marginBottom: "10px" }} />
          <h1 style={{ width: "300px" }}>
            UBR installation, commissioning & integration work.
          </h1>
        </div>
        <div className="childservices1">
          <img src={serviceimg9} style={{ marginBottom: "10px" }} />
          <h1>Optical fiber</h1>
          <p>
            Trunching, Ducting, Laying, fiber splicing, fiber IT rack
            installation etc.
          </p>
        </div>
      </div>
      <Getintouch />
      <Footer />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  * {
    margin: 0;
  }
  .bacimage1 {
    width: 600px;
    height: 700px;
    position: absolute;
    top: -100px;
  }
  .services0 {
    p {
      text-align: center;
      font-size: 20px;
      width: 60%;
      margin: auto;
    }
  }
  .serviceshead {
    margin-top: 20px;
    font-weight: bold;
    font-size: 60px;
    line-height: 70px;
    width: 100%;
    text-align: center;
  }
  .services1 {
    margin-top: 20px;
    background: #1938a7;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 100px;
    color: white;
    p {
      width: 300px;
      font-size: 20px;
    }
  }
  .services2 {
    background: #0096ff;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 100px;
    color: white;
    p {
      width: 300px;
      font-size: 20px;
    }
  }
  .services3 {
    background: #1938a7;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 100px;
    color: white;
    p {
      width: 300px;
      font-size: 20px;
    }
  }
  .hr1 {
    width: 11.5%;
    margin-left: 44%;
    height: 2px;
    background-color: black;
  }

  @media screen and (max-width: 600px) {
    .bacimage1 {
      width: 400px;
      height: 500px;
      position: absolute;
      top: 300px;
    }
  }
  @media screen and (max-width: 490px) {
    display: inline-block;
    .services1 {
      padding-top: 60px;
      padding-bottom: 60px;
    }
    .childservices1 {
      text-align: center;
      margin: auto;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .services2 {
      padding-top: 60px;
      padding-bottom: 60px;
    }
    .services3 {
      padding-top: 60px;
      padding-bottom: 60px;
    }
  }
  @media screen and (max-width: 805px) {
    .childservices1 {
      text-align: center;
      margin: auto;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
`;
const Welcome = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  .welcomebtn {
    color: white;
    border-radius: 5px;
    padding: 1rem;
    background-color: #1938a7;
    cursor: pointer;
    width: 100px;
    transition: all 300ms ease-in-out;
    text-align: center;
  }
  .welcomecontent {
    margin-left: 10%;
    margin-top: 5%;
  }
  .welcomebtn:hover {
    background-color: #5c7aea;
  }
  .welcomehead {
    color: linear-gradient(90deg, #1938a7 -7.93%, #0096ff 107.51%);
    font-weight: bold;
    font-size: 60px;
    line-height: 70px;
    margin-bottom: 15px;
  }
  .bacimage2 {
    margin: 50px;
  }
  @media screen and (max-width: 600px) {
    .bacimage2 {
      width: 400px;
      margin-top: 0;
      margin-bottom: 0;
    }
    .welcomebtn {
      margin-left: 32%;
    }
  }
`;
