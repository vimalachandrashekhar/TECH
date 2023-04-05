import React, { Component } from "react";

class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      isLoading: true,
      error: null
    };
  }

  componentDidMount() {
    const API_KEY = "d4ff5c9775dc4edb87f918532b2fa55f"; // Replace with your own NEWS API key
    const API_URL = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey={d4ff5c9775dc4edb87f918532b2fa55}f';

    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        this.setState({
          articles: data.articles,
          isLoading: false
        });
      })
      .catch(error => {
        this.setState({
          error: error,
          isLoading: false
        });
      });
  }

  render() {
    const { articles, isLoading, error } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error.message}</div>;
    }

    return (
      <div>
        {articles.map(article => (
          <div key={article.url}>
            <h2>{article.title}</h2>
            <img src={article.urlToImage} alt={article.title} />
            <p>{article.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default News;
