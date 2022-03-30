import React from "react";
// import possibilityImage from "../../assets/possibility.png";
import studio from "../../assets/studio.jpg";
import "./possibility.css";

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div
      className="gpt3__possibility-image"
      style={{ flexDirection: "column" }}
    >
      <img src={studio} alt="possibility" style={{ borderRadius: "10px" }} />
      <p style={{ fontFamily: "AuthenticSans90", color: "#81afdd" }}>
        Where the magic happens - Volane&apos;s studio
      </p>
    </div>
    <div className="gpt3__possibility-content">
      <h1 className="gradient__text" style={{ fontFamily: "AuthenticSans90" }}>
        The studio of a <br /> true artist
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
