import React, { useEffect } from 'react';
import ArticleCard from './article-card'
import getArticles from '../Api';


const ArticleContainer = ({ articles, setArticles }) => {
  useEffect(() => {
    getArticles().then((articles) => {
      setArticles(articles);
    });
  }, []);

  return (
    <div>
      <ul className='article-grid'>
        <ArticleCard articles={articles} setArticles={setArticles} />
      </ul>
    </div>
  );
};

export default ArticleContainer;