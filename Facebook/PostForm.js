// components/PostForm.js
import React, { useState } from 'react';

function PostForm({ onAddPost }) {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim() === '') return;
    onAddPost({ id: Date.now(), user: 'Current User', content });
    setContent('');
  };

  return (
    <div className="PostForm">
      <form onSubmit={handleSubmit}>
        <textarea
          className="form-control"
          placeholder="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" className="btn btn-primary mt-2">
          Post
        </button>
      </form>
    </div>
  );
}

export default PostForm;
