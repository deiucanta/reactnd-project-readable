import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { capitalize } from '../utils/helper'
import { fetchCategories } from '../actions'
import { getCategories } from '../selectors'

class Navigation extends React.Component {
  componentDidMount() {
    const { fetchCategories } = this.props

    fetchCategories()
  }
  render() {
    const { categories } = this.props

    return (
      <ul className="nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/submit">Create Post</Link></li>
        <li className="divider"></li>
        {categories.map(category => (
          <li key={category.name}>
            <Link to={`/${category.path}`}>{capitalize(category.name)}</Link>
          </li>
        ))}
      </ul>
    )
  }
}

const enhance = connect(state => ({
  categories: getCategories(state)
}), {
  fetchCategories
})

export default enhance(Navigation)