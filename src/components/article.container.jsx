import { useState, useEffect } from 'react';
import ArticleCard from './article-card'
import { getArticles } from '../Api';


const ArticleContainer = ({ articles, setArticles }) => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    getArticles().then((articles) => {
      setArticles(articles);
      setIsLoading(false)
    });
  }, []);

  if (isLoading) return <p>Loading...</p>

  return (
    <div>
      <ul className='article-grid'>
        <ArticleCard articles={articles} setArticles={setArticles} />
      </ul>
    </div>
  );
};

export default ArticleContainer;