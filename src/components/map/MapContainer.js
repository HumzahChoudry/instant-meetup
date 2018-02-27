import React from "react";
import Map from './Map'
import { connect } from "react-redux";
import { createMeetup } from "../../actions";

class MapContainer extends React.Component {

  render() {
    return (
      <div className="map-container">
        <Map />
        <button onClick={this.handleClick}>Create hangout Session!</button>
      </div>
    )
  }

  handleClick = () => {
    this.props.createMeetup(this.props.user.id)
  }
}

export default connect((state) => ({user: state.userReducer.user, friends: state.friendsReducer.friends}), { createMeetup })(MapContainer)
