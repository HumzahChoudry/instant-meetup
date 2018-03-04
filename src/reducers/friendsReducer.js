export default function friendReducer(
  state = {
    friends: [],
    selectedFriends: [],
    loading: false
  },
  action
) {
  switch (action.type) {
    case "FRIENDS_LOADING":
      return {
        ...state,
        loading: true
      };
    case "FRIENDS_LOAD":
      return {
        ...state,
        friends: action.payload,
        loading: false
      };
    case "SELECT_FRIEND":
      if (!state.selectedFriends.includes(action.payload)) {
        return {
          ...state,
          selectedFriends: state.selectedFriends.concat(action.payload)
        };
      }
    case "DESELECT_FRIEND":
      if (state.selectedFriends.includes(action.payload)) {
        const something = state.selectedFriends;
        const index = something.indexOf(action.payload);
        const x = something.splice(index, 1);

        return Object.assign({}, state, {
          selectedFriends: [...something]
        });
      }
    case "UPDATE_FRIEND":
      return {
        ...state,
        formData: { ...state.formData, ...action.payload }
      };
    case "SET_FRIENDS":
      return {
        ...state,
        friends: state.friends.map(friend => {
          if (friend.id === action.payload.id) {
            return action.payload;
          } else {
            return friend;
          }
        })
      };
    default:
      return state;
  }
}
