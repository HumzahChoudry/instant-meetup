import React from "react";
import MapContainer from './map/MapContainer'
import FriendsContainer from './friends/FriendsContainer'
import MeetupsContainer from './meetups/MeetupsContainer'
import { updateUserLocation } from '../actions'
import {connect} from 'react-redux'
import {Redirect} from 'react-router'




class Homepage extends React.Component {

  // componentWillMount(){
  //     navigator.geolocation.getCurrentPosition(this.addLocationToState);
  // }
  //
  // addLocationToState = (position) => {
  //   //NEEDS TO BE A USER ACTION THAT POSTS TO THE DB AND UPDATES STATE
  //   this.setState({
  //     user_lat: position.coords.latitude,
  //     user_lon: position.coords.longitude
  //   })
  // }

  componentDidMount() {
    // if (this.props.user.id) {
    //   this.props.updateUserLocation(this.props.user)
    // }
  }

  render() {
    return (
      <div>
        <p>Welcome {this.props.user.id ? this.props.user.username : "NO USER"}</p>
        <p>lat: {this.props.user.latitude ? this.props.user.latitude : "NO LAT"}</p>
        <p>lng: {this.props.user.longitude ? this.props.user.longitude : "NO LNG"}</p>
        {this.props.user.id ?
          <div className="homepage">
            <FriendsContainer />
            <MapContainer />
            <MeetupsContainer />
          </div> :
        <Redirect to="/login" />}
      </div>
    )
  }


}

const mapStateToProps = (state) => {
  return {user: state.userReducer.user}
}

//could add map dispatch to props and create UPDATE USER LOCATION
export default connect(mapStateToProps, {updateUserLocation})(Homepage)
