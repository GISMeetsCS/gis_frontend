import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Main.css';
import GoogleMap from '../GoogleMap/GoogleMap';
import { Button, Modal } from 'react-bootstrap';

function Main () {
    // ({ lat: 32.98587736174567, lng: -96.7502581329881 });
    const [currentLatlng, setCurrentLatlng] = useState({ lat: 0, lng: 0 });
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalMsg, setModalMsg] = useState('');
    
    useEffect(() => {
        if(currentLatlng.lat == 0 && currentLatlng.lng == 0)
            getLatLng();
    }, []);

    useEffect(() => {
        if(currentLatlng.lat != 0 && currentLatlng.lng != 0){
            setLat(currentLatlng.lat);
            setLng(currentLatlng.lng);
        }
    }, [currentLatlng]);

    const getLatLng = (params) => {
        navigator.geolocation.getCurrentPosition(success, error);
        console.log("getLatLng");
    }

    const success = (position) => {
        setCurrentLatlng({lat: position.coords.latitude, lng: position.coords.longitude});
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
                console.log('response.data:', response.data);
                if(response.data){
                    setModalMsg("Upload Success!");
                    openModal();
                }
                else{
                    setModalMsg("Upload Failed!");
                    openModal();
                }
            })
            .catch((error) => {
                console.error('API Request Error:', error);
                setModalMsg("Upload Failed!");
                openModal();
            });
    };

    const fileInput = React.useRef(null);

    const inputRef = (e) => {
        fileInput.current.click();
    }

    const mainImgInput_onChange = (e) => {
        setBinaryPhoto(e.target.files[0]);
        console.log(binaryPhoto);
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

    const openModal = () => {
        setModalIsOpen(true);
        console.log("openModal");
      };
    
      const closeModal = () => {
        setModalIsOpen(false);
      };

    const handleClose = () => setModalIsOpen(false);

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
                <Modal show={modalIsOpen} onHide={handleClose} size="sm" centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Upload</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {modalMsg}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={closeModal}>OK</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div className="Main-map">
                <GoogleMap />
            </div>
        </div>
    );
}

export default Main;