import React from 'react'
import { connect } from 'react-redux'

import PostsList from './PostsList'
import PostsOrder from './PostsOrder'
import { fetchPosts } from '../actions'
import { capitalize } from '../utils/helper'
import { getPostsByCategory } from '../selectors'

class CategoryView extends React.Component {
  componentDidMount() {
    const { match, fetchPosts } = this.props
    const category = match.params.category

    fetchPosts(category)
  }
  render() {
    const { posts, match } = this.props
    const category = match.params.category

    return (
      <div>
        <h1>{capitalize(category)} Posts</h1>
        <PostsOrder />
        <PostsList posts={posts} />
      </div>
    )
  }
}

const enhance = connect((state, props) => ({
  posts: getPostsByCategory(state, props.match.params.category)
}), {
  fetchPosts
})

export default enhance(CategoryView)