import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import { getComments} from '../Api'
import CommentCard from './comment-card';

const CommentContainer= () => {
    const [isLoading, setIsLoading] = useState(true)
    const [comments, setComments] = useState([])
    const id = useParams()

    useEffect(() => {
      getComments(id).then((comments) => {
            setComments(comments)
            setIsLoading(false)
        })
    }, []) 

    if(isLoading) return <p>Loading...</p>
    
    return(
        <div>
            <ul className='comment-grid'>
                <CommentCard comments={comments} setComments={setComments}/>
            </ul>
        </div>
    )
}

export default CommentContainer;