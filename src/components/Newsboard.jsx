import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const Newsboard = ({category}) => {

    const [articles, setArticles] = useState([]);

    useEffect(() =>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=31e71555a76042f5a48d4e0ea0f2def5`
        fetch(url)
        .then((response) => response.json())
      .then((data) => setArticles(data.articles))
      .catch((error) => console.error('Error fetching data:', error));
    },[category])
  return (
    <div>
      <h2 className="text-center">Latest <span className="badge text-bg-danger">News</span></h2>
      {articles.map((news, index) =>{
        return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
      })}
    </div>
  )
}

export default Newsboard
