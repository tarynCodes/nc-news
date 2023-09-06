import {useState, useEffect} from 'react'
import { retriveIndividualArticles } from '../Api'
import {useParams} from 'react-router-dom'
import CommentContainer from './comment-container'


const ArticlePage = ({comments, setComments}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [singleArticle, setSingleArticle] = useState()
    const id = useParams()

    useEffect(() => {
        retriveIndividualArticles(id).then((article) => {
            setSingleArticle(article)
            setIsLoading(false)
        })
    }, []) 

    if(isLoading) return <p>Loading...</p>
    
    return (
       <div>
        <article className="single-Article-page">
        <h1 id="article-heading">{singleArticle.article.title}</h1>
        <h2 id="article-author">{singleArticle.article.author}</h2>
        <img id= "article-image" src={singleArticle.article.article_img_url}/>
        <p id="article-body">{singleArticle.article.body}</p>
       </article>
        <ul>
       <CommentContainer comments={comments} setComments={setComments}/>
       </ul>
    </div>
    )
}

export default ArticlePage;