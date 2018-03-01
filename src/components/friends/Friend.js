import React from "react";
import { Label } from "semantic-ui-react";

const Friend = props => {
  return (
    <div>
      <Label as="a" color="blue" image>
        <img src={props.friend.profile_pic} />
        {props.first_name} {props.last_name}
        <Label.Detail>Friend</Label.Detail>
      </Label>
    </div>
  );
};

export default Friend;
