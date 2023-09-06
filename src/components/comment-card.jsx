const CommentCard = ({comments}) => {
    console.log(comments)
    const commentList = comments.map((comment) => (
        <li key={comment.id} className="comment-card">
            <h3>{comment.author}comment author</h3>
            <p>{comment.body}</p>
            <h4>{comment.votes}</h4>
            <h5>{comment.created_at}</h5>
        </li>
    ))
   
    return <ul>{commentList}</ul>
}

export default CommentCard; 