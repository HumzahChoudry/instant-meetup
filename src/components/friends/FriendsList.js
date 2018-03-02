import React from "react";
import Friend from "./Friend";
import { connect } from "react-redux";
import { selectFriend, deselectFriend } from "../../actions";

const FriendsList = props => {
  const friends = props.friends.map(friend => (
    <Friend key={friend.id} friend={friend} onClick={props.handleOnClick} />
  ));
  return <div className="friends-list">{friends}</div>;
};

const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends
  };
};
export default connect(mapStateToProps)(FriendsList);
