import React, { useState } from 'react';
import axios from 'axios';
import './Main.css';
import GoogleMap from '../GoogleMap/GoogleMap';
import { Button } from 'react-bootstrap';

function Main () {
   const getQuoteById = () => {
        var temp = axios.get('https://localhost:8080/photo')
            .then((response) => {
                console.log('API Response Data:', response.data);
            })
            .catch((error) => {
                console.error('API Request Error:', error);
            });
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
        file.append('lon', longitude);
        file.append('memberId', 1);
    
        axios.post('http://localhost:8080/photos', file, {
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
    const [longitude, setLongitude] = useState('');
    const [binaryPhoto, setBinaryPhoto] = useState('');

    const latOnChange = (e) => {
        setLat(e.target.value)
    }

    const longOnChange = (e) => {
        setLongitude(e.target.value)
    }

    return (
        <div className='Main-box'>
            <div className="Main-main">
                <input class="form-control" type="search" placeholder="latitude" aria-label="latitude" value={lat} onChange={latOnChange} />
                <input class="form-control" type="search" placeholder="longitude" aria-label="longitude" value={longitude} onChange={longOnChange} />
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