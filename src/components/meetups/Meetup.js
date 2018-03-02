import React from "react";

const Meetup = props => {
  return <div className="meetup-card">{props.meetup.host_id}</div>;
};

export default Meetup;
