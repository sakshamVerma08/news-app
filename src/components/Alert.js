import React, { Component } from "react";

export default class Alert extends Component {
  render() {
    return (
      <div style={(height = "50px")}>
        <div class={`alert alert-${this.props.alertType}`} role="alert">
          <strong>
            {this.props.capitalize(this.props.currentMode)} has been Enabled
          </strong>
        </div>
      </div>
    );
  }
}
