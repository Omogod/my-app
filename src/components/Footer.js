import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/omogodati/"> <InstagramIcon /></a>
        <a href="https://twitter.com/OmoregieGodsti4"> <TwitterIcon /></a>
        <a href="https://www.facebook.com/omogod.godstime1/"> <FacebookIcon /></a>
        <a href="https://www.linkedin.com/in/godstime-omoregie-a87aa0183"> <LinkedInIcon /> </a>
      </div>
      <p> &copy; 2022 OmoGod.com</p>
    </div>
  );
}

export default Footer;

