import * as types from '../types'

export default (state = [], action) => {
  switch (action.type) {
    case types.FETCH_CATEGORIES_SUCCESS:
      return [
        ...action.categories
      ]
    default:
      return state
  }
}
