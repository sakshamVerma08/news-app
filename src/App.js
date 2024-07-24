import "./App.css";
import NavBar from "./components/NavBar";
import React, { Component } from "react";
import News from "./components/News";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Help from "./components/Help";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: "light",
      modeText: "dark",
      // alert: { alertMessage: null, alertType: null },
      alert: null,
      progress: 0,
    };
  }

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  capitalize = (modeText) => {
    let newMode =
      modeText[0].toUpperCase() + modeText.slice(1, modeText.length + 1);
    return newMode;
  };

  showAlert = (currentMode, alertType) => {
    let message = `${this.capitalize(currentMode)} Mode has been Enabled !`;
    this.setState({ alert: { alertMessage: message, alertType: alertType } });
    setTimeout(() => {
      this.setState({ alert: { alertMessage: null, alertType: null } });
    }, 2000);
  };

  toggleModes = () => {
    let buttonArr = Array.from(document.getElementsByClassName("btn"));
    // changing from light ---> dark
    if (this.state.modeText === "dark") {
      this.setState({ mode: "dark", modeText: "light" });
      document.body.style.backgroundColor = "rgb(0 0 0 / 90%)";
      this.showAlert(this.state.modeText, "success");
      buttonArr.forEach((button) => {
        button.classList.remove("btn-primary");
        button.classList.add("btn-dark");
      });
    }
    // changing from dark ---> light
    else {
      this.setState({ mode: "light", modeText: "dark" });
      document.body.style.backgroundColor = "white";
      this.showAlert(this.state.modeText, "success");
      // Array.from(
      //   document.getElementsByClassName("navbar")
      // )[0].classList.remove();
      // Array.from(document.getElementsByClassName("navbar"))[0].classList.add();
      buttonArr.forEach((button) => {
        button.classList.remove("btn-dark");
        button.classList.add("btn-primary");
      });
    }
  };

  pageSize = 12;
  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            height={"2.2px"}
          />
          <NavBar
            mode={this.state.mode}
            showAlert={this.showAlert}
            modeText={this.state.modeText}
            capitalize={this.capitalize}
            toggleModes={this.toggleModes}
          />

          <Alert alert={this.state.alert} />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  key="general"
                  mode={this.state.mode}
                  country="in"
                  category="general"
                  modeText={this.state.modeText}
                  pageSize={this.pageSize}
                />
              }
            />
            <Route exact path="/about" element={<About />} />

            <Route
              exact
              path="/general"
              element={
                <News
                  setProgress={this.setProgress}
                  key="general"
                  mode={this.state.mode}
                  country="in"
                  category="general"
                  modeText={this.state.modeText}
                  pageSize={this.pageSize}
                />
              }
            />

            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  key="business"
                  mode={this.state.mode}
                  country="in"
                  category="business"
                  modeText={this.state.modeText}
                  pageSize={this.pageSize}
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  key="entertainment"
                  mode={this.state.mode}
                  country="in"
                  category="entertainment"
                  modeText={this.state.modeText}
                  pageSize={this.pageSize}
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  key="technology"
                  mode={this.state.mode}
                  country="in"
                  category="technology"
                  modeText={this.state.modeText}
                  pageSize={this.pageSize}
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  key="sports"
                  mode={this.state.mode}
                  country="in"
                  category="sports"
                  modeText={this.state.modeText}
                  pageSize={this.pageSize}
                />
              }
            />

            <Route exact path="/help" element={<Help />} />
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  key="health"
                  mode={this.state.mode}
                  country="in"
                  category="health"
                  modeText={this.state.modeText}
                  pageSize={this.pageSize}
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  key="science"
                  mode={this.state.mode}
                  country="in"
                  category="science"
                  modeText={this.state.modeText}
                  pageSize={this.pageSize}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
