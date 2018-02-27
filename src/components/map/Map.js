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
        bootstrapURLKeys={{key: 'AIzaSyCJWxC8L5mK9wrlkILVrNP3RmDT2yEXi6Y'}}
        center={{lat: 40.7128, lng: -74.0060}}
        defaultZoom={10} hoverDistance={100}>
        <MyLocation lat={this.props.user.latitude} lng={this.props.user.longitude} />
        {friends}
      </GoogleMapReact>
  }

  render() {
    let friends = this.props.friends.map(friend =>    <FriendLocation key={friend.id} lat={friend.current_latitude} lng={friend.current_longitude} />)
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
    user: state.userReducer.user,
    myMeetups: state.meetupReducer.myMeetups,
    allMeetups: state.meetupReducer.allMeetups,
    friends: state.friendsReducer.friends
  }
}
export default connect(mapStateToProps)(Map)
