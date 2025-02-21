import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  // This is used to set the default value for props, in case no value is passed
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  // The code below sets the propTypes, which are like data types for the reactJS props.
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  // Capitalize function is used to convert a lowercase string to uppercase.
  capitalize = (str) => {
    let newStr = str[0].toUpperCase() + str.slice(1, str.length);
    return newStr;
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };

    document.title = `${this.capitalize(this.props.category)} - NewsMonkey`;
  }

  // UpdateNews function is used to update the news-
  async updateNews() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1c25bff69eb04ec897bfe32b7ef6cb2d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    console.log(url);
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(35);

    let parsedData = await data.json();
    console.log(parsedData);
    this.props.setProgress(50);

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });

    this.props.setProgress(70);
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updateNews(this.state.page);
  }

  handlePrevClick = async () => {
    if (this.state.page < 1) {
    } else {
      this.setState({ page: this.state.page - 1 });
      this.updateNews();
    }
  };

  handleNextClick = async () => {
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.state.pageSize)
    ) {
    } else {
      this.setState({ page: this.state.page + 1 });
      this.updateNews();
    }
  };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1c25bff69eb04ec897bfe32b7ef6cb2d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  render() {
    return (
      <>
        <div
          className="container my-3"
          style={{ color: this.props.mode === "light" ? "black" : "white" }}
        >
          <h1 className="text-center">
            NewsMonkey - Top Headlines from{" "}
            {this.capitalize(this.props.category)} Category
          </h1>
          {this.state.loading && <Spinner />}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner />}
          >
            <div className="container">
              <div className="row">
                {this.state.articles?.map((element, index) => {
                  return (
                    <div className="col-md-4" key={element.url || index}>
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
          </InfiniteScroll>
          {/* <div className="container d-flex justify-content-between">
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
          </div> */}
        </div>
      </>
    );
  }
}

export default News;
