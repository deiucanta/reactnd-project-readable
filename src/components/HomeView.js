import React from 'react'
import { connect } from 'react-redux'

import PostsList from './PostsList'
import PostsOrder from './PostsOrder'
import { fetchPosts } from '../actions'
import { getPosts } from '../selectors'

class HomeView extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(fetchPosts())
  }
  render() {
    const { posts } = this.props

    return (
      <div>
        <h1>All Posts</h1>
        <PostsOrder />
        <PostsList posts={posts} />
      </div>
    )
  }
}

const enhance = connect(state => ({
  posts: getPosts(state)
}))

export default enhance(HomeView)