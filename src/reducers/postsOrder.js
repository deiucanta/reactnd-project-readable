import * as types from '../types'

export default (state = 'voteScore', action) => {
  switch (action.type) {
    case types.CHANGE_POSTS_ORDER:
      return action.order
    default:
      return state
  }
}