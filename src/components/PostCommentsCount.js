import React from 'react'
import { connect } from 'react-redux'

import { getCommentsCount } from '../selectors'

const PostCommentsCount = ({ count }) => (
  <span>{count}</span>
)

const enhance = connect((state, props) => ({
  count: getCommentsCount(state, props.postId)
}))

export default enhance(PostCommentsCount)