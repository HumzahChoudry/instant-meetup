import React from "react";
import { connect } from "react-redux";
import { Card, Image } from "semantic-ui-react";

class Friend extends React.Component {
  componentDidUpdate() {
    console.log("updating");
  }

  render() {
    let num = Math.floor(Math.random() * 10);
    let selectedDisplay = "";

    if (this.props.selectedFriends.includes(this.props.friend)) {
      selectedDisplay = "green";
    }
    return (
      <Card
        color={selectedDisplay}
        onClick={() => this.props.onClick(this.props.friend)}
      >
        <Card.Content>
          <Image
            className="friend-card-image"
            floated="right"
            src={this.props.friend.profile_pic}
          />
          <Card.Header textAlign="left">
            {this.props.friend.first_name} {this.props.friend.last_name}
          </Card.Header>
          <Card.Meta textAlign="left">Friend</Card.Meta>
          <Card.Description textAlign="left">
            A description of this person would be written here
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

// <div className="friend-card">
//   <div className="friend-name">
//     <div>{props.friend.first_name}</div>
//     <div>{props.friend.last_name}</div>
//   </div>
//   <p>{num} mins ago</p>
//   <img className="friend-image" src={props.friend.profile_pic} />
// </div>

const mapStateToProps = state => {
  console.log(state);
  return {
    selectedFriends: state.friendsReducer.selectedFriends
  };
};

export default connect(mapStateToProps)(Friend);
