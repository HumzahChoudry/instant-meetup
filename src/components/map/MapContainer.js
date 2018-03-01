import React from "react";
import Map from "./Map";
import MeetupDisplay from "./MeetupDisplay";
import { connect } from "react-redux";
import { createMeetup, removeMeetupDisplay } from "../../actions";

class MapContainer extends React.Component {
  render() {
    return (
      <div className="map-container">
        <Map />
        {this.props.display ? (
          <MeetupDisplay
            meetup={this.props.selectedMeetup}
            closeModal={this.props.removeMeetupDisplay}
          />
        ) : (
          <button onClick={this.handleClick}>Create hangout Session!</button>
        )}
      </div>
    );
  }

  handleClick = () => {
    this.props.createMeetup(this.props.user.id);
  };
}

export default connect(
  state => ({
    user: state.userReducer.user,
    friends: state.friendsReducer.friends,
    selectedMeetup: state.meetupReducer.selectedMeetup,
    display: state.meetupReducer.display
  }),
  { createMeetup, removeMeetupDisplay }
)(MapContainer);
