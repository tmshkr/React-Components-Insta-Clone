// look at the likes on this component. Right now it is hard coded on line 20.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
// HINT: You will need to add an onClick event pass through your props and update the hard coded Likes
import React, { useState, memo } from "react";
import "./LikeSection.css";

const LikeSection = props => {
  const [liked, setLiked] = useState(false);
  return (
    <div>
      <div className="like-section" key="likes-icons-container">
        <div className="like-section-wrapper">
          <i
            className={`${liked ? "fas" : "far"} fa-heart like-button`}
            style={liked ? { color: "#f44336" } : null}
            onClick={() => setLiked(!liked)}
          />
        </div>
        <div className="like-section-wrapper">
          <i className="far fa-comment" />
        </div>
      </div>
      <p className="like-number">
        {liked ? props.likes + 1 : props.likes} likes
      </p>
    </div>
  );
};

export default memo(LikeSection);
