import React, { Component } from "react";
import { Link } from "react-router-dom";
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
            <Link
              className="navbar-brand"
              to="/general"
              style={{ color: this.props.mode === "light" ? "black" : "white" }}
            >
              NewsMonkey
            </Link>
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
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/general"
                    style={{
                      color: this.props.mode === "light" ? "black" : "white",
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/about"
                    style={{
                      color: this.props.mode === "light" ? "black" : "white",
                    }}
                  >
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/business"
                    style={{
                      color: this.props.mode === "light" ? "black" : "white",
                    }}
                  >
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/entertainment"
                    style={{
                      color: this.props.mode === "light" ? "black" : "white",
                    }}
                  >
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/science"
                    style={{
                      color: this.props.mode === "light" ? "black" : "white",
                    }}
                  >
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/sports"
                    style={{
                      color: this.props.mode === "light" ? "black" : "white",
                    }}
                  >
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/technology"
                    style={{
                      color: this.props.mode === "light" ? "black" : "white",
                    }}
                  >
                    Technology
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/help"
                    style={{
                      color: this.props.mode === "light" ? "black" : "white",
                    }}
                  >
                    Help
                  </Link>
                </li>
              </ul>

              {/* DARK MODE BUTTON */}
              {/* ***************************************  */}
              <button
                className="btn btn-dark"
                id="modeButton"
                onClick={this.props.toggleModes}
              >
                {this.props.capitalize(this.props.modeText)}
              </button>
              {/* ************************************************ */}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
