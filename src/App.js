import "./App.css";
import NavBar from "./components/NavBar";
import React, { Component } from "react";
import News from "./components/News";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Help from "./components/Help";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: "light",
      modeText: "dark",
      // alert: { alertMessage: null, alertType: null },
      alert: null,
    };
  }

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
      document.body.style.backgroundColor = "rgb(31, 35, 42)";
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
