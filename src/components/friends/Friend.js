import React from "react"

const Friend = (props) => {
  console.log("a friend! ", props.friend);
  return (
  <div className="">
    {props.friend.first_name}
    lat: {props.friend.current_latitude}
    lng: {props.friend.current_longitude}
  </div>
  )
}

export default Friend
