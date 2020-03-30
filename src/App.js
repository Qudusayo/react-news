import React, { Component } from 'react';

import Title from "./Components/Title";
import Footer from "./Components/Footer";
import Newscard from "./Components/Newscard";

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

const API_KEY = 'd2bf70fc52e94930abf6c324ba453b88'; 


class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      "articles": []
    };
    
  }
  

  componentDidMount (){
    const getNews = async () => {
      const api_call = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);

      const response = await api_call.json();
        this.setState({
        "articles": response.articles
      });
    };
    getNews();
  }
 
  render() {
    return (
      <div className="App">
        <Title />
        <div className="album py-5 bg-light">
          <h1 className="jumbotron-heading text-capitalize text-center">TOP HEADLINES</h1><br/>
          <div className="container">
            <div className="row">
              {
                this.state.articles.map((news, index) => {
                  return <Newscard 
                  image = {news.urlToImage}
                  title = {news.title}
                  source = {news.source.name}
                  content = {news.description}
                  time = {news.publishedAt.slice(0, 10)}
                  location = {news.url}
                  key = {news.url}
                  />
                })
              }
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;