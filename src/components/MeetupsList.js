import React from "react"
import Meetup from './Meetup'

const MeetupsList = (props) => {
  const meetups = props.meetups.map(meetup => <Meetup meetup={meetup} />)
  return (
  <div className="">

  </div>
  )
}

export default MeetupsList
