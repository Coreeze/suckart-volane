/* eslint-disable react/button-has-type */
import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => (
  <div
    className="gpt3__whatgpt3 section__margin"
    id="wgpt3"
    style={{ borderRadius: "10px" }}
  >
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="Who is SuckART"
        text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text" style={{ fontFamily: "AuthenticSans90" }}>
        We present you the NFT collection Volane x SuckART
      </h1>
      <a
        href="https://discord.gg/YmnjudEmtr"
        className="gpt3__cta gpt3__cta__hover"
        style={{
          height: "50px",
          fontSize: "20px",
          fontFamily: "AuthenticSans90",
          color: "white",
          borderRadius: "10px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        Become an exclusive member
      </a>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Metaverse"
        text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
      />
      <Feature
        title="True art"
        text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
      />
      <Feature
        title="Own you art"
        text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
      />
    </div>
  </div>
);

export default WhatGPT3;
