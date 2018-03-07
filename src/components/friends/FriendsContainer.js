import React from "react";
import FriendsList from "./FriendsList";
import FriendSearch from "./FriendSearch";
import { connect } from "react-redux";
import {
  fetchFriends,
  fetchAllUsers,
  selectFriend,
  deselectFriend,
  unselectMeetup
} from "../../actions";

class FriendsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchFriends(this.props.user.id);
    this.props.fetchAllUsers();
  }

  render() {
    return (
      <div className="friends-container">
        <FriendSearch />
        <FriendsList handleOnClick={this.selectOrDeselectFriend} />
      </div>
    );
  }

  selectOrDeselectFriend = friend => {
    if (this.props.selectedFriends.includes(friend)) {
      this.props.deselectFriend(friend);
    } else {
      this.props.selectFriend(friend);
    }
    if (this.props.selectedMeetup) {
      this.props.unselectMeetup();
    }
  };
}

export default connect(
  state => ({
    user: state.userReducer.user,
    users: state.userReducer.users,
    friends: state.friendsReducer.friends,
    selectedFriends: state.friendsReducer.selectedFriends,
    selectedMeetup: state.meetupReducer.selectedMeetup
  }),
  { fetchFriends, fetchAllUsers, selectFriend, deselectFriend, unselectMeetup }
)(FriendsContainer);
