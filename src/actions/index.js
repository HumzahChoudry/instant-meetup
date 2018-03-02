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
      dispatch({ type: "MY_MEETUPS_LOAD", payload: data });
    });
  };
}

export function createMeetup(id) {
  return dispatch => {
    dispatch({ type: "CREATING_MEETUP" });
    RestfulAdapter.createFetch("meetups", { user_id: id }).then(meetup => {
      dispatch({ type: "ADD_NEW_MEETUP", payload: meetup });
      dispatch({ type: "SELECT_MEETUP", payload: meetup });
      dispatch({ type: "DISPLAY_MEETUP", payload: meetup });
    });
  };
}

export function login(loginInfo) {
  return dispatch => {
    RestfulAdapter.login("login", {
      username: loginInfo.username,
      password: loginInfo.password
    }).then(json => {
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

export function updateUserLocation(user) {
  return dispatch => {
    RestfulAdapter.editFetch("users", user.id, {
      current_latitude: user.latitude,
      current_longitude: user.longitude
    }).then(updated_user => {
      dispatch({ type: "SET_USER", user: updated_user });
    });
  };
}

export function removeMeetupDisplay() {
  return dispatch => {
    dispatch({ type: "REMOVE_MEETUP_DISPLAY" });
  };
}

export function updateLoginForm(loginFormData) {
  return { type: "UPDATE_LOGIN_FORM", payload: loginFormData };
}
