import React from "react";

const FriendLocation = props => {
  let hoverDisplay;
  if (props.$hover) {
    hoverDisplay = "none"; //need to switch this and block back
  } else {
    hoverDisplay = "block";
  }

  return (
    <div className="friend-location">
      <div className="hover-display" style={{ display: hoverDisplay }}>
        <img src={props.friend.profile_pic} />
        <span>Hello</span>
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
