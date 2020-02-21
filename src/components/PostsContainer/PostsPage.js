//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data
import data from "../../data/dummy-data";

const PostsPage = props => {
  // set up state for your data
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {data
        .filter(post => post.username.includes(props.searchText))
        .map(post => (
          <Post key={post.id} post={post} />
        ))}
    </div>
  );
};

export default PostsPage;
