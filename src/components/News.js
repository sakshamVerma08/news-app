import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }

  async updateNews(pageNo) {
    console.log("Page No = " + pageNo);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1c25bff69eb04ec897bfe32b7ef6cb2d&page=${pageNo}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    this.updateNews(this.state.page);
  }

  handlePrevClick = async () => {
    if (this.state.page < 1) {
      console.log("Cant go back");
    } else {
      this.updateNews(this.state.page - 1);
      this.setState({ page: this.state.page - 1 });
    }
  };

  handleNextClick = async () => {
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.state.pageSize)
    ) {
    } else {
      this.updateNews(this.state.page + 1);
      this.setState({ page: this.state.page + 1 });
    }
  };

  render() {
    return (
      <>
        <div
          className="container my-3"
          style={{ color: this.props.mode === "light" ? "black" : "white" }}
        >
          <h1 className="text-center">NewsMonkey - Top Headlines</h1>
          {this.state.loading && <Spinner />}

          <div className="row">
            {!this.state.loading &&
              this.state.articles?.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      mode={this.props.mode}
                      modeText={this.props.modeText}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            className={`btn btn-${
              this.props.mode === "light" ? "primary" : "light"
            }`}
            onClick={this.handlePrevClick}
            disabled={this.state.page <= 1}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className={`btn btn-${
              this.props.mode === "light" ? "primary" : "light"
            }`}
            onClick={this.handleNextClick}
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
          >
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
}

export default News;
