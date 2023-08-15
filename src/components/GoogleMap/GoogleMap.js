import './GoogleMap.css';
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { GOOGLEMAP_KEY } from '../../config';

function GoogleMap (props) {

  const success = (position) => {
    console.log("성공!" + position.coords.latitude)

    
  }
  
  const error = (err) => {
    console.log("error");
  }
  
  const getLatLng = (params) => {
    window.navigator.geolocation.getCurrentPosition(success, error);
  }

  const state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  const onMarkerClick = () => {

    getLatLng();


  };

  



    const myLatlng = { lat: 32.864032, lng: -96.762982 };
    
    return (
      <div className='GoogleMap-box'>
        <Map className='GoogleMap-map'
          google={props.google}
          zoom={14}
          initialCenter={myLatlng}
        >
          <Marker position={myLatlng} onClick={onMarkerClick}/>
          <InfoWindow
          marker={state.activeMarker}
          visible={state.showingInfoWindow}>
            <div>
              <h1>{state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
        </Map>
      </div>
    );
  }

export default GoogleApiWrapper({
  apiKey: GOOGLEMAP_KEY
})(GoogleMap);
