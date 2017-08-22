import hat from 'hat'

import * as types from '../types'
import api from '../utils/api'

export const fetchCategories = () => dispatch => {
  dispatch({ type: types.FETCH_CATEGORIES })
  api.get('/categories').then(({ categories }) => {
    dispatch({ type: types.FETCH_CATEGORIES_SUCCESS, categories })
  })
}

export const fetchPosts = (category = null) => dispatch => {
  dispatch({ type: types.FETCH_POSTS })
  const req = category ? api.get(`/${category}/posts`) : api.get('/posts')
  req.then(posts => {
    dispatch({ type: types.FETCH_POSTS_SUCCESS, posts })
    posts.forEach(post => dispatch(fetchComments(post.id)))
  })
}

export const fetchPost = id => dispatch => {
  dispatch({ type: types.FETCH_POST })
  api.get(`/posts/${id}`).then(post => {
    dispatch({ type: types.FETCH_POST_SUCCESS, post })
  })
}

export const fetchComments = id => dispatch => {
  dispatch({ type: types.FETCH_COMMENTS })
  api.get(`/posts/${id}/comments`).then(comments => {
    dispatch({ type: types.FETCH_COMMENTS_SUCCESS, comments })
  })
}

export const changePostsOrder = order => ({
  type: types.CHANGE_POSTS_ORDER,
  order
})

export const changeCommentsOrder = order => ({
  type: types.CHANGE_COMMENTS_ORDER,
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