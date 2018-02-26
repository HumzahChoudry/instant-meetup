import React from "react"
import Friend from './Friend'
import { connect } from "react-redux";

const FriendsList = (props) => {

const friends = props.friends.map(friend => <Friend key={friend.id} friend={friend} />)
  return (
  <div className="friends-list">
    {friends}
  </div>
  )
}

const mapStateToProps = (state) => {
  return {friends: state.friendsReducer.friends}
}
export default connect(mapStateToProps)(FriendsList)
