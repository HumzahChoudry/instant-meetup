import React from "react";

const FriendLocation = props => {
  let hoverDisplay;
  if (props.$hover) {
    hoverDisplay = "block"; //need to switch this and block back
  } else {
    hoverDisplay = "none";
  }

  return (
    <div className="friend-location">
      <div
        className="hover-display friend-icon"
        style={{ display: hoverDisplay }}
      >
        <img src={props.friend.profile_pic} />
        <div className="friend-name">
          <div>{props.friend.first_name}</div>
          <div>{props.friend.last_name}</div>
        </div>
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
