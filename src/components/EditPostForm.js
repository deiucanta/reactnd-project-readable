import React from 'react'

let titleEl, bodyEl

const EditPostForm = ({ onSubmit, post }) => (
  <form onSubmit={event => {
    event.preventDefault()
    onSubmit({
      title: titleEl.value,
      body: bodyEl.value,
    })
  }}>
    <label className="form-control">
      <span>Title</span>
      <input type="text" ref={input => titleEl = input} defaultValue={post.title} />
    </label>
    <label className="form-control">
      <span>Body</span>
      <textarea rows="10" ref={input => bodyEl = input} defaultValue={post.body}></textarea>
    </label>
    <label className="form-control">
      <span>---></span>
      <input type="submit" value="Update Post" />
    </label>
  </form>
)

export default EditPostForm