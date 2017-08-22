import { combineReducers } from 'redux'

import * as types from '../types'
import { indexById } from '../utils/helper'

const categories = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_CATEGORIES_SUCCESS:
      return [
        ...action.categories
      ]
    default:
      return state
  }
}

const posts = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_POST_SUCCESS:
      return {
        ...state,
        [action.post.id]: action.post
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

const postsOrder = (state = 'voteScore', action) => {
  switch (action.type) {
    case types.CHANGE_POSTS_ORDER:
      return action.order
    default:
      return state
  }
}

const comments = (state = {}, action) => {
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

const commentsOrder = (state = 'voteScore', action) => {
  switch (action.type) {
    case types.CHANGE_COMMENTS_ORDER:
      return action.order
    default:
      return state
  }
}

const currentComment = (state = null, action) => {
  switch (action.type) {
    case types.EDIT_COMMENT:
      return action.id
    case types.UPDATE_COMMENT_SUCCESS:
      return null
    default:
      return state
  }
}

export default combineReducers({
  categories,
  posts,
  postsOrder,
  comments,
  commentsOrder,
  currentComment,
})
