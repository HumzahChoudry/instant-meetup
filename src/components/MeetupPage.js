import React from "react";
import { connect } from "react-redux";

const MeetupPage = props => {
  console.log(props);
  return <div className="">Hello</div>;
};

export default connect((state, currentProps) => ({
  meetup: state.meetupReducer.meetups.find(
    meetup => meetup.id === parseInt(currentProps.match.params.id)
  )
}))(MeetupPage);
