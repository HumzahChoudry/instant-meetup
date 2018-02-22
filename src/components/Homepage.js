import React from "react";
import MapContainer from './MapContainer'
import FriendsContainer from './FriendsContainer'
import MeetupsContainer from './MeetupsContainer'




class Homepage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      user: {},
      user_lat: null,
      user_lon: null
    }
  }

  componentWillMount(){
      navigator.geolocation.getCurrentPosition(this.addLocationToState);
  }

  addLocationToState = (position) => {
    this.setState({
      user_lat: position.coords.latitude,
      user_lon: position.coords.longitude
    })
  }

  render() {
    return (
      <div>
        <MapContainer userCoords={[this.state.user_lat, this.state.user_lon]}/>
        <FriendsContainer user={{id: 1, username: 'Humzah'}} />
        <MeetupsContainer user={{id: 1, username: 'Humzah'}} />
      </div>
    )
  }
}
export default Homepage
