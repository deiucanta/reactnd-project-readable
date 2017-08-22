import React from 'react'
import dateFormat from 'dateformat'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import CommentsList from './CommentsList'
import CommentsOrder from './CommentsOrder'
import PostVoteButtons from './PostVoteButtons'
import CreateCommentForm from './CreateCommentForm'
import {
  getPost,
  getComments,
  getCurrentComment
} from '../selectors'
import {
  fetchPost,
  fetchComments,
  deletePost,
  createComment,
  editComment,
  updateComment,
  deleteComment,
} from '../actions'

class PostView extends React.Component {
  componentDidMount() {
    const { match, fetchPost, fetchComments } = this.props
    const id = match.params.id

    fetchPost(id)
    fetchComments(id)
  }
  handleEdit() {
    const { history, post } = this.props
    history.push(`/posts/${post.id}/edit`)
  }
  handleDelete() {
    const { history, post, deletePost } = this.props
    deletePost(post.id).then(() => {
      history.push(`/`)
    })
  }
  handleCreateComment(data) {
    const { post, createComment } = this.props
    createComment(post.id, data)
  }
  handleUpdateComment(id, data) {
    const { updateComment } = this.props
    updateComment(id, data)
  }
  handleDeleteComment(id) {
    const { deleteComment } = this.props
    deleteComment(id)
  }
  handleEditComment(id) {
    const { editComment } = this.props
    editComment(id)
  }
  render() {
    const { post, comments, currentComment } = this.props

    if (post === undefined) return null
    if (post.notFound) return <div>404: not found</div>

    return (
      <div>
        <h1>{post.title}</h1>
        <ul>
          <li>Author {post.author}</li>
          <li>Score {post.voteScore} <PostVoteButtons postId={post.id} /></li>
          <li>Posted {dateFormat(new Date(post.timestamp), 'dddd, mmmm dS, yyyy, h:MM:ss TT')}</li>
          <li>
            <button onClick={this.handleEdit.bind(this)}>edit</button>
            <button onClick={this.handleDelete.bind(this)}>delete</button>
          </li>
        </ul>
        <p>{post.body}</p>
        <hr />
        <CreateCommentForm onSubmit={this.handleCreateComment.bind(this)} />
        <hr />
        <CommentsOrder />
        <CommentsList
          comments={comments}
          currentComment={currentComment}
          onEditComment={this.handleEditComment.bind(this)}
          onUpdateComment={this.handleUpdateComment.bind(this)}
          onDeleteComment={this.handleDeleteComment.bind(this)}
        />
      </div>
    )
  }
}

const enhance = connect((state, props) => ({
  post: getPost(state, props.match.params.id),
  comments: getComments(state, props.match.params.id),
  currentComment: getCurrentComment(state),
}), {
  fetchPost,
  fetchComments,
  deletePost,
  createComment,
  editComment,
  updateComment,
  deleteComment,
})

export default enhance(PostView)