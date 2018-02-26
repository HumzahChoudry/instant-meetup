import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import '../../css/Map.css';
import MyLocation from './MyLocation'
import { connect } from "react-redux";
import FriendLocation from './FriendLocation'
import MeetupLocation from './MeetupLocation'

class Map extends Component {

  showMap = (friends, meetups) => {
      return <GoogleMapReact
        center={{lat: 40.7128, lng: -74.0060}}
        defaultZoom={10} hoverDistance={100}>
        <MyLocation lat={40.7128} lng={-74} />
        {friends}
        {meetups}
      </GoogleMapReact>

  }

  render() {
    let friends = this.props.friends.map(friend =>    <FriendLocation key={friend.id} lat={40.9} lng={-74.1} />)

    let meetups = this.props.myMeetups.map((meetup, index) =>
    <MeetupLocation key={meetup.id} lat={(40.75 + (index/100))} lng={-74} />)

    let map = this.showMap(friends, meetups)

    return (
      <div className="google-map item" position="relative">
        {map}
      </div>
    );
  }

  componentWillMount(){
    let map = <div></div>
  }
}

const mapStateToProps = (state) => {
  return {
    myMeetups: state.meetupReducer.myMeetups,
    allMeetups: state.meetupReducer.allMeetups,
    friends: state.friendsReducer.friends
  }
}
export default connect(mapStateToProps)(Map)
