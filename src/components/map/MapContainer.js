import React from "react";
import Map from "./Map";
import MeetupDisplay from "./MeetupDisplay";
import CreateMeetup from "./CreateMeetup";
import { connect } from "react-redux";
import {
  createMeetup,
  removeMeetupDisplay,
  updateMeetupUsers,
  unselectMeetup
} from "../../actions";

class MapContainer extends React.Component {
  render() {
    return (
      <div className="map-container">
        <Map />
        {this.props.display ? (
          <MeetupDisplay
            meetup={this.props.selectedMeetup}
            closeModal={this.props.removeMeetupDisplay}
            user={this.props.user}
            addUserToMeetup={this.addUserToMeetup}
            removeUserFromMeetup={this.removeUserFromMeetup}
          />
        ) : (
          <CreateMeetup onClick={this.handleCreate} />
        )}
      </div>
    );
  }

  addUserToMeetup = (e, meetup) => {
    meetup.users.push(this.props.user);
    this.props.updateMeetupUsers(meetup);
    this.props.removeMeetupDisplay();
  };
  removeUserFromMeetup = (e, meetup) => {
    let newUsers = meetup.users.filter(user => user.id !== this.props.user.id);
    meetup.users = newUsers;
    this.props.updateMeetupUsers(meetup);
    this.props.removeMeetupDisplay();
    this.props.unselectMeetup();
  };

  handleCreate = e => {
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
  { createMeetup, removeMeetupDisplay, updateMeetupUsers, unselectMeetup }
)(MapContainer);
