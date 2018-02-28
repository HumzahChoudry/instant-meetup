import React from "react";

const MeetupDisplay = props => {
  return (
    <div className="">
      <img src={props.meetup.location.photo} />
      <p>Location: {props.meetup.location.name}</p>
      <p>Address: {props.meetup.location.vicinity}</p>
      <p>
        Hosted by: {props.meetup.host.first_name} {props.meetup.host.last_name}
      </p>
    </div>
  );
};

export default MeetupDisplay;
