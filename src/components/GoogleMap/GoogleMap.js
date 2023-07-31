import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '400px',
};

class GoogleMap extends Component {
  render() {
    return (
      <>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{ lat: 32.864032, lng: -96.762982 }}
        >
          <Marker position={{ lat: 32.864032, lng: -96.762982 }} />
        </Map>
      </>
    );
  }
}

export default GoogleApiWrapper({
  
})(GoogleMap);
