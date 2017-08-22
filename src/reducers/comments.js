import * as types from '../types'
import { indexById } from '../utils/helper'

export default (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        ...indexById(action.comments),
      }
    case types.CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        [action.comment.id]: action.comment,
      }
    case types.UPDATE_COMMENT_SUCCESS:
      return {
        ...state,
        [action.comment.id]: action.comment,
      }
    case types.DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          deleted: true,
        }
      }
    case types.UP_VOTE_COMMENT_SUCCESS:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          voteScore: state[action.id].voteScore + 1,
        }
      }
    case types.DOWN_VOTE_COMMENT_SUCCESS:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          voteScore: state[action.id].voteScore - 1,
        }
      }
    default:
      return state
  }
}