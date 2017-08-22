import React from 'react'

let bodyEl

const EditCommentForm = ({ onSubmit, comment }) => (
  <form onSubmit={event => {
    event.preventDefault()
    onSubmit({
      body: bodyEl.value,
    })
  }}>
    <label className="form-control">
      <span>Body</span>
      <textarea rows="5" ref={input => bodyEl = input} defaultValue={comment.body}></textarea>
    </label>
    <label className="form-control">
      <span>---></span>
      <input type="submit" value="Update Comment" />
    </label>
  </form>
)

export default EditCommentForm