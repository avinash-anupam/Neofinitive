import React, { useState } from "react";
import styled from "styled-components";
import bac33 from "../images/bac33.png";
import mapbg from "../images/mapbg.png";
import TextField from "@mui/material/TextField";

function Getintouch() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [company, setcompany] = useState("");
  const [message, setmessage] = useState("");
  return (
    <Getintouch1 id="4" style={{ backgroundImage: `url(${mapbg})` }}>
      <div className="getheaddiv">
        <h1 className="gethead">Get in touch</h1>
      </div>
      <div className="contactform">
        <p style={{ margin: "20px auto", textAlign: "center" }}>
          Fill out the form and we will contact you with details.
        </p>
        <form
          action="mailto:divvelavishnusai@gmail.com"
          method="POST"
          enctype="multipart/form-data"
          name="EmailForm"
        >
          <TextField
            id="standard-basic name"
            label="Name"
            name="Name: "
            type="text"
            variant="standard"
            onChange={(e) => setname(e.target.value)}
            style={{
              width: "85%",
              margin: "40px",
              marginTop: "50px",
              marginBottom: "25px",
            }}
            required
          />
          <TextField
            id="standard-basic fname"
            label="Email"
            type="email"
            name="Email: "
            variant="standard"
            onChange={(e) => setemail(e.target.value)}
            style={{
              width: "85%",
              margin: "0px 40px",
              marginBottom: "25px",
            }}
            required
          />
          <TextField
            id="standard-basic fname"
            label="Phone"
            type="tel"
            name="Phone No:"
            variant="standard"
            onChange={(e) => setphone(e.target.value)}
            style={{
              width: "85%",
              margin: "0px 40px",
              marginBottom: "25px",
            }}
            required
          />
          <TextField
            id="standard-basic fname"
            label="Company"
            type="text"
            variant="standard"
            name="Company: "
            onChange={(e) => setcompany(e.target.value)}
            style={{
              width: "85%",
              margin: "0px 40px",
              marginBottom: "25px",
            }}
          />
          <TextField
            id="standard-multiline-flexible"
            label="Message"
            multiline
            rows={4}
            type="text"
            name="Message: "
            variant="standard"
            onChange={(e) => setmessage(e.target.value)}
            style={{
              width: "85%",
              margin: "0px 40px",
              marginBottom: "25px",
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
  // justify-content:space-between;
  flex-wrap: wrap;
  .gethead {
    background-color: white;
    color: #1938a7;
    font-size:100px;
    font-weight:500;
    text-align:center;
    // padding-left:168px;
    // padding-right:168px;
    padding-top:20px;
    padding-bottom:20px;
    margin-top:15%;
  }
  .getheaddiv{
    flex: 0.8;
  }
  .contactform {
    width: 600px;
    height: 685px;
    // margin-top:6px;
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
  @media screen and (max-width: 1010px) {
   .getheaddiv{
     flex:1;
   } 
  }
`;
