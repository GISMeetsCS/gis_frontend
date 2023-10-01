import './GoogleMap.css';
import React, { useEffect, useState } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { GOOGLEMAP_KEY } from '../../config';
import axios from 'axios';

function GoogleMap (props) {

  const [myLatlng, setMyLatlng] = useState({ lat: 32.98587736174567, lng: -96.7502581329881 });
  const [clickLatLng, setClickLatLng] = useState({ lat: 32.98587736174567, lng: -96.7502581329881 });
  const [infoState, setInfoState] = useState({
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  });
  const [locInfo, setLocInfo] = useState({
    greenArea: 0,
    numTrees: 0,
    verticalDiversity: 0,
    photoEntity: 0
  });

  useEffect(() => {
    
  }, []);

  const onMapClick = (mapProps, map, clickEvent) => {
    setClickLatLng({lat: clickEvent.latLng.lat(), lng: clickEvent.latLng.lng()})
    console.log(`클릭한 위치의 위도: ${clickLatLng.lat}, 경도: ${clickLatLng.lng}`);
    setInfoState({selectedPlace: clickLatLng, showingInfoWindow: true});
    const locInfo = getLocInfo();
    setLocInfo({
      greenArea: locInfo.green_area,
      numTrees: locInfo.num_trees,
      verticalDiversity: locInfo.vertical_diversity,
      photoEntity: locInfo.entity_file
    });
  };

  const onCloseInfoWindow = () => {
    if (infoState.showingInfoWindow) {
      setInfoState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  const onMarkerClick = (props, marker, e) => {
    setInfoState({
      selectedPlace: clickLatLng,
      activeMarker: marker,
      showingInfoWindow: true,
    });
    onCloseInfoWindow();
  };

  const getLocInfo = () => {
    var temp = axios.get(`http://localhost:8080/photos/locInfo/${clickLatLng.lat}/${clickLatLng.lng}`)
        .then((response) => {
            console.log('API Response Data:', response.data);
        })
        .catch((error) => {
            console.error('API Request Error:', error);
        });
}

    return (
      <div className='GoogleMap-box'>
        <Map className='GoogleMap-map'
          google={props.google}
          zoom={14}
          initialCenter={myLatlng}
          onClick={onMapClick} >

        <Marker position={infoState.selectedPlace} onClick={onMarkerClick} />
            
        <InfoWindow
          marker={infoState.activeMarker}
          visible={infoState.showingInfoWindow}
          position={infoState.selectedPlace}
          onClose={onCloseInfoWindow}>
            <div>
              <h1>Location Info</h1>
              <p>Latitude: {clickLatLng.lat}</p>
              <p>Longitude: {clickLatLng.lng}</p>
              <p>Green Area: {locInfo.greenArea}</p>
              <p>Number of trees: {locInfo.numTrees}</p>
              <p>Vertical Diversity: {locInfo.verticalDiversity}</p>
              <p>Photo: {locInfo.entity_file}</p>
            </div>
        </InfoWindow>
        </Map>
      </div>
    );
  }

export default GoogleApiWrapper({
  apiKey: GOOGLEMAP_KEY
})(GoogleMap);
