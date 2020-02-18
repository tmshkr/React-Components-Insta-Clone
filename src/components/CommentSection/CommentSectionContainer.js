// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comments, setComments] = useState(props.comments);
  const [newComment, setComment] = useState("");

  function submitComment(e) {
    e.preventDefault();
    const copy = [...comments];
    copy.push({
      username: "demo_user",
      text: newComment
    });
    setComments(copy);
    setComment("");
  }

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {comments.map((comment, i) => (
        <Comment key={i} comment={comment} />
      ))}
      <CommentInput
        comment={newComment}
        submitComment={submitComment}
        setComment={setComment}
      />
    </div>
  );
};

export default CommentSection;
