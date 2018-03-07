import React from "react";
import { Popup, Image } from "semantic-ui-react";
import FriendMarker from "./FriendMarker";

const FriendLocation = props => {
  let hoverDisplay;
  if (props.$hover) {
    hoverDisplay = "block";
  } else {
    hoverDisplay = "none"; //none
  }

  return (
    <div
      className="friend-location"
      onClick={() => props.onClick(props.friend)}
    >
      <img
        src="http://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-Pic.png"
        alt="You friend is here"
        height="20"
        width="15"
      />
      <div className="hover-display" style={{ display: hoverDisplay }}>
        <span className="friend-display-info">
          <img className="hover-display-pic" src={props.friend.profile_pic} />{" "}
          {props.friend.first_name}
        </span>
      </div>
    </div>
  );
};

export default FriendLocation;
