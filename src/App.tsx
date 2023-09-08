import "./App.css";
import React from "react";
import { PostList } from "./features/post-list/postList";
import { PostCard } from "./post.date";

function App() {
  return (
    <div className="app">
      <PostList postCard={PostCard} />
    </div>
  );
}

export default App;
