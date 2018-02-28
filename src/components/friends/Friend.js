import React from "react";

const Friend = props => {
  return (
    <div className="">
      {props.friend.first_name}
      lat: {props.friend.current_latitude}
      lng: {props.friend.current_longitude}
    </div>
  );
};

export default Friend;
