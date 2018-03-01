import React from "react";
import { Card, Image } from "semantic-ui-react";

const Friend = props => {
  let num = Math.floor(Math.random() * 10);
  return (
    <Card className="friend-card">
      <Card.Content>
        <Image
          className="friend-card-image"
          floated="right"
          src={props.friend.profile_pic}
        />
        <Card.Header textAlign="left">
          {props.friend.first_name} {props.friend.last_name}
        </Card.Header>
        <Card.Meta textAlign="left">Friends of Elliot</Card.Meta>
        <Card.Description textAlign="left">
          A description of this person would be written here
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

// <div className="friend-card">
//   <div className="friend-name">
//     <div>{props.friend.first_name}</div>
//     <div>{props.friend.last_name}</div>
//   </div>
//   <p>{num} mins ago</p>
//   <img className="friend-image" src={props.friend.profile_pic} />
// </div>

export default Friend;
