import React from "react";
import MapContainer from './MapContainer'



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
        <MapContainer />
      </div>
    )
  }
}
export default Homepage
