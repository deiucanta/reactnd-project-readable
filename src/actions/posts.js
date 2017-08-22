import hat from 'hat'

import api from '../utils/api'
import * as types from '../types'
import { fetchComments } from './comments'

export const fetchPosts = (category = null) => dispatch => {
  dispatch({ type: types.FETCH_POSTS })
  const req = category ? api.get(`/${category}/posts`) : api.get('/posts')
  req.then(posts => {
    dispatch({ type: types.FETCH_POSTS_SUCCESS, posts })
    posts.forEach(post => dispatch(fetchComments(post.id)))
  })
}

export const fetchPost = id => dispatch => {
  dispatch({ type: types.FETCH_POST, id })
  api.get(`/posts/${id}`).then(post => {
    dispatch({ type: types.FETCH_POST_SUCCESS, id, post })
  })
}

export const changePostsOrder = order => ({
  type: types.CHANGE_POSTS_ORDER,
  order
})

export const createPost = data => dispatch => {
  dispatch({ type: types.CREATE_POST })
  return api.post('/posts', {
    id: hat(),
    timestamp: Date.now(),
    ...data
  }).then(post => {
    dispatch({ type: types.CREATE_POST_SUCCESS, post })
    return post
  })
}

export const updatePost = (id, data) => dispatch => {
  dispatch({ type: types.UPDATE_POST })
  return api.put(`/posts/${id}`, data).then(post => {
    dispatch({ type: types.UPDATE_POST_SUCCESS, post })
    return post
  })
}

export const deletePost = id => dispatch => {
  dispatch({ type: types.DELETE_POST })
  return api.delete(`/posts/${id}`).then(() => {
    dispatch({ type: types.DELETE_POST_SUCCESS, id })
  })
}

export const upVotePost = id => dispatch => {
  dispatch({ type: types.UP_VOTE_POST })
  return api.post(`/posts/${id}`, { option: 'upVote' }).then(() => {
    dispatch({ type: types.UP_VOTE_POST_SUCCESS, id })
  })
}

export const downVotePost = id => dispatch => {
  dispatch({ type: types.DOWN_VOTE_POST })
  return api.post(`/posts/${id}`, { option: 'downVote' }).then(() => {
    dispatch({ type: types.DOWN_VOTE_POST_SUCCESS, id })
  })
}
