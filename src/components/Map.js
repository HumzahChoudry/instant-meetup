import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import '../css/Map.css';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {

  showMap = () => {
    if (!!this.props.coords){
      return <GoogleMapReact
        center={{lat: this.props.coords[0], lng: this.props.coords[1]}}
        defaultZoom={15} hoverDistance={100}>
      </GoogleMapReact>
    } else {
      return   <GoogleMapReact
        center={{lat: this.props.coords[0], lng: this.props.coords[1]}}
        defaultZoom={15}
        hoverDistance={20}>
      </GoogleMapReact>
    }
  }

  render() {
    debugger
    return (
      <div className="google-map item" position="relative">
        {this.showMap()}
      </div>
    );
  }
}

export default Map
