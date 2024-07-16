import React, { Component } from "react";

// USE PROPS TO BRING MODE STATE FROM NAVBAR COMPONENT

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="my-3">
        <div
          className={`card bg-${
            this.props.mode === "light" ? "light" : "secondary"
          }`}
          style={{
            color: this.props.mode === "light" ? "black" : "white",
          }}
        >
          <img
            src={
              !imageUrl
                ? "https://as1.ftcdn.net/v2/jpg/03/27/55/60/1000_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className={`btn btn-sm btn-${
                this.props.mode === "light" ? "primary" : "dark"
              }`}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
