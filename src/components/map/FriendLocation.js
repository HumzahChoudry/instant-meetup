import React from "react";
import { Comment } from "semantic-ui-react";

const FriendLocation = props => {
  console.log(props);
  let hoverDisplay;
  if (props.$hover) {
    hoverDisplay = "block";
  } else {
    hoverDisplay = "none";
  }

  return (
    <div className="friend-location">
      <div className="hover-display" style={{ display: hoverDisplay }}>
        <img src={props.friend.profile_pic} />
        <p>{props.friend.first_name}</p>
      </div>
      <img
        src="http://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-Pic.png"
        alt="You friend is here"
        height="20"
        width="15"
      />
    </div>
  );
};

export default FriendLocation;
