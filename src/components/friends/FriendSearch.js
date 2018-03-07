import React from "react";
import { Search } from "semantic-ui-react";
import _ from "lodash";
import { connect } from "react-redux";
import { addFriend } from "../../actions";

class FriendSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      value: "",
      results: [],
      selectedFriend: null
    };
  }

  componentWillMount() {
    this.resetComponent();
  }

  resetComponent = () =>
    this.setState({
      isLoading: false,
      results: [],
      value: "",
      selectedFriend: null
    });

  handleResultSelect = (e, { result }) => {
    this.setState(
      { value: "", selectedFriend: result.id },
      this.handleAddFriend(result.id)
    );
  };

  handleAddFriend = id => {
    this.props.addFriend({
      friendId: id,
      user: this.props.user
    });
  };

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      const re = new RegExp(_.escapeRegExp(this.state.value), this.state.users);
      const isMatch = result => re.test(result.first_name);
      this.setState({
        isLoading: false,
        results: _.filter(this.props.users, isMatch)
      });
    }, 500);
  };

  resultsRenderer = props => {
    return (
      <div className="search-result">
        <div className="search-result-text">
          {props.first_name} {props.last_name}
        </div>{" "}
        <img className="search-result-image" src={props.profile_pic} />{" "}
      </div>
    );
  };

  render() {
    const { isLoading, value, results, users } = this.state;
    return (
      <div>
        <Search
          loading={isLoading}
          onResultSelect={this.handleResultSelect}
          onSearchChange={this.handleSearchChange}
          resultRenderer={this.resultsRenderer}
          results={results}
          value={value}
        />
      </div>
    );
  }
}

export default connect(
  state => ({
    user: state.userReducer.user,
    users: state.userReducer.users,
    friends: state.friendsReducer.friends
  }),
  { addFriend }
)(FriendSearch);
