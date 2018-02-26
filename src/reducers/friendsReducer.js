export default function friendReducer(
  state = {
    friends: [],
    selectedFriend: null,
    loading: false
  },
  action
) {
  switch (action.type) {
    case "FRIENDS_LOADING":
      return {
        ...state,
        loading: true
      }
    case "FRIENDS_LOAD":
      return {
        ...state,
        friends: action.payload,
        loading: false
      };
    case "SELECT_FRIEND":
      return {
        ...state,
        formData: action.payload
      };
    case "UPDATE_FRIEND":
      return {
        ...state,
        formData: {...state.formData, ...action.payload}
      }
    case "SET_FRIENDS":

      return {
        ...state,
        friends: state.friends.map(friend => {
          if(friend.id === action.payload.id) {
            return action.payload
          } else {
            return friend
          }
        })
      }
    default:
      return state;
  }
}
