export default function userReducer(
  state = {
    user: {},
    users: [],
    loading: false,
    loginFormData: { username: "", password: "" }
  },
  action
) {
  switch (action.type) {
    case "USER_LOADING":
      return {
        ...state,
        loading: true
      };
    case "USER_LOAD":
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    case "USERS_LOAD":
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case "SELECT_USER":
      return {
        ...state,
        loginFormData: action.payload
      };
    case "UPDATE_USER":
      return {
        ...state,
        formData: { ...state.formData, ...action.payload }
      };
    case "SET_USER":
      console.log("setting user", action);
      if (action.token) {
        localStorage.setItem("token", action.token);
      }
      return {
        ...state,
        user: { ...action.user }
      };
    case "REMOVE_USER":
      return {
        ...state,
        user: {}
      };
    case "UPDATE_USER_LOCATION":
      console.log("IN REDUCER ABOUT TO CHANGE STATE");
      return {
        ...state,
        user: {
          ...state.user,
          current_latitude: action.current_latitude,
          current_longitude: action.current_longitude
        }
      };
    default:
      return state;
  }
}
