import React from "react";
import { Button } from "semantic-ui-react";

const CreateMeetup = props => {
  return (
    <div className="create-meetup-div">
      <Button
        id="create-meetup-button"
        onClick={e => props.onClick(e)}
        fluid="true"
        size="huge"
      >
        Gather!{" "}
      </Button>
      <div className="meetup-options">
        <p>
          <label>Venue Type </label>
          <select name="type">
            <option value="bar">Bar</option>
            <option value="restaurant">Restaurant</option>
            <option value="park">Park</option>
            <option value="movie_theater">Movie Theater</option>
          </select>
          <label> Public: </label>
          <input
            id="publicCheckBox"
            name="public"
            type="checkbox"
            value="true"
          />
        </p>
      </div>
    </div>
  );
};

export default CreateMeetup;
