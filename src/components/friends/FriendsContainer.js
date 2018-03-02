import React from "react";
import FriendsList from "./FriendsList";
import { connect } from "react-redux";
import { fetchFriends, selectFriend, deselectFriend } from "../../actions";

class FriendsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchFriends(this.props.user.id);
  }

  render() {
    return (
      <div className="friends-container">
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
  };
}

export default connect(
  state => ({
    user: state.userReducer.user,
    friends: state.friendsReducer.friends,
    selectedFriends: state.friendsReducer.selectedFriends
  }),
  { fetchFriends, selectFriend, deselectFriend }
)(FriendsContainer);
