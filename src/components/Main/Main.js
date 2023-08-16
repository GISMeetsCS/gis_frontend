import React from 'react';
import './Main.css';
import GoogleMap from '../GoogleMap/GoogleMap';
import { Button } from 'react-bootstrap';

function Main () {
    return (
        <div className='Main-box'>
            <div className="Main-main">
                <form>
                    <input class="form-control" type="search" placeholder="latitude" aria-label="latitude" />
                    <input class="form-control" type="search" placeholder="longitude" aria-label="longitude" />
                    <Button as="input" type="submit" value="Upload" />
                </form>
            </div>
            <div className="Main-map">
                <GoogleMap />
            </div>
        </div>
    );
}

export default Main;