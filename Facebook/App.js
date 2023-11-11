// App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Add your custom styles here
import Feed from './components/Feed';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, user: 'John Doe', content: 'Hello, World!' },
    { id: 2, user: 'Jane Smith', content: 'This is a Facebook clone.' },
    // Add more posts as needed
  ]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Facebook Clone</h1>
      </header>
      <main className="container">
        <div className="row">
          <div className="col-md-8">
            <Feed posts={posts} />
          </div>
          <div className="col-md-4">
            {/* Sidebar or additional components */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
