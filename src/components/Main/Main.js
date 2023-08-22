import React from 'react';
import './Main.css';
import GoogleMap from '../GoogleMap/GoogleMap';
import { Button } from 'react-bootstrap';

function Main () {
    const fileInput = React.useRef(null);

    const inputRef = e => {
        fileInput.current.click();
    }

    const mainImgInput_onChange = e => {
        
    }

    return (
        <div className='Main-box'>
            <div className="Main-main">
                <form>
                    <input class="form-control" type="search" placeholder="latitude" aria-label="latitude" />
                    <input class="form-control" type="search" placeholder="longitude" aria-label="longitude" />
                    <input accept="image/*" type="file" ref={fileInput} onChange={mainImgInput_onChange} style={{ display: "none" }}/>
                    <Button onClick={inputRef}>Upload</Button>
                </form>
            </div>
            <div className="Main-map">
                <GoogleMap />
            </div>
        </div>
    );
}

export default Main;