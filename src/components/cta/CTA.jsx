import React from "react";
import "./cta.css";

const CTA = () => (
  <div className="gpt3__cta">
    <div className="gpt3__cta-content">
      <p style={{ fontFamily: "AuthenticSans90" }}>
        Request Early Access to Get Started
      </p>
      <h3 style={{ fontFamily: "AuthenticSans90" }}>
        Register Today & start exploring the endless possibilities.
      </h3>
    </div>
    <div className="gpt3__cta-btn gpt3__cta__hover">
      <button type="button" style={{ fontFamily: "AuthenticSans90" }}>
        Be part of our community
      </button>
    </div>
  </div>
);

export default CTA;
