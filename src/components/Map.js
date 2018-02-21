import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import '../css/Map.css';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {

  showMap = () => {
    if (this.props.startingAddress == {}){
      return <GoogleMapReact
        center={{lat: 40.7128, lng: -74.0060}}
        defaultZoom={15} hoverDistance={100}> </GoogleMapReact>
    } else {
      return   <GoogleMapReact
        center={{lat: 40.7128, lng: -74.0060}}
        defaultZoom={15}
        hoverDistance={20}>
      </GoogleMapReact>
    }
  }

  render() {
    return (
      <div className="google-map item" position="relative">
        {this.showMap()}
      </div>
    );
  }
}

export default Map
