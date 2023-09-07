import {useState, useEffect} from 'react'
import { retriveIndividualArticles, patchVotes } from '../Api'
import {useParams} from 'react-router-dom'
import CommentContainer from './comment-container'

const ArticlePage = ({comments, setComments}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [singleArticle, setSingleArticle] = useState()
    const [votes, setVotes] = useState()
    const [err, setErr] = useState (null)
    const id = useParams()

    useEffect(() => {
        retriveIndividualArticles(id).then(({article}) => {
            setSingleArticle({article})
            setVotes(article.votes)
            setIsLoading(false)
        })
    }, []) 

    const handleVote = (vote) => {
        setVotes((currVotes) => currVotes + vote)
         setErr(null)
          patchVotes(id, vote).catch((err) => {
            setVotes((currVotes) => currVotes - vote)
            setErr("Something went wrong, please try again!")
          })
    }

    if(isLoading) return <p>Loading...</p>
    
    return (
        <div>
        <article className="single-Article-page">
        <h1 id="article-heading">{singleArticle.article.title}</h1>
        <h2 id="article-author">{singleArticle.article.author}</h2>
        <img id= "article-image" src={singleArticle.article.article_img_url}/>
        <p id="article-body">{singleArticle.article.body}</p>
        <p id="article-votes">Votes: {votes}</p>
            {err && <div className="error">{err}</div>}
        <button className="upvote" onClick={() => {
            handleVote(1)}}> <span>&#128420;  </span></button> 
        <button  className="downvote" onClick={() => {
            handleVote(-1)}}> <span>&#x1F44E;  </span></button>
       </article>
        <ul>
       <CommentContainer comments={comments} setComments={setComments}/>
       </ul>
    </div>
    )
}

export default ArticlePage;