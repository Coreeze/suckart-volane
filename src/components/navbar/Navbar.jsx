/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../logo.svg";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          {/* <img src={logo} /> */}
          <div
            style={{
              fontFamily: "DrukWideCy",
              color: "white",
              fontSize: "30px",
            }}
          >
            SUCKART
          </div>
        </div>
        <div
          className="gpt3__navbar-links_container"
          style={{ position: "absolute", right: "100px" }}
        >
          <p>
            <a
              className="gpt3__cta__hover"
              href="#home"
              style={{
                fontFamily: "AuthenticSans90",
                fontSize: "20px",
                fontWeight: "550",
              }}
            >
              Home
            </a>
          </p>
          <p>
            <a
              className="gpt3__cta__hover"
              href="#wgpt3"
              style={{
                fontFamily: "AuthenticSans90",
                fontSize: "20px",
                fontWeight: "550",
              }}
            >
              Buy an art piece
            </a>
          </p>
          <p>
            <a
              className="gpt3__cta__hover"
              href="#possibility"
              style={{
                fontFamily: "AuthenticSans90",
                fontSize: "20px",
                fontWeight: "550",
              }}
            >
              The story
            </a>
          </p>
          <p>
            <a
              className="gpt3__cta__hover"
              href="#features"
              style={{
                fontFamily: "AuthenticSans90",
                fontSize: "20px",
                fontWeight: "550",
              }}
            >
              Team
            </a>
          </p>
          <p>
            <a
              className="gpt3__cta__hover"
              href="#blog"
              style={{
                fontFamily: "AuthenticSans90",
                fontSize: "20px",
                fontWeight: "550",
              }}
            >
              About
            </a>
          </p>
        </div>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#wgpt3">Buy an art piece</a>
              </p>
              <p>
                <a href="#possibility">The story</a>
              </p>
              <p>
                <a href="#features">Team</a>
              </p>
              <p>
                <a href="#blog">About</a>
              </p>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
