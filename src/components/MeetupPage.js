import React from "react";
import { connect } from "react-redux";

const MeetupPage = props => {
  console.log(props);

  return (
    <div className="meetup-page">
      <div className="">
        <p>
          Location: <a target="_blank">{props.meetup.location.name}</a>
        </p>
        <p>Address: {props.meetup.location.vicinity}</p>
        <p>
          Hosted by: {props.meetup.host.first_name}{" "}
          {props.meetup.host.last_name}
          {0 < 1 ? (
            <button onClick={e => props.addUserToMeetup(e, props.meetup)}>
              Join!
            </button>
          ) : (
            <p>
              You're attending!{" "}
              <button
                onClick={e => props.removeUserFromMeetup(e, props.meetup)}
              >
                Leave
              </button>
            </p>
          )}
        </p>
        <img id="display-image" src={props.meetup.location.photo} />
      </div>
    </div>
  );
};

export default connect((state, currentProps) => ({
  meetup: state.meetupReducer.meetups.find(
    meetup => meetup.id === parseInt(currentProps.match.params.id)
  )
}))(MeetupPage);
