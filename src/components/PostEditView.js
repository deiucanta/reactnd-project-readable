import React from 'react'
import { connect } from 'react-redux'

import { getPost } from '../selectors'
import EditPostForm from './EditPostForm'
import { fetchPost, updatePost } from '../actions'

class PostEditView extends React.Component {
  componentDidMount() {
    const { match, fetchPost } = this.props
    const id = match.params.id

    fetchPost(id)
  }
  render() {
    const { post, history, updatePost } = this.props

    return post === undefined ? null : (
      <EditPostForm post={post} onSubmit={data => {
        updatePost(post.id, data).then(() => history.push(`/posts/${post.id}`))
      }} />
    )
  }
}

const enhance = connect((state, props) => ({
  post: getPost(state, props.match.params.id),
}), {
  fetchPost,
  updatePost
})

export default enhance(PostEditView)