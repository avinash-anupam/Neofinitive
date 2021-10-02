import React, { useState } from "react";
import styled from "styled-components";
import bac33 from "../images/bac33.png";
import TextField from "@mui/material/TextField";

function Getintouch() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [company, setcompany] = useState("");
  const [message, setmessage] = useState("");
  return (
    <Getintouch1 id='4' style={{ backgroundImage: `url(${bac33})` }}>
      <div className="getheaddiv">
        <h1 className="gethead">Get in touch</h1>
      </div>
      <div className="contactform">
        <form>
          <TextField
            id="outlined-basic name"
            label="Name"
            name="uname"
            type="text"
            variant="outlined"
            onChange={(e) => setname(e.target.value)}
            style={{
              width: "85%",
              margin: "40px",
              marginTop: "50px",
              marginBottom: "25px",
              background: "rgba(255, 123, 123, 0.2)",
            }}
            required
          />
          <TextField
            id="outlined-basic fname"
            label="Email"
            type="email"
            variant="outlined"
            onChange={(e) => setemail(e.target.value)}
            style={{
              width: "85%",
              margin: "0px 40px",
              marginBottom: "25px",
              background: "rgba(255, 123, 123, 0.2)",
            }}
            required
          />
          <TextField
            id="outlined-basic fname"
            label="Phone"
            type="tel"
            variant="outlined"
            onChange={(e) => setphone(e.target.value)}
            style={{
              width: "85%",
              margin: "0px 40px",
              marginBottom: "25px",
              background: "rgba(255, 123, 123, 0.2)",
            }}
            required
          />
          <TextField
            id="outlined-basic fname"
            label="Company"
            type="text"
            variant="outlined"
            onChange={(e) => setcompany(e.target.value)}
            style={{
              width: "85%",
              margin: "0px 40px",
              marginBottom: "25px",
              background: "rgba(255, 123, 123, 0.2)",
            }}
          />
          <TextField
            id="outlined-multiline-flexible"
            label="Message"
            multiline
            rows={4}
            type="text"
            onChange={(e) => setmessage(e.target.value)}
            style={{
              width: "85%",
              margin: "0px 40px",
              marginBottom: "25px",
              background: "rgba(255, 123, 123, 0.2)",
            }}
            required
          />
          <input className="formsend" type="submit" value="Send" />
        </form>
      </div>
    </Getintouch1>
  );
}

export default Getintouch;

const Getintouch1 = styled.div`
  width: 100%;
  height: 685px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content:space-between;
  flex-wrap: wrap;
  .gethead {
    background-color: white;
    color: #1938a7;
    font-size:75px;
    text-align:center;
    // padding-left:168px;
    // padding-right:168px;
    padding-top:50px;
    padding-bottom:50px;
    margin-top:15%;
  }
  .getheaddiv{
    flex: 1;
  }
  .contactform {
    width: 600px;
    height: 650px;
    margin-top:20px;
    margin-right:150px;
    background: white;
    box-shadow: 3.80118px 5.70178px 9.50296px rgba(0, 0, 0, 0.2);
    border-radius: 23.7574px;
  }
  .formsend{
      margin-left: 70%;
      background: #1938A7;
      border-radius: 7.6259px;
      width: 130px;
      height: 50px;
      border: 1px solid;
      color: white;
      font-size: 17px;
    }}
  }
  @media screen and (max-width: 617px) {
    .contactform {
      margin-left: 0;
      width: 100vw;
    }
    .formsend {
      margin-left: 40%;
    }
  }
  @media screen and (max-width: 1000px) {
      height:750px;
      .getheaddiv{
          display:block;
          margin-top:0;
          height:5px;
          z-index:100;
      }
      .gethead{
          margin-top:0;
          font-size:45px;
          padding-top:15px;
          padding-bottom:15px;
          z-index:100;
      }
      .contactform{
          width:100%;
          margin-right:0px;
          height:610px;
          margin-top:0;
      }

  }
`;
