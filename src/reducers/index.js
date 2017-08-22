import { combineReducers } from 'redux'

import posts from './posts'
import comments from './comments'
import postsOrder from './postsOrder'
import categories from './categories'
import commentsOrder from './commentsOrder'
import currentComment from './currentComment'

export default combineReducers({
  posts,
  comments,
  postsOrder,
  categories,
  commentsOrder,
  currentComment,
})
