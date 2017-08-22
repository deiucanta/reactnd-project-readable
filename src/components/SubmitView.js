import React from 'react'
import { connect } from 'react-redux'

import { createPost } from '../actions'
import { getCategories } from '../selectors'
import CreatePostForm from './CreatePostForm'

const SubmitView = ({ categories, createPost, history }) => (
  <CreatePostForm categories={categories} onSubmit={data => {
    createPost(data).then(post => history.push(`/${post.category}/${post.id}`))
  }} />
)

const enhance = connect(state => ({
  categories: getCategories(state)
}), {
  createPost
})

export default enhance(SubmitView)