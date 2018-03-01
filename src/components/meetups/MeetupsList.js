import React from "react";
import Meetup from "./Meetup";
import { connect } from "react-redux";

const MeetupsList = props => {
  const myMeetups = props.myMeetups.map(meetup => (
    <Meetup key={meetup.id} meetup={meetup} />
  ));

  return <div className="meetup-list">{myMeetups}</div>;
};

const mapStateToProps = state => {
  return {
    myMeetups: state.meetupReducer.myMeetups,
    publicMeetups: state.meetupReducer.publicMeetups
  };
};
export default connect(mapStateToProps)(MeetupsList);
