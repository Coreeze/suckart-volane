/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-wrap-multilines */
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Footer, Possibility, Features, WhatGPT3, Header } from "./containers";
import { CTA, Brand, Navbar } from "./components";
import Terms from "./components/terms";

const Main = () => (
  <main>
    <Routes>
      <Route
        exact
        path="/"
        component={
          <div className="App">
            <Main />
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            {/* <Blog /> */}
            <Footer />
          </div>
        }
      />
      <Route path="/terms" component={Terms} />
      {/* <Route path="/policy" component={Schedule} /> */}
    </Routes>
  </main>
);

export default Main;
