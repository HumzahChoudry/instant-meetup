import RestfulAdapter from "../adapters";

export function fetchFriends(id) {
  return dispatch => {
    dispatch({ type: "FRIENDS_LOADING" });
    RestfulAdapter.showFetch(`friendships`, id).then(data => {
      dispatch({ type: "FRIENDS_LOAD", payload: data });
    });
  };
}
export function fetchMeetups(id) {
  return dispatch => {
    dispatch({ type: "MEETUPS_LOADING" });
    RestfulAdapter.showFetch(`meetups`, id).then(data => {
      dispatch({ type: "MEETUPS_LOAD", payload: data });
    });
  };
}

export function createMeetup(id, selectedFriends, pub, keyword) {
  return dispatch => {
    dispatch({ type: "CREATING_MEETUP" });
    RestfulAdapter.createFetch("meetups", {
      user_id: id,
      selectedFriends: selectedFriends,
      public: pub,
      keyword: keyword
    }).then(meetup => {
      dispatch({ type: "ADD_NEW_MEETUP", payload: meetup });
      dispatch({ type: "SELECT_MEETUP", payload: meetup });
      dispatch({ type: "DISPLAY_MEETUP", payload: meetup });
    });
  };
}
export function updateMeetupUsers(meetup) {
  return dispatch => {
    RestfulAdapter.editFetch("meetups", meetup.id, {
      users: meetup.users
    }).then(meetup => {
      console.log(meetup);
      dispatch({ type: "UPDATE_MEETUP", payload: meetup });
    });
  };
}

export function selectAndDisplayMeetup(meetup) {
  return dispatch => {
    dispatch({ type: "SELECT_MEETUP", payload: meetup });
    dispatch({ type: "DISPLAY_MEETUP", payload: meetup });
  };
}
export function signup(user, history) {
  return dispatch => {
    RestfulAdapter.authPost("signup", {
      user
    })
      .then(json => {
        if (json.error) {
          alert(json.error);
        } else {
          console.log("return from signup post ", json.user);
          dispatch({ type: "SET_USER", user: json.user, token: json.token });
        }
      })
      .then(history.push("/home"));
  };
}
export function login(loginInfo) {
  console.log("start login");
  return dispatch => {
    RestfulAdapter.authPost("login", {
      username: loginInfo.username,
      password: loginInfo.password
    }).then(json => {
      console.log("in my .then");
      if (json.error) {
        alert(json.error);
      } else {
        dispatch({ type: "SET_USER", user: json.user, token: json.token });
      }
    });
  };
}
export function logout() {
  return dispatch => {
    dispatch({ type: "REMOVE_USER" });
  };
}
export function setUser() {
  return dispatch => {
    RestfulAdapter.getLoggedInUser("get_current_user").then(hash => {
      if (hash) {
        dispatch({ type: "SET_USER", user: hash.user, token: hash.token });
      } else {
        console.log("token returned null, render login page");
      }
    });
  };
}

export function updateUserLocation(position, user) {
  return dispatch => {
    RestfulAdapter.editFetch("user/location", user.id, {
      current_latitude: position.coords.latitude,
      current_longitude: position.coords.longitude
    }).then(updated_user => {
      console.log("about to update location in action", updated_user);
      dispatch({
        type: "UPDATE_USER_LOCATION",
        current_latitude: updated_user.current_latitude,
        current_longitude: updated_user.current_longitude
      });
    });
  };
}

export function removeMeetupDisplay() {
  return dispatch => {
    dispatch({ type: "REMOVE_MEETUP_DISPLAY" });
  };
}

export function unselectMeetup() {
  return dispatch => {
    dispatch({ type: "UNSELECT_MEETUP" });
  };
}

export function updateLoginForm(loginFormData) {
  return { type: "UPDATE_LOGIN_FORM", payload: loginFormData };
}
export function updateSignupForm(signupFormData) {
  return { type: "UPDATE_SIGNUP_FORM", payload: signupFormData };
}

export function selectFriend(friend) {
  return dispatch => {
    dispatch({ type: "SELECT_FRIEND", payload: friend });
  };
}
export function deselectFriend(friend) {
  return dispatch => {
    dispatch({ type: "DESELECT_FRIEND", payload: friend });
  };
}
