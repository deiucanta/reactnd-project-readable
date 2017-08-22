import * as types from '../types'

export default (state = null, action) => {
  switch (action.type) {
    case types.EDIT_COMMENT:
      return action.id
    case types.UPDATE_COMMENT_SUCCESS:
      return null
    default:
      return state
  }
}
