import React from "react";
import { Element } from "react-scroll";
import { IconButton } from "@mui/material";
// import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import {
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillLinkedin,
  AiFillInstagram
} from "react-icons/ai";

import "./Contact.css";
const Contacts = () => {
  return (
    <Element className="contact" id="contact">
      <h1>Contact</h1>
      <div className="contact_container">
        <p>
          Email :<span> Shivagami.shanti@gmail.com</span>
        </p>
        <p>
          Github Username : <span> https://github.com/Shivagami3006</span>
        </p>
        <div className="contact_icons">
          <a target="black" href="google.com">
            {/* <IconButton>
              <LinkedIn />
            </IconButton> */}
            <AiFillLinkedin />
          </a>
          <a href="google.com">
            {/* <IconButton>
              <Instagram />
            </IconButton> */}
            <AiFillTwitterCircle />
          </a>
          <a href="google.com">
            {/* <IconButton>
              <Facebook />
            </IconButton> */}
            <AiFillYoutube />
          </a>
          <a> <AiFillInstagram/></a>

        </div>
      </div>
    </Element>
  );
};
export default Contacts;
