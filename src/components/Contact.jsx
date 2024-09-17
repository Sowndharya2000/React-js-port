import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaPhoneSquare } from "react-icons/fa";
const Contact = () => {
  return (
    <>
      <h1>CONTACT ME</h1>
      <div
        className="container social-con"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        id="contact"
      >
        <div className="social">
         
          
          <a href="https://www.linkedin.com/in/sowndharya-v-1370ab309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="items">
            <FaLinkedin className="icons" />{" "}
          </a>
          
          <a href="https://github.com/sowndharya2000?tab=repositories/" target="_blank" className="items">
            <FaGithub className="icons" />
          </a>
          <a
            href="mailto:malakars041@gmail.com"
            target="_blank"
            className="items"
          >
            <CgMail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
