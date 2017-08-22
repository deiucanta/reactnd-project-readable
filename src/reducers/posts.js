import * as types from '../types'
import { indexById } from '../utils/helper'

export default (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_POST_SUCCESS:
      if (Object.keys(action.post).length === 0) {
        return {
          ...state,
          [action.id]: { notFound: true }
        }
      } else {
        return {
          ...state,
          [action.id]: action.post
        }
      }
    case types.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        ...indexById(action.posts)
      }
    case types.DELETE_POST_SUCCESS:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          deleted: true,
        }
      }
    case types.UP_VOTE_POST_SUCCESS:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          voteScore: state[action.id].voteScore + 1,
        }
      }
    case types.DOWN_VOTE_POST_SUCCESS:
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