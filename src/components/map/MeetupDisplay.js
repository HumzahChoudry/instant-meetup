import React from "react"

const MeetupDisplay = (props) => {
  console.log(props);
  return (
  <div className="">
    <p>Location: {props.meetup.location.name}</p>
    <p>Address: {props.meetup.location.vicinity}</p>
    <p>Hosted by: {props.meetup.host.first_name} {props.meetup.host.last_name}</p>
  </div>
  )
}

export default MeetupDisplay
