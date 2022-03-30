/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Video } from "../video.mp4";
// import {vid} from "../../../"
import "./aboutVolane.css";
/* eslint-disable global-require */

const AboutVolane = () => (
  <div
    className="gpt3__whatgpt3 section__margin"
    style={{
      display: "grid",
      justifyContent: "center",
      borderRadius: "10px",
    }}
  >
    <h1
      style={{
        fontFamily: "AuthenticSans90",
        marginTop: "10px",
        fontSize: "20px",
        color: "#81afdd",
        textAlign: "center",
      }}
    >
      SuckART presents
    </h1>
    <h1
      className="gradient__text"
      style={{
        fontFamily: "DrukWideCy",
        marginTop: "10px",
        textAlign: "center",
        fontSize: "40px",
        paddingBottom: "20px",
      }}
    >
      Volane P*S*Y#1 NFT Collection
    </h1>
    <ReactPlayer
      url={"https://youtu.be/K8Sk-_fEiQo"}
      width="900px"
      height="500px"
      volume={0}
      style={{ borderRadius: "10px" }}
    />
  </div>
);

export default AboutVolane;
