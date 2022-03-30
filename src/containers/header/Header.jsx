/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */

import React from "react";
import { useTimer } from "react-timer-hook";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import picture1 from "../../assets/picture1.png";
import "./header.css";

const styles = {
  timerDiv: {
    flexDirection: "column",
    display: "flex",
    backgroundColor: "#111d29",
    width: "150px",
    margin: "0px 5px",
    borderRadius: "10px",
  },
};

function MyTimer({ expiryTimestamp }) {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
  });
  return (
    <div
      style={{
        textAlign: "center",
        fontSize: "50px",
        fontFamily: "DrukWideCy",
        color: "#81afdd",
        paddingTop: "30px",
        display: "flex",
      }}
    >
      <div style={styles.timerDiv}>
        <span>{days}</span>
        <span>d</span>
      </div>

      <div style={styles.timerDiv}>
        <span>{hours}</span>
        <span>h</span>
      </div>
      <div style={styles.timerDiv}>
        <span>{minutes}</span>
        <span>m</span>
      </div>
      <div style={styles.timerDiv}>
        <span>{seconds}</span>
        <span>s</span>
      </div>
    </div>
  );
}

const time = new Date();
time.setSeconds(time.getSeconds() + 1000000); // 10 minutes timer

const Header = () => (
  <>
    <div
      className="gpt3__header section__padding"
      id="home"
      style={{ padding: "2rem 4rem" }}
    >
      <div className="gpt3__header-image" style={{ flexDirection: "column" }}>
        <img
          src={picture1}
          style={{ borderRadius: "25px", width: "70%", marginTop: "30px" }}
        />
        <h1
          className="gradient__text"
          style={{
            fontFamily: "DrukWideCy",
            marginTop: "10px",
          }}
        >
          P*s*y#1
        </h1>
        <h1
          className="gradient__text"
          style={{
            fontFamily: "DrukWideCy",
            marginTop: "10px",
          }}
        >
          NFT collection
        </h1>
      </div>
      <div className="gpt3__header-content">
        <h1
          className="gradient__text"
          style={{
            fontFamily: "DrukWideCy",
          }}
        >
          Volane x SuckART
        </h1>
        <p
          style={{
            fontFamily: "AuthenticSans90",
          }}
        >
          Uncomfortable. Daring. Offensive. A challenging thought exercise. The
          time has come to indulge yourself and rejoice at the lewd Volane x
          SuckART P*s*y#1 NFT Collection.
        </p>

        {/* <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
      </div> */}
        <button
          className="gpt3__cta gpt3__cta__hover"
          style={{
            height: "50px",
            width: "100%",
            fontFamily: "DrukWideCy",
            color: "white",
            borderRadius: "10px",
            margin: "0px",
            display: "block",
            padding: "0px",
            marginTop: "30px",
            cursor: "not-allowed",
          }}
          disabled="disabled"
        >
          Buy now
        </button>
        <MyTimer expiryTimestamp={time} />

        {/* <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div> */}
      </div>
    </div>
  </>
);

export default Header;
