import React from "react";

// USE PROPS TO BRING MODE STATE FROM NAVBAR COMPONENT

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, mode, source } =
    props;
  return (
    <div className="my-3">
      <div
        className={`card bg-${props.mode === "light" ? "light" : "secondary"}`}
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <span
          style={{ left: "90%", zIndex: "1" }}
          className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
        >
          {source}
          {console.log(source)}
        </span>
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
          <p
            className="card-text"
            style={{ color: mode === "light" ? "black" : "white" }}
          >
            <small>
              By- {!author ? "Unknown" : author} On -{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>

          <a
            href={newsUrl}
            rel="noreferrer"
            target="_blank"
            className={`btn btn-sm btn-${
              props.mode === "light" ? "primary" : "dark"
            }`}
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
