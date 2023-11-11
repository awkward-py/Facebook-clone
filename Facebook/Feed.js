// components/Feed.js
import React, { useState } from 'react';
import PostForm from './PostForm';
import Post from './Post';

function Feed({ posts }) {
  return (
    <div className="Feed">
      <PostForm />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Feed;
