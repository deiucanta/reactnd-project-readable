import React from 'react'
import { connect } from 'react-redux'

import { upVoteComment, downVoteComment } from '../actions'

const CommentVoteButtons = ({ commentId, upVoteComment, downVoteComment }) => (
  <span>
    <button onClick={() => upVoteComment(commentId)}>UP</button>
    <button onClick={() => downVoteComment(commentId)}>DOWN</button>
  </span>
)

const enhance = connect(null, {
  upVoteComment,
  downVoteComment,
})

export default enhance(CommentVoteButtons)