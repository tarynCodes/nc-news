import {Link} from 'react-router-dom'

const ArticleCard = ({ articles }) => {
  const articleList = articles.map((article) => (
    <li key={article.article_id} className="article-card">
      <Link to={`/article/${article.article_id}`}>
      <img  src={article.article_img_url} alt={article.title} />
      <div  className="article-details">
        <h3>{article.title}</h3>
        <p>Author: {article.author}</p>
        <p>Topic: {article.topic}</p>
      </div>
      <div>
        
      </div>
      </Link>
    </li>
  ));

  return <ul className="article-list">{articleList}</ul>;
};

export default ArticleCard; 

