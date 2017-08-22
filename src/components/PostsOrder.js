import React from 'react'
import { connect } from 'react-redux'

import { getPostsOrder } from '../selectors'
import { changePostsOrder } from '../actions'

const PostsOrder = ({ postsOrder, changePostsOrder }) => (
  <select value={postsOrder} onChange={event => changePostsOrder(event.target.value)}>
    <option value="voteScore">By Score</option>
    <option value="timestamp">By Date</option>
  </select>
)

const enhance = connect(state => ({
  postsOrder: getPostsOrder(state)
}), {
  changePostsOrder
})

export default enhance(PostsOrder)