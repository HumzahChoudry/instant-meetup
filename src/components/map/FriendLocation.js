import React from "react";
import { Popup, Image } from "semantic-ui-react";
import FriendMarker from "./FriendMarker";

const FriendLocation = props => {
  let hoverDisplay;
  if (props.$hover) {
    hoverDisplay = "block"; //need to switch this and block back
  } else {
    hoverDisplay = "none";
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
        <img src={props.friend.profile_pic} />
        <span>Hello</span>
      </div>
    </div>
  );
};

// debugger;
// return (
//   <Popup
//     trigger={
//       <div>
//         <img
//           width="50"
//           height="50"
//           src="http://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-Pic.png"
//         />
//       </div>
//     }
//   >
//     <Popup.Header>Friend Name</Popup.Header>
//     <Popup.Content />
//   </Popup>

export default FriendLocation;
