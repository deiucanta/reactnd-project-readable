import React from 'react'
import { connect } from 'react-redux'

import { getCommentsOrder } from '../selectors'
import { changeCommentsOrder } from '../actions'

const CommentsOrder = ({ commentsOrder, changeCommentsOrder }) => (
  <select value={commentsOrder} onChange={event => changeCommentsOrder(event.target.value)}>
    <option value="voteScore">By Score</option>
    <option value="timestamp">By Date</option>
  </select>
)

const enhance = connect(state => ({
  commentsOrder: getCommentsOrder(state)
}), {
  changeCommentsOrder
})

export default enhance(CommentsOrder)