import React, { Component } from "react";

export class NavBar extends Component {
  constructor() {
    super();

    this.state = { mode: "light" };
  }

  showAlert = (currentMode, alertType) => {
    return (
      <div class={`alert alert-${alertType}`} role="alert">
        {currentMode} has been Enabled
      </div>
    );
  };

  /* const toggleModes = () => {
    let buttonArr = document.getElementsByClassName("btn");
   

    if (this.state.mode === "light") {
      document.body.style.backgroundColor = "rgb(14, 18, 27)";
      this.setState({ mode: "dark" });
      this.showAlert(this.state.mode, "success");

      // buttonArr.forEach((button) => {
      //   button.classList.remove("btn-dark");
      //   button.classLlist.add("btn-light");
      // });
    }
    // changing from dark to light mode
    else {
      document.body.style.backgroundColor = "white";
      this.setState({ mode: "light" });
      this.showAlert(this.state.mode, "success");
      buttonArr.forEach((button) => {
        button.classList.remove("btn-light");
        button.classList.add("btn-dark");
      });
    }
  };*/

  capitalize = (mode) => {
    let newMode = mode[0].toUpperCase() + mode.slice(1, this.state.mode.length);
    return newMode;
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              NewsMonkey
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About
                  </a>
                </li>
              </ul>

              <button className="btn btn-dark" id="modeButton">
                {this.capitalize(this.state.mode)}
              </button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
