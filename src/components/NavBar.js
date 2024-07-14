import React, { Component } from "react";

export class NavBar extends Component {
  constructor() {
    super();
    console.log(
      "mode = " + this.props.mode + `\nmodeText = ${this.props.modeText}`
    );
  }
  render() {
    return (
      <div>
        <nav
          className={`navbar navbar-expand-lg bg-${
            this.props.mode === "light" ? "light" : "secondary"
          }`}
        >
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

              <button
                className="btn btn-dark"
                id="this.props.modeButton"
                onClick={this.togglethis.props.modes}
              >
                {this.capitalize(this.props.this.props.modeText)}
              </button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
