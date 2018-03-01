import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "../../css/Map.css";
import MyLocation from "./MyLocation";
import { connect } from "react-redux";
import FriendLocation from "./FriendLocation";
import MeetupLocation from "./MeetupLocation";
import SelectedMeetup from "./SelectedMeetup";

class Map extends Component {
  showMap = (friends, meetups) => {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCJWxC8L5mK9wrlkILVrNP3RmDT2yEXi6Y" }}
        center={
          !this.props.selectedMeetup
            ? {
                lat: this.props.user.latitude,
                lng: this.props.user.longitude
              }
            : {
                lat: this.props.selectedMeetup.location.lat,
                lng: this.props.selectedMeetup.location.lng
              }
        }
        defaultZoom={10}
        zoom={!this.props.selectedMeetup ? 10 : 15}
        hoverDistance={15}
      >
        <MyLocation
          lat={this.props.user.latitude}
          lng={this.props.user.longitude}
        />
        {this.props.selectedMeetup ? (
          <SelectedMeetup
            key={this.props.selectedMeetup.location.id}
            lat={this.props.selectedMeetup.location.lat}
            lng={this.props.selectedMeetup.location.lng}
          />
        ) : (
          friends
        )}
      </GoogleMapReact>
    );
  };

  render() {
    let friends = this.createFriendMarkers();
    let meetups = this.createMeetupMarkers();
    let map = this.showMap(friends, meetups);

    return (
      <div className="google-map item" position="relative">
        {map}
      </div>
    );
  }

  createFriendMarkers() {
    return this.props.friends.map(friend => (
      <FriendLocation
        friend={friend}
        key={friend.id}
        lat={friend.current_latitude}
        lng={friend.current_longitude}
      />
    ));
  }
  createMeetupMarkers() {
    return this.props.myMeetups.map((meetup, index) => (
      <MeetupLocation key={meetup.id} lat={40.75 + index / 100} lng={-74} />
    ));
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    myMeetups: state.meetupReducer.myMeetups,
    allMeetups: state.meetupReducer.allMeetups,
    selectedMeetup: state.meetupReducer.selectedMeetup,
    display: state.meetupReducer.display,
    friends: state.friendsReducer.friends
  };
};
export default connect(mapStateToProps)(Map);
