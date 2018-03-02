import React from "react";
import FriendsList from "./FriendsList";
import { connect } from "react-redux";
import { fetchFriends } from "../../actions";

class FriendsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchFriends(this.props.user.id);
  }

  render() {
    return (
      <div className="friends-container">
        <FriendsList />
      </div>
    );
  }
}

export default connect(
  state => ({
    user: state.userReducer.user,
    friends: state.friendsReducer.friends
  }),
  { fetchFriends }
)(FriendsContainer);
