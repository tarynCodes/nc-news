import React, { useEffect } from "react";
import ArticleCard from "./article-card";


const ArticleContainer = ({ articles, setArticles }) => {
  useEffect(() => {
    axios
      .get(`https://taryns-news.onrender.com/api/articles`)
      .then(({data}) => {
       return setArticles(data.articles);
      })
  }, []);
  return (
    <div>
      <ul className="article-grid">
        <ArticleCard articles={articles} setArticles={setArticles} />
      </ul>
    </div>
  );
};

export default ArticleContainer;
zz