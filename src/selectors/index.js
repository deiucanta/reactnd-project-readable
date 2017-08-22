export const getCategories = state => state.categories

export const getPost = (state, id) => state.posts[id]

export const getPosts = state => Object.values(state.posts)
  .filter(post => post.deleted === false)
  .filter(post => post.notFound !== true)
  .sort((a, b) => a[state.postsOrder] < b[state.postsOrder])

export const getPostsByCategory = (state, category) => getPosts(state)
  .filter(post => post.category === category)

export const getComments = (state, id) => Object.values(state.comments)
  .filter(post => post.deleted === false)
  .filter(comment => comment.parentId === id)
  .sort((a, b) => a[state.commentsOrder] < b[state.commentsOrder])

export const getCommentsCount = (state, id) => getComments(state, id).length

export const getPostsOrder = state => state.postsOrder
export const getCommentsOrder = state => state.commentsOrder
export const getCurrentComment = state => state.currentComment