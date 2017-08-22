import api from '../utils/api'
import * as types from '../types'

export const fetchCategories = () => dispatch => {
  dispatch({ type: types.FETCH_CATEGORIES })
  api.get('/categories').then(({ categories }) => {
    dispatch({ type: types.FETCH_CATEGORIES_SUCCESS, categories })
  })
}
