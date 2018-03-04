import React from "react";

const MeetupDisplay = props => {
  let restaurantName = props.meetup.location.name.split(" ").join("+");
  let restaurantLocation = `@${props.meetup.location.lat},${
    props.meetup.location.lng
  }`;
  let restaurantLink = `https://www.google.com/maps/place/${restaurantName}/{restarestaurantLocation}z/`;
  let inMeetup = props.meetup.users.filter(user => user.id === props.user.id)
    .length;
  return (
    <div className="meetup-display ">
      <span className="close" onClick={props.closeModal}>
        &times;
      </span>
      <div className="meetup-display-content">
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
          {inMeetup < 1 ? (
            <button onClick={e => props.addUserToMeetup(e, props.meetup)}>
              Join!
            </button>
          ) : (
            <p>
              You're attending!{" "}
              <button
                onClick={e => props.removeUserFromMeetup(e, props.meetup)}
              >
                Leave
              </button>
            </p>
          )}
        </p>
        <img id="display-image" src={props.meetup.location.photo} />
      </div>
    </div>
  );
};

export default MeetupDisplay;
