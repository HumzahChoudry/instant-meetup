import React from "react";
import MeetupsList from "./MeetupsList";
import { connect } from "react-redux";
import { fetchMeetups } from "../../actions";

class MeetupsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchMeetups(this.props.user.id);
  }

  render() {
    return (
      <div className="meetups-container">
        <MeetupsList />
      </div>
    );
  }
}

export default connect(
  state => ({
    user: state.userReducer.user,
    myMeetups: state.meetupReducer.myMeetups
  }),
  { fetchMeetups }
)(MeetupsContainer);
