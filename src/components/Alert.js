import React, { Component } from "react";

export default class Alert extends Component {
  render() {
    return (
      <div style={{ height: "50px" }}>
        {this.props.alert && (
          <div
            className={`alert alert-${this.props.alert.alertType}`}
            role="alert"
          >
            <strong>{this.props.alert.alertMessage}</strong>
          </div>
        )}
      </div>
    );
  }
}