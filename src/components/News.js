import React, { useEffect, useState, updateNews } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const { country, pageSize, category } = props;
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalize = (str) => {
    let newStr = str[0].toUpperCase() + str.slice(1, str.length);
    return newStr;
  };

  document.title = `${capitalize(props.category)} - NewsMonkey`;

  const updateNews = async () => {
    try {
      props.setProgress(10);
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1c25bff69eb04ec897bfe32b7ef6cb2d&page=${page}&pageSize=${props.pageSize}`;
      setLoading(true);
      let data = await fetch(url);
      props.setProgress(35);

      if (!data.ok) {
        throw new Error(`HTTP error! status: ${data.status}`);
      }

      let parsedData = await data.json();
      props.setProgress(50);
      console.log(parsedData);
      console.log("Above is the parsed Data"); // Log the parsed data to check its structure
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);

      props.setProgress(70);
      props.setProgress(100);
    } catch (error) {
      console.error("Error fetching the news:", error);
    }
  };

  useEffect(() => {
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    try {
      setPage(page + 1);
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1c25bff69eb04ec897bfe32b7ef6cb2d&page=${page}&pageSize=${props.pageSize}`;
      let data = await fetch(url);

      if (!data.ok) {
        throw new Error(`HTTP error! status: ${data.status}`);
      }

      let parsedData = await data.json();
      console.log(parsedData); // Log the parsed data to check its structure
      setArticles(articles.concat(parsedData.articles));
      setLoading(false);
      setTotalResults(parsedData.totalResults);
    } catch (error) {
      console.error("Error fetching more news:", error);
    }
  };

  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1 className="text-center">
          NewsMonkey - Top Headlines from {capitalize(props.category)} Category
        </h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {articles?.map((element) => {
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
                      mode={props.mode}
                      modeText={props.modeText}
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
      </div>
    </>
  );
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
