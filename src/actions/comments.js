import hat from 'hat'

import api from '../utils/api'
import * as types from '../types'

export const fetchComments = id => dispatch => {
  dispatch({ type: types.FETCH_COMMENTS })
  api.get(`/posts/${id}/comments`).then(comments => {
    dispatch({ type: types.FETCH_COMMENTS_SUCCESS, comments })
  })
}

export const changeCommentsOrder = order => ({
  type: types.CHANGE_COMMENTS_ORDER,
  order
})

export const createComment = (parentId, data) => dispatch => {
  dispatch({ type: types.CREATE_COMMENT })
  return api.post('/comments', {
    id: hat(),
    timestamp: Date.now(),
    parentId,
    ...data
  }).then(comment => {
    dispatch({ type: types.CREATE_COMMENT_SUCCESS, comment })
    return comment
  })
}

export const updateComment = (id, data) => dispatch => {
  dispatch({ type: types.UPDATE_COMMENT })
  return api.put(`/comments/${id}`, data).then(comment => {
    dispatch({ type: types.UPDATE_COMMENT_SUCCESS, comment })
    return comment
  })
}

export const deleteComment = id => dispatch => {
  dispatch({ type: types.DELETE_COMMENT })
  return api.delete(`/comments/${id}`).then(() => {
    dispatch({ type: types.DELETE_COMMENT_SUCCESS, id })
  })
}

export const editComment = id => ({
  type: types.EDIT_COMMENT,
  id
})

export const upVoteComment = id => dispatch => {
  dispatch({ type: types.UP_VOTE_COMMENT })
  return api.post(`/comments/${id}`, { option: 'upVote' }).then(() => {
    dispatch({ type: types.UP_VOTE_COMMENT_SUCCESS, id })
  })
}

export const downVoteComment = id => dispatch => {
  dispatch({ type: types.DOWN_VOTE_COMMENT })
  return api.post(`/comments/${id}`, { option: 'downVote' }).then(() => {
    dispatch({ type: types.DOWN_VOTE_COMMENT_SUCCESS, id })
  })
}