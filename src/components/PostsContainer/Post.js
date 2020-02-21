// You will add code in this file
import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = props => {
  // set up state for the likes
  const { comments, likes, imageUrl, username, thumbnailUrl } = props.post;

  return (
    <div className="post-border">
      <PostHeader username={username} thumbnailUrl={thumbnailUrl} />
      <div className="post-image-wrapper">
        <img alt="post thumbnail" className="post-image" src={imageUrl} />
      </div>
      <LikeSection likes={likes} />
      <CommentSection postId={imageUrl} comments={comments} />
    </div>
  );
};

export default Post;
