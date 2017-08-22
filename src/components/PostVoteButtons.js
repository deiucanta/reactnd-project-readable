import React from 'react'
import { connect } from 'react-redux'

import { upVotePost, downVotePost } from '../actions'

const PostVoteButtons = ({ postId, upVotePost, downVotePost }) => (
  <span>
    <button onClick={() => upVotePost(postId)}>UP</button>
    <button onClick={() => downVotePost(postId)}>DOWN</button>
  </span>
)

const enhance = connect(null, {
  upVotePost,
  downVotePost,
})

export default enhance(PostVoteButtons)