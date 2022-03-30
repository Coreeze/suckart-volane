import React from "react";
import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h1 className="gradient__text" style={{ fontFamily: "AuthenticSans90" }}>
        The possibilities are <br /> beyond your imagination
      </h1>
      <p style={{ fontFamily: "AuthenticSans90" }}>
        Yet bed any for travelling assistance indulgence unpleasing. Not
        thoughts all exercise blessing. Indulgence way everything joy alteration
        boisterous the attachment. Party we years to order allow asked of.
      </p>
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
        }}
      >
        Be part of our community
      </a>
    </div>
  </div>
);

export default Possibility;
