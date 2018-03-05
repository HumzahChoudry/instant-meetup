import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Icon, Image } from "semantic-ui-react";

const Meetup = props => {
  return (
    <Link to={`meetup/${props.meetup.id}`} className="meetup-card">
      <Card>
        <Image
          src={props.meetup.location.photo}
          className="meetup-card-image"
        />
        <Card.Content>
          <Card.Header>{props.meetup.location.name}</Card.Header>
          <Card.Meta>{props.meetup.location.vicinity}</Card.Meta>
          <Card.Description>Location Description</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            {props.meetup.users.length}
          </a>
        </Card.Content>
      </Card>
    </Link>
  );
};

export default connect(state => ({
  meetups: state.meetupReducer.meetups,
  publicMeetups: state.meetupReducer.publicMeetups,
  selectedMeetup: state.meetupReducer.selectedMeetup,
  display: state.meetupReducer.display
}))(Meetup);
