export default function userReducer(
  state = {
    user: {},
    loading: false,
    loginFormData: {username: "", password: ""}
  },
  action
) {
  switch (action.type) {
    case "USER_LOADING":
      return {
        ...state,
        loading: true
      }
    case "USER_LOAD":
      return {
        ...state,
        user: action.payload,
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
        formData: {...state.formData, ...action.payload}
      }
    case "SET_USER":
      localStorage.setItem('token', action.token)
      return {
        ...state,
        user: action.user,
      }
    case "REMOVE_USER":
      return {
        ...state,
        user: {},
      }
    case "UPDATE_USER_LOCATION":
    return {
      ...state,
      user: {...state.user, ...action.payload}
    }
    default:
      return state;
  }
}
