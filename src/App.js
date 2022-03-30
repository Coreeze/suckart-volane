/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import Terms from "./components/terms";

import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";

import "./App.css";
import AboutVolane from "./components/aboutVolane/aboutVolane";

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    {/* <Main /> */}
    <Brand />
    <AboutVolane />
    <Possibility />
    <WhatGPT3 />
    <Features />
    <CTA />
    {/* <Blog /> */}
    <Footer />
  </div>
);

export default App;
