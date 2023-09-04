import React, { useEffect } from 'react';
import ArticleCard from './article-card'
import axios from 'axios';

const ArticleContainer = ({articles, setArticles}) => {

  useEffect(() => {
    axios
      .get(`https://taryns-news.onrender.com/api/articles`)
      .then(( {data} ) => {
        setArticles(data.articles);
      })
  }, []);

  return (
    <div >
      <ul className='article-grid'>
        <ArticleCard articles={articles} setArticles={setArticles} />
      </ul>
    </div>
  );
};

export default ArticleContainer;