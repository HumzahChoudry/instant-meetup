import React from "react"
import Friend from './Friend'

const FriendsList = (props) => {

  const friends = props.friends.map(friend => <Friend friend={friend} />)
  return (
  <div className="">
    {friends}
  </div>
  )
}

export default FriendsList
