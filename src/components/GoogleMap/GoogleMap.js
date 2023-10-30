import './GoogleMap.css';
import React, { useEffect, useState } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow, Circle } from 'google-maps-react';
import { GOOGLEMAP_KEY } from '../../config';
import axios from 'axios';

function GoogleMap (props) {
  const [myLatlng, setMyLatlng] = useState({ lat: 32.98587736174567, lng: -96.7502581329881 });
  const [clickLatLng, setClickLatLng] = useState({ lat: 0, lng: 0 });
  const [infoState, setInfoState] = useState({
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  });
  
  const [locInfo, setLocInfo] = useState({
    photoId: '',
    greenArea: '',
    numTrees: '',
    verticalDiversity: '',
    photoEntity: ''
  });

  const [circles, setCircles] = useState([]);
  useEffect(() => {
    loadList();
  }, []);

  const loadList = () => {
    axios.get(`http://localhost:8081/photos/location/list`)
    .then((response) => {
        console.log('location list:', response.data);
        setCircles(response.data);
    })
    .catch((error) => {
        console.error('API Request Error:', error);
    });
  }

  useEffect(() => {
    if(clickLatLng.lat != 0 && clickLatLng.lng != 0){
      setInfoState({selectedPlace: clickLatLng, showingInfoWindow: true});
      getLocInfo();
    }
  }, [clickLatLng]);

  const onMapClick = (mapProps, map, clickEvent) => {
    setClickLatLng({lat: clickEvent.latLng.lat(), lng: clickEvent.latLng.lng()})
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
    var temp = axios.get(`http://localhost:8081/photos/locInfo/${clickLatLng.lat}/${clickLatLng.lng}`)
        .then((response) => {
            console.log('API Response Data:', response.data);
            setLocInfo({
              photoId: response.data.photoId,
              greenArea: response.data.greenArea,
              numTrees: response.data.numTrees,
              verticalDiversity: response.data.verticalDiversity,
            });
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

        {circles.map((circle, index) => (
          <Circle
            center={{
              lat: circle.lat,
              lng: circle.lng,
            }}
            radius={9}
            options={{
              fillColor: 'rgba(0, 0, 255, 0.4)',
              strokeColor: 'blue',
              strokeWeight: 1,
            }}
            onClick={onMapClick}
          />
        ))}

        {circles.map((circle, index) => (
          <Circle
            center={{
              lat: circle.lat,
              lng: circle.lng,
            }}
            radius={30}
            options={{
              fillColor: 'rgba(0, 0, 255, 0.05)',
              strokeColor: 'blue',
              strokeWeight: 1,
            }}
            onClick={onMapClick}
          />
        ))}

          <InfoWindow
            marker={infoState.activeMarker}
            visible={infoState.showingInfoWindow}
            position={infoState.selectedPlace}
            onClose={onCloseInfoWindow}>
              <div>
                <h1>Location Info</h1>
                  <p>Latitude: {clickLatLng.lat}</p>
                  <p>Longitude: {clickLatLng.lng}</p>
                {locInfo.photoId && locInfo.photoId != 0 && (
                  <div>
                    <p>Green Area: {locInfo.greenArea}</p>
                    <p>Number of trees: {locInfo.numTrees}</p>
                    <p>Vertical Diversity: {locInfo.verticalDiversity}</p>
                    <p><img src={`http://localhost:8081/photos/${locInfo.photoId}`} alt="Image" /></p>
                  </div>
                )}
              </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }

export default GoogleApiWrapper({
  apiKey: GOOGLEMAP_KEY
})(GoogleMap);
