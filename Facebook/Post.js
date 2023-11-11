// components/Post.js
import React from 'react';

function Post({ post }) {
  return (
    <div className="Post card mb-3">
      <div className="card-body">
        <h5 className="card-title">{post.user}</h5>
        <p className="card-text">{post.content}</p>
      </div>
    </div>
  );
}

export default Post;
