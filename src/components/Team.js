import React, { useState } from "react";
import styled from "styled-components";
import Navbar2 from "./Navbar2";
import avinashanupam from "../images/avinashanupam.jpeg";
import yashbhardwaj from "../images/yashbhardwaj.jpeg";
import yashrajsingh from "../images/yashraj singh.jfif";
import naithik from "../images/naithik.jpeg";
import ramkrishna from "../images/ramkrishnamitra.jfif";
import Footer from "./Footer";

function Team() {
  return (
    <Container>
      <Navbar2 />
      <div class="team1">
        <h1
          style={{
            color: "#1938A7",
            fontSize: "60px",
            marginBottom: "50px",
            textAlign: "center",
          }}
        >
          Meet our team
        </h1>
        <p>
          We are extremely selective when it comes to adding people to our team.
          We’ve blended young, tech-savvy people with seasoned industry experts
          who are relentless in their efforts to help others succeed. At Finplex
          we are more focused at creating a community rather then just a normal
          workplace where employees will just be here for work basis. We believe
          in transparency.
        </p>
      </div>
      <div className="team2">
        <div className="team2card">
          <img
            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            src={avinashanupam}
          />
          <h2 style={{ fontSize: "25px", marginTop: "10px" }}>
            Avinash Anupam
          </h2>
          <h3 style={{ color: "#757CFF", marginTop: "10px" }}>Co-founder</h3>
          <h3
            style={{ color: "#757CFF", fontWeight: "bold", marginTop: "10px" }}
          >
            in
          </h3>
        </div>
        <div className="team2card">
          <img
            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            src={yashbhardwaj}
          />
          <h2 style={{ fontSize: "25px", marginTop: "10px" }}>Yash Bhardwaj</h2>
          <h3 style={{ color: "#757CFF", marginTop: "10px" }}>Co-founder</h3>
          <h3
            style={{ color: "#757CFF", fontWeight: "bold", marginTop: "10px" }}
          >
            in
          </h3>
        </div>
        <div className="team2card">
          <img
            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            src={yashrajsingh}
          />
          <h2 style={{ fontSize: "25px", marginTop: "10px" }}>yashraj Singh</h2>
          <h3 style={{ color: "#757CFF", marginTop: "10px" }}>Co-founder</h3>
          <h3
            style={{ color: "#757CFF", fontWeight: "bold", marginTop: "10px" }}
          >
            in
          </h3>
        </div>
        <div className="team2card">
          <img
            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            src={naithik}
          />
          <h2 style={{ fontSize: "25px", marginTop: "10px" }}>Naithik Jain</h2>
          <h3 style={{ color: "#757CFF", marginTop: "10px" }}>Designer</h3>
          <h3
            style={{ color: "#757CFF", fontWeight: "bold", marginTop: "10px" }}
          >
            in
          </h3>
        </div>
        <div className="team2card">
          <img
            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            src={ramkrishna}
          />
          <h2 style={{ fontSize: "25px", marginTop: "10px" }}>
            Ram Krishna Mitra
          </h2>
          <h3 style={{ color: "#757CFF", marginTop: "10px" }}>Advisor</h3>
          <h3
            style={{ color: "#757CFF", fontWeight: "bold", marginTop: "10px" }}
          >
            in
          </h3>
        </div>
      </div>
      <div className="team3">
        <p>Checking for job openings? Click on the button below.</p>
        <div className="careerbtn">Careers</div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </Container>
  );
}

export default Team;

const Container = styled.div`
  .team1 {
    padding-top: 170px;
    p {
      text-align: center;
      width: 80%;
      color: rgba(80, 80, 80, 0.75);
      margin: 0 auto;
      font-weight: 400;
      font-size: 27px;
      line-height: 41px;
    }
  }
  .team2 {
    display: flex;
    flex-wrap: wrap;
    align-items: space-around;
    margin: 50px 100px;
    margin-right: 20px;
    // margin-left: 14%;
  }
  .team2card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    width: 240px;
    height: 280px;
    background: #ffffff;
    box-shadow: 3px 5px 6px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    margin: 50px;
  }
  .team3 {
    p {
      font-weight: 400;
      font-size: 30px;
      line-height: 41px;

      text-align: center;

      color: #505050;
    }
  }
  .careerbtn {
    padding: 10px 20px;
    cursor: pointer;
    width: 180px;
    color: white;
    background: #1938a7;
    box-shadow: 4px 6px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    margin: 20px auto;
    font-weight: 500;
    font-size: 25px;
    line-height: 41px;
    text-align: center;
  }
  @media screen and (max-width: 950px) {
    .team2card {
      margin: 30px;
      width: 280px;
    }
  }
  @media screen and (max-width: 520px) {
    width: 520px;
    // display: inline-block;
  }
`;
