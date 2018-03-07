import React from "react";
import { connect } from "react-redux";
import UserPicture from "./friends/UserPicture";
const MeetupPage = props => {
  console.log(props);
  let attendees = props.meetup.users.map(user => (
    <UserPicture user={user} key={user.id} />
  ));
  let restaurantName = props.meetup.location.name.split(" ").join("+");
  let restaurantLocation = `@${props.meetup.location.lat},${
    props.meetup.location.lng
  }`;
  let restaurantLink = `https://www.google.com/maps/place/${restaurantName}/{restarestaurantLocation}z/`;

  return (
    <div className="meetup-page">
      <div className="meetup-info">
        <p>
          Location:{" "}
          <a target="_blank" href={restaurantLink}>
            {props.meetup.location.name}
          </a>
        </p>
        <p>Address: {props.meetup.location.vicinity}</p>
        <p>
          Hosted by: {props.meetup.host.first_name}{" "}
          {props.meetup.host.last_name}
        </p>
        <span className="attendees">{attendees}</span>
        <p />
        <img id="display-image" src={props.meetup.location.photo} />
      </div>
    </div>
  );
};

export default connect((state, currentProps) => ({
  meetup: state.meetupReducer.meetups.find(
    meetup => meetup.id === parseInt(currentProps.match.params.id)
  )
}))(MeetupPage);
