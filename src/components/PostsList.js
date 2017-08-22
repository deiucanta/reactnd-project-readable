import React from 'react'
import { Link } from 'react-router-dom'

import PostVoteButtons from './PostVoteButtons'
import PostCommentsCount from './PostCommentsCount'

const PostsList = ({ posts }) => (
  <ol>
    {posts.map(post => (
      <li key={post.id}>
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
        <ul>
          <li>Score: {post.voteScore}</li>
          <li>Comments <PostCommentsCount postId={post.id} /></li>
          <li><PostVoteButtons postId={post.id} /></li>
        </ul>
      </li>
    ))}
  </ol>
)

export default PostsList