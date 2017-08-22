import React from 'react'

import { capitalize } from '../utils/helper'

let titleEl, authorEl, categoryEl, bodyEl

const CreatePostForm = ({ categories, onSubmit }) => (
  <form onSubmit={event => {
    event.preventDefault()
    onSubmit({
      title: titleEl.value,
      author: authorEl.value,
      category: categoryEl.value,
      body: bodyEl.value,
    })
  }}>
    <label className="form-control">
      <span>Title</span>
      <input type="text" ref={input => titleEl = input} />
    </label>
    <label className="form-control">
      <span>Author</span>
      <input type="text" ref={input => authorEl = input} />
    </label>
    <label className="form-control">
      <span>Category</span>
      <select ref={input => categoryEl = input}>
        {categories.map(category => (
          <option key={category.path} value={category.path}>
            {capitalize(category.name)}
          </option>
        ))}
      </select>
    </label>
    <label className="form-control">
      <span>Body</span>
      <textarea rows="10" ref={input => bodyEl = input}></textarea>
    </label>
    <label className="form-control">
      <span>---></span>
      <input type="submit" value="Create Post" />
    </label>
  </form>
)

export default CreatePostForm