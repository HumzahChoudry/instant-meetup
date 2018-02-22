import React from "react";
import FriendsList from './FriendsList'

class FriendsContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      friends: []
    }
  }

  render() {
    return (
      <div>
        <FriendsList friends={this.state.friends}/>
      </div>
    )
  }

  fetchFriends = () => {
    fetch()
  }
}
export default FriendsContainer
