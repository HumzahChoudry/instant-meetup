import React from "react";
import Map from './Map'

class MapContainer extends React.Component {

  render() {
    return (
      <div>
        <Map coords={this.props.userCoords}/>
      </div>
    )
  }
}
export default MapContainer
