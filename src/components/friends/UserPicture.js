import React from "react";

const UserPicture = props => {
  return (
    <div className="attendee">
      <img className="attendee-photo" src={props.user.profile_pic} />
    </div>
  );
};

export default UserPicture;
