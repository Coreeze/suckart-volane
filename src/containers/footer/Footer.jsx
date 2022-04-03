/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import gpt3Logo from "../../logo.svg";
import twitter from "../../assets/twitter.png";
import telegram from "../../assets/telegram.png";
import discord from "../../assets/discord.png";
import "./footer.css";

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text" style={{ fontFamily: "AuthenticSans90" }}>
        Bring the power of NFTs into your art
      </h1>
    </div>

    <a
      href="https://discord.gg/rRUPQXMB"
      className="gpt3__cta gpt3__cta__hover"
      style={{
        height: "50px",
        fontSize: "20px",
        fontFamily: "AuthenticSans90",
        color: "white",
        borderRadius: "10px",
        cursor: "pointer",
        marginBottom: "10px",
      }}
    >
      Get in touch now
    </a>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <div
          style={{
            fontFamily: "DrukWideCy",
            color: "white",
            fontSize: "30px",
            margin: "0px",
          }}
        >
          SUCKART
        </div>
        <p>@2022 SuckART. All rights reserved.</p>
        <div style={{ margin: "15px 0px" }}>
          <a href="https://twitter.com/suckartclub">
            <img
              src={twitter}
              style={{ width: "40px", height: "40px", marginRight: "5px" }}
            />
          </a>
          <img
            src={telegram}
            style={{ width: "40px", height: "40px", marginRight: "5px" }}
          />
          <img
            src={discord}
            style={{ width: "40px", height: "40px", borderRadius: "50px" }}
          />
        </div>
      </div>

      <div className="gpt3__footer-links_div">
        {/* <p>contact@suckart.io</p>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p> */}
      </div>
    </div>
  </div>
);

export default Footer;
