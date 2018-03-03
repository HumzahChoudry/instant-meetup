import React from "react";
import Meetup from "./Meetup";
import { connect } from "react-redux";

const MeetupsList = props => {
  const meetups = props.meetups.map(meetup => (
    <Meetup key={meetup.id} meetup={meetup} onClick={props.onClick} />
  ));

  return <div className="meetup-list">{meetups}</div>;
};

const mapStateToProps = state => {
  return {
    meetups: state.meetupReducer.meetups,
    publicMeetups: state.meetupReducer.publicMeetups
  };
};
export default connect(mapStateToProps)(MeetupsList);
