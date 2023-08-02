import './GoogleMap.css';
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { GOOGLEMAP_KEY } from '../../config';

class GoogleMap extends Component {
  render() {
    return (
      <div className='GoogleMap-box'>
        <Map className='GoogleMap-map'
          google={this.props.google}
          zoom={14}
          initialCenter={{ lat: 32.864032, lng: -96.762982 }}
        >
          <Marker position={{ lat: 32.864032, lng: -96.762982 }} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: GOOGLEMAP_KEY
})(GoogleMap);
