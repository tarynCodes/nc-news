import {useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom'
import { getComments} from '../Api'
import CommentCard from './comment-card';
import { UserContext } from '../context/user-context';
import { postNewComment } from '../Api';

const CommentContainer= () => {
    const { user } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(true)
    const [comments, setComments] = useState([])
    const [postComment, setPostComment] = useState({})
    const [err, setErr] = useState (null)
    const id = useParams()

    const handleInput = (event) => {
        setPostComment(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        postNewComment(id, postComment, user).then((newComment) => {
            setComments((currComments) => {
            return [...currComments, newComment]}) 
        })
        .catch((err) => {
            console.log(err)
            setErr("Something went wrong, please try again!")
        })
    }


    useEffect(() => {
      getComments(id).then((comments) => {
            setComments(comments)
            setIsLoading(false)
        })
    }, [comments]) 

    if(isLoading) return <p>Loading...</p>
    
    if (comments) return(
        <div>
            <ul className='comment-grid'>
                <CommentCard comments={comments} setComments={setComments}/>
            </ul>
        {err && <div className="error">{err}</div>}
            <form className='post-comment'onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label htmlFor='body'>New Comment:</label>
                        <input type="text" name="comment" id="comment" onChange={handleInput}/>
                    </li>
                       <label htmlFor='username'>commenting as {user}</label>
                       <li className='submit-comment-button'>
                            <button type='submit'>Post Comment</button>
                       </li>
                </ul>
            </form>
        </div>
    )
}

export default CommentContainer;