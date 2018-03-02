import React from "react";
import { Popup, Card, Image } from "semantic-ui-react";

const FriendLocation = props => {
  let hoverDisplay;
  if (props.$hover) {
    hoverDisplay = "block"; //need to switch this and block back
  } else {
    hoverDisplay = "none";
  }

  return (
    <div className="friend-location">
      <Image src="http://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-Pic.png" />
    </div>
  );
};

const x = () => {
  return (
    <Popup trigger={FriendLocation}>
      <Popup.Header>Friend Name</Popup.Header>
      <Popup.Content />
    </Popup>
  );
};

export default FriendLocation;
