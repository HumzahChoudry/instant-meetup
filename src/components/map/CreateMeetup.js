import React from "react";
import { Button } from "semantic-ui-react";

const CreateMeetup = props => {
  return (
    <form className="create-meetup-div" onSubmit={e => props.onClick(e)}>
      <Button
        id="create-meetup-button"
        type="submit"
        fluid="true"
        size="huge"
        content={
          <img
            src={require("../../css/gather-nav.png")}
            className="brand-logo"
          />
        }
      />
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
    </form>
  );
};

export default CreateMeetup;
