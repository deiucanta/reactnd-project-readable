import React from 'react'

let authorEl, bodyEl

const CreateCommentForm = ({ onSubmit }) => (
  <form onSubmit={event => {
    event.preventDefault()
    onSubmit({
      author: authorEl.value,
      body: bodyEl.value,
    })
    authorEl.value = ''
    bodyEl.value = ''
  }}>
    <label className="form-control">
      <span>Author</span>
      <input type="text" ref={input => authorEl = input} />
    </label>
    <label className="form-control">
      <span>Body</span>
      <textarea rows="5" ref={input => bodyEl = input}></textarea>
    </label>
    <label className="form-control">
      <span>---></span>
      <input type="submit" value="Create Comment" />
    </label>
  </form>
)

export default CreateCommentForm