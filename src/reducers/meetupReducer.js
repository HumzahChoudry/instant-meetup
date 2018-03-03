export default function meetupReducer(
  state = {
    meetups: [],
    publicMeetups: [],
    selectedMeetup: null,
    loading: false,
    display: false
  },
  action
) {
  switch (action.type) {
    case "ADD_NEW_MEETUP":
      return {
        ...state,
        meetups: [...state.meetups, action.payload]
      };
    case "MEETUPS_LOADING":
      return {
        ...state,
        loading: true
      };
    case "MEETUPS_LOAD":
      return {
        ...state,
        meetups: action.payload,
        loading: false
      };
    case "SELECT_MEETUP":
      return {
        ...state,
        selectedMeetup: action.payload
      };
    case "UPDATE_MEETUP":
      return {
        ...state,
        formData: { ...state.formData, ...action.payload }
      };
    case "DISPLAY_MEETUP":
      return {
        ...state,
        display: true
      };
    case "REMOVE_MEETUP_DISPLAY":
      return {
        ...state,
        display: false
      };
    case "SET_MEETUP":
      return {
        ...state,
        meetups: state.meetups.map(meetup => {
          if (meetup.id === action.payload.id) {
            return action.payload;
          } else {
            return meetup;
          }
        })
      };
    default:
      return state;
  }
}
