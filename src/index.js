import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";

import Home from "./components/home";
import About from "./components/about";
import MySkills from "./components/myskills";
import ExpeEdu from "./components/expeEdu";
import Contact from "./components/contact";
import Footer from "./components/footer";

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <About />
    <MySkills />
    <ExpeEdu />
    <Contact />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
