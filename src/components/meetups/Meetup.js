import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const Meetup = props => {
  return (
    <Card>
      <Image src={props.meetup.location.photo} />
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
  );
};

export default Meetup;
