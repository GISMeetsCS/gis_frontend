import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Main.css';
import GoogleMap from '../GoogleMap/GoogleMap';
import { Button } from 'react-bootstrap';

function Main () {
    // ({ lat: 32.98587736174567, lng: -96.7502581329881 });
    const [currentLatlng, setCurrentLatlng] = useState({ lat: 32.98587736174567, lng: -96.7502581329881 });
    
    useEffect(() => {
        getLatLng();
        console.log("이펙트 lat" + currentLatlng.lat);
    }, currentLatlng);

    const getLatLng = (params) => {
        window.navigator.geolocation.getCurrentPosition(success, error);
        console.log("getLatLng");
    }

    const success = (position) => {
        setCurrentLatlng({lat: position.coords.latitude, lng: position.coords.longitude});
        setLat(currentLatlng.lat);
        setLng(currentLatlng.lng);
        console.log("success");
    }
    
    const error = (err) => {
        console.log("get lat lng error");
    }

    function getCurrentDateTime() {
        var currentDate = new Date();
        
        var year = currentDate.getFullYear();
        var month = currentDate.getMonth() + 1;
        var day = currentDate.getDate();
        var hours = currentDate.getHours();
        var minutes = currentDate.getMinutes();
        var seconds = currentDate.getSeconds();
        var milliseconds = currentDate.getMilliseconds();
        
        const dateTime = {
          year: year,
          month: month,
          day: day,
          hours: hours,
          minutes: minutes,
          seconds: seconds,
          milliseconds: milliseconds
        };
        
        return dateTime;
      }
      
    const config = {
        headers: {
            'Accept': '*/*',
            'Content-Type': 'multipart/form-data'
        },
    };

    const uploadPhoto = () => {
        const file = new FormData();
        file.append("file", binaryPhoto);
        file.append('lat', lat);
        file.append('lon', lng);
        file.append('memberId', 1);
    
        axios.post('http://localhost:8081/photos', file, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((response) => {
                console.log('API Response Data:', response.data);
            })
            .catch((error) => {
                console.error('API Request Error:', error);
            });
    };

    const fileInput = React.useRef(null);

    const inputRef = (e) => {
        fileInput.current.click();
    }

    const mainImgInput_onChange = (e) => {
        setBinaryPhoto(e.target.files[0])
        console.log("heyhey")
        console.log(binaryPhoto)
    }

    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');
    const [binaryPhoto, setBinaryPhoto] = useState('');

    const latOnChange = (e) => {
        setLat(e.target.value)
    }

    const longOnChange = (e) => {
        setLng(e.target.value)
    }

    return (
        <div className='Main-box'>
            <div className="Main-main">
                <label>Latitude: 
                    <input class="form-control" type="number" aria-label="latitude" value={lat} onChange={latOnChange} />
                </label>
                <br/>
                <label>Longitude: 
                    <input class="form-control" type="number" aria-label="longitude" value={lng} onChange={longOnChange} />
                </label>
                <input accept="image/*" type="file" onChange={mainImgInput_onChange} />
                <Button onClick={uploadPhoto}>Upload</Button>
            </div>
            <div className="Main-map">
                <GoogleMap />
            </div>
        </div>
    );
}

export default Main;