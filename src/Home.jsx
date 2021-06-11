import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

import web from "../src/images/mypic.png";
import Commom from "./Commom";

const Home = () => {
  return (
    <>
      <Commom
        name="Hello!!"
        imgsrc={web}
        visit="/about"
        btname="About me"
      />
      <br></br>
      <div className="container">
        <div className="row">
          <div className="col">
          <ul className="contactCircles">
                <li>
                  <FaFacebookF className="contactIcon" />
                </li>
                <li>
                  <FaTwitter className="contactIcon" />
                </li>
                <li>
                  <FaPinterest className="contactIcon" />
                </li>
                <li>
                  <FaInstagram className="contactIcon" />
                </li>
              </ul>
          </div>
        </div>
      </div>
      <hr></hr>
      <br></br>
      <div className="container" id="all">
        <div className="row">
          <div className="col">
            <h2 className="quote">"If Your Knowledge is Powerfull,You will always Greater than other people."</h2>
            <br></br>
            <h3 className="name">- Dharil Patel</h3>
          </div>
        </div>
      </div>
      <hr></hr>
            <br></br>
    </>
  );
};

export default Home;
