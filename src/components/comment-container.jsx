import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import { getComments} from '../Api'

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
            <ul>
                map here for comments. - create a comment-card
               im a list of comments
            </ul>
        </div>
    )
}

export default CommentContainer;