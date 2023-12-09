import React from "react";
import "./style.scss";
import { Button } from "@mui/material";

const AboutSection = () => {
  return (
    <div className="about-us-div">
      <div className="row">
        <div className="col-6 border">
          <h2>Know About The Go Trip</h2>
          <p>
            We are a professionally managed travel company based in Noida, Delhi
            NCR and Uttrakhand region specializing in custom-designed Holiday
            tour Packages with clients around the globe. We care about you and
            your travel needs. We make sure you and your families are having fun
            while you are traveling.
          </p>
          <Button variant="contained" >Know More</Button>
        </div>
        <div className="col-6 border">
            <img style={{width:"100%"}} src="http://thegotrip.com/admin/uploads/account-541943542.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
