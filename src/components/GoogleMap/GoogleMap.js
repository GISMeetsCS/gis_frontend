import './GoogleMap.css';
import React, { useEffect, useState } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { GOOGLEMAP_KEY } from '../../config';

function GoogleMap (props) {

  const [myLatlng, setMyLatlng] = useState({ lat: 32.98587736174567, lng: -96.7502581329881 });
  const [infoState, setInfoState] = useState({
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  });

  useEffect(() => {
    getLatLng();
  }, []);
  
  const getLatLng = (params) => {
    window.navigator.geolocation.getCurrentPosition(success, error);
  }

  const success = (position) => {
    setMyLatlng({lat: position.coords.latitude, lng: position.coords.longitude});
    console.log("성공! " + myLatlng.lat);
  }
  
  const error = (err) => {
    console.log("get lat lng error");
  }

  const onMapClick = () => {
    getLatLng();
    setInfoState.showingInfoWindow(true);
    if (infoState.showingInfoWindow) {
      setInfoState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  const onMarkerClick = (props, marker, e) => {
    setInfoState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  };
    
    return (
      <div className='GoogleMap-box'>
        <Map className='GoogleMap-map'
          google={props.google}
          zoom={14}
          initialCenter={myLatlng}
          onClick={onMapClick}
        >
          <Marker position={myLatlng}
            onClick={onMarkerClick}
            />
          <InfoWindow
            marker={infoState.activeMarker}
            visible={infoState.showingInfoWindow}>
              <div>
                <h1>잘되게해주세요</h1>
              </div>
        </InfoWindow>
        </Map>
      </div>
    );
  }

export default GoogleApiWrapper({
  apiKey: GOOGLEMAP_KEY
})(GoogleMap);
