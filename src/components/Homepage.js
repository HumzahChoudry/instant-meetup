import React from "react";
import MapContainer from "./map/MapContainer";
import FriendsContainer from "./friends/FriendsContainer";
import MeetupsContainer from "./meetups/MeetupsContainer";
import { connect } from "react-redux";
import { Redirect } from "react-router";

class Homepage extends React.Component {
  render() {
    console.log("rendering homepage", this.props.user);
    return (
      <div>
        <p>
          Welcome {this.props.user.id ? this.props.user.username : "NO USER"}
        </p>
        <p>
          lat: {this.props.user.latitude ? this.props.user.latitude : "NO LAT"}
        </p>
        <p>
          lng:{" "}
          {this.props.user.longitude ? this.props.user.longitude : "NO LNG"}
        </p>
        {this.props.user.id ? (
          <div className="homepage">
            <FriendsContainer />
            <MapContainer />
            <MeetupsContainer />
          </div>
        ) : (
          <Redirect to="/login" />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.userReducer.user };
};

//could add map dispatch to props and create UPDATE USER LOCATION
export default connect(mapStateToProps)(Homepage);
