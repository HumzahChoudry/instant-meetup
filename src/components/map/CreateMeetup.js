import React from "react";

const CreateMeetup = props => {
  return (
    <div className="">
      <button onClick={e => props.onClick(e)}>Create New Meetup</button>
      <span>Public: </span>
      <input id="publicCheckBox" name="public" type="checkbox" value="true" />
      <select name="type">
        <option value="bar">Bar</option>
        <option value="restaurant">Restaurant</option>
        <option value="park">Park</option>
        <option value="movie_theater">Movie Theater</option>
      </select>
    </div>
  );
};

export default CreateMeetup;
