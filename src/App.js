import "./App.css";
import NavBar from "./components/NavBar";
import React, { Component } from "react";
import News from "./components/News";

export default class App extends Component {
  constructor() {
    super();
    this.state = { mode: "light", modeText: "dark" };
  }

  showAlert = (currentMode, alertType) => {
    return (
      <div class={`alert alert-${alertType}`} role="alert">
        {currentMode} has been Enabled
      </div>
    );
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
        <NavBar mode={this.state.mode} modeText={this.state.modeText} />
        <News mode={this.state.mode} modeText={this.state.modeText} />
      </div>
    );
  }
}
