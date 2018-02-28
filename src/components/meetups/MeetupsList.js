import React from "react";
import Meetup from "./Meetup";
import { connect } from "react-redux";

const MeetupsList = props => {
  // const myMeetups = props.myMeetups.map(meetup => <Meetup key={meetup.id} meetup={meetup} />)

  return <div className="" />;
};

const mapStateToProps = state => {
  return {
    myMeetups: state.meetupReducer.myMeetups,
    allMeetups: state.meetupReducer.allMeetups
  };
};
export default connect(mapStateToProps)(MeetupsList);
