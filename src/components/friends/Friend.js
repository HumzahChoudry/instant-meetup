import React from "react";
import { Card } from "semantic-ui-react";

const Friend = props => {
  let num = Math.floor(Math.random() * 10);
  console.log(props);
  return (
    <div className="friend-card">
      <div className="friend-name">
        <div>{props.friend.first_name}</div>
        <div>{props.friend.last_name}</div>
      </div>
      <p>{num} mins ago</p>
      <img className="friend-image" src={props.friend.profile_pic} />
    </div>
  );
};

export default Friend;
