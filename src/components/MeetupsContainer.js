import React from "react";
import MeetupsList from './MeetupsList'

class MeetupsContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      meetups: []
    }
  }

  render() {
    return (
      <div>
        <MeetupsList meetups={this.state.meetups} />
      </div>
    )
  }

  fetchMyMeetups() {
    fetch()
  }
}
export default MeetupsContainer
