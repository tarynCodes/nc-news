 const ArticleCard = ({articles}) => {
        return (
          <ul>
            {articles.map((article) => (
              <li key={article.id} className="article-card">
                <img src={article.article_img_url} alt={article.title} />
                <div className="article-details">
                 <h3>{article.title}</h3>
                  <p>Author: {article.author}</p>
                <p>Topic: {article.topic}</p>   
               </div>
              </li>
            ))}
          </ul>
        );
      };

export default ArticleCard; 