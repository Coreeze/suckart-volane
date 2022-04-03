import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "Bring your art to the Metaverse",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    title: "Become a part of the future",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
  {
    title: "SuckART helps you with all the tech",
    text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
  },
  {
    title: "You focus on your CRAFT",
    text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..",
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now.</h1>
      <h1 className="gradient__text">You Just Need to Realize It.</h1>
      <h1 className="gradient__text">
        Are you an artist? Get in contact and take the opportunity!
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
        Get in touch now
      </a>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
