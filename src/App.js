import "./App.css";
import NavBar from "./components/NavBar";
import React, { Component } from "react";
import News from "./components/News";
import Alert from "./components/Alert";

export default class App extends Component {
  constructor() {
    super();
    this.state = { mode: "light", modeText: "dark" };
  }

  capitalize = (modeText) => {
    let newMode =
      modeText[0].toUpperCase() + modeText.slice(1, modeText.length + 1);
    return newMode;
  };

  showAlert = (currentMode, alertType) => {
    <Alert
      currentMode={currentMode}
      alertType={alertType}
      capitalize={this.capitalize}
    />;
    console.log("Method Alert has been called");
  };

  toggleModes = () => {
    let buttonArr = Array.from(document.getElementsByClassName("btn"));
    // changing from light ---> dark
    if (this.state.modeText === "dark") {
      document.body.style.backgroundColor = "rgb(31, 35, 42)";
      this.setState({ mode: "dark", modeText: "light" });
      this.showAlert(this.state.mode, "success");
      buttonArr.forEach((button) => {
        button.classList.remove("btn-primary");
        button.classList.add("btn-dark");
      });
    }
    // changing from dark ---> light
    else {
      document.body.style.backgroundColor = "white";
      Array.from(
        document.getElementsByClassName("navbar")
      )[0].classList.remove();
      Array.from(document.getElementsByClassName("navbar"))[0].classList.add();
      this.setState({ mode: "light", modeText: "dark" });
      buttonArr.forEach((button) => {
        button.classList.remove("btn-dark");
        button.classList.add("btn-primary");
      });
      this.showAlert(this.state.mode, "success");
    }
  };
  render() {
    return (
      <div>
        <NavBar
          mode={this.state.mode}
          showAlert={this.showAlert}
          modeText={this.state.modeText}
          capitalize={this.capitalize}
          toggleModes={this.toggleModes}
        />

        <News
          mode={this.state.mode}
          modeText={this.state.modeText}
          pageSize={6}
        />
      </div>
    );
  }
}
