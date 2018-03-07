import React from "react";
import MapContainer from "./map/MapContainer";
import FriendsContainer from "./friends/FriendsContainer";
import MeetupsContainer from "./meetups/MeetupsContainer";
import { connect } from "react-redux";
import { Redirect } from "react-router";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          Welcome {this.props.user.id ? this.props.user.firstname : "NO USER"}!
        </div>
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
