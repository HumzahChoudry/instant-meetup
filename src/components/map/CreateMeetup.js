import React from "react";
import { Button } from "semantic-ui-react";

const CreateMeetup = props => {
  return (
    <div className="create-meetup-div">
      <button id="create-meetup-button" onClick={e => props.onClick(e)}>
        Create New Meetup{" "}
      </button>
      <span>Public: </span>
      <input id="publicCheckBox" name="public" type="checkbox" value="true" />
      <label>Venue Type</label>
      <select name="type">
        <option value="bar">Bar</option>
        <option value="restaurant">Restaurant</option>
        <option value="park">Park</option>
        <option value="movie_theater">Movie Theater</option>
      </select>
      {/*<Button size="huge" basic color="teal" onClick={e => props.onClick(e)}>
        Gather!
      </Button>*/}
    </div>
  );
};

export default CreateMeetup;
