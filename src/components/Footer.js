import React from "react";
import styled from "styled-components";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
function Footer() {
  return (
    <Footer1>
      <div className="childfooter1">
        <p>
          <LocationOnOutlinedIcon />
          Muzaffarpur
        </p>
        <p> Bihar,India</p>
      </div>
      <div className="childfooter1">
        <p>
          <CallOutlinedIcon />
          +91 7050078014
        </p>
        <p> +91 9508766724</p>
      </div>
      <div className="childfooter1">
        <p>
          <MailOutlinedIcon /> contact@neofinitive.co.in
        </p>
      </div>
    </Footer1>
  );
}

export default Footer;

const Footer1 = styled.div`
  background: #1938a7;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 100px;
  color: white;
  p {
    width: 320px;
    font-size: 25px;
  }
  @media screen and (max-width: 490px) {
    // width: 490px;

    padding-top: 60px;
    padding-bottom: 60px;

    .childfooter1 {
      text-align: center;
      margin: auto;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
  @media screen and (max-width: 805px) {
    .childfooter1 {
      text-align: center;
      margin: auto;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
`;
