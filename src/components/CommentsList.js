import React from 'react'
import dateFormat from 'dateformat'

import EditCommentForm from './EditCommentForm'
import CommentVoteButtons from './CommentVoteButtons'

const CommentsList = ({ comments, currentComment, onEditComment, onUpdateComment, onDeleteComment }) => (
  <div>
    {comments.map(comment => (
      <div key={comment.id}>
        <hr />
        <ul>
          <li>Author {comment.author}</li>
          <li>Score {comment.voteScore} <CommentVoteButtons commentId={comment.id} /></li>
          <li>Posted {dateFormat(new Date(comment.timestamp), 'dddd, mmmm dS, yyyy, h:MM:ss TT')}</li>
          <li>
            <button onClick={() => onEditComment(comment.id)}>edit</button>
            <button onClick={() => onDeleteComment(comment.id)}>delete</button>
          </li>
        </ul>
        {currentComment === comment.id ? (
          <EditCommentForm comment={comment} onSubmit={data => {
            onUpdateComment(comment.id, data)
          }} />
        ) : (
          <p>{comment.body}</p>
        )}
      </div>
    ))}
  </div>
)

export default CommentsList