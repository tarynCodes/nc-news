const CommentCard = ({comments}) => {
    if(comments.length === 0) return <p>No comments yet!</p>
    const commentList = comments.map((comment) => (
        <li key={comment.comment_id} className="comment-card">
            <h3>{comment.author}</h3>
            <p>{comment.body}</p>
            <h4>{comment.votes}</h4>
            <h5>{comment.created_at}</h5>
        </li>
    ))
   
    return <ul>{commentList}</ul>
}

export default CommentCard; 