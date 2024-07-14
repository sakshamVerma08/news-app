import React, { Component } from "react";

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav
          className={`navbar navbar-expand-lg bg-${
            this.props.mode === "light" ? "light" : "secondary"
          }`}
        >
          <div className="container-fluid">
            <a
              className="navbar-brand"
              href="/"
              style={{ color: this.props.mode === "light" ? "black" : "white" }}
            >
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
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/"
                    style={{
                      color: this.props.mode === "light" ? "black" : "white",
                    }}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/about"
                    style={{
                      color: this.props.mode === "light" ? "black" : "white",
                    }}
                  >
                    About
                  </a>
                </li>
              </ul>

              <button
                className="btn btn-dark"
                id="modeButton"
                onClick={this.props.toggleModes}
              >
                {this.props.capitalize(this.props.modeText)}
              </button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
