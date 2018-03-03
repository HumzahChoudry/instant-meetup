import React from "react";
import MeetupsList from "./MeetupsList";
import { connect } from "react-redux";
import { fetchMeetups, selectAndDisplayMeetup } from "../../actions";

class MeetupsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchMeetups(this.props.user.id);
  }

  render() {
    return (
      <div className="meetups-container">
        <MeetupsList onClick={this.handleOnClick} />
      </div>
    );
  }

  handleOnClick = meetup => {
    this.props.selectAndDisplayMeetup(meetup);
  };
}

export default connect(
  state => ({
    user: state.userReducer.user,
    meetups: state.meetupReducer.meetups
  }),
  { fetchMeetups, selectAndDisplayMeetup }
)(MeetupsContainer);
