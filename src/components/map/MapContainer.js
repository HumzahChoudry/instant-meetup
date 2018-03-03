import React from "react";
import Map from "./Map";
import MeetupDisplay from "./MeetupDisplay";
import CreateMeetup from "./CreateMeetup";
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
          <CreateMeetup onClick={this.handleClick} />
        )}
      </div>
    );
  }

  handleClick = e => {
    let checked = e.target.parentElement.childNodes[2].checked;
    let keyword = e.target.parentElement.childNodes[3].value;
    this.props.createMeetup(
      this.props.user.id,
      this.props.selectedFriends,
      checked,
      keyword
    );
  };
}

export default connect(
  state => ({
    user: state.userReducer.user,
    friends: state.friendsReducer.friends,
    selectedFriends: state.friendsReducer.selectedFriends,
    selectedMeetup: state.meetupReducer.selectedMeetup,
    display: state.meetupReducer.display
  }),
  { createMeetup, removeMeetupDisplay }
)(MapContainer);
