import React from "react";
import MapContainer from './map/MapContainer'
import FriendsContainer from './friends/FriendsContainer'
import MeetupsContainer from './meetups/MeetupsContainer'
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

  render() {
    return (
      <div>
        Welcome {this.props.user.id ? this.props.user.username : "NO USER"}
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
export default connect(mapStateToProps)(Homepage)
