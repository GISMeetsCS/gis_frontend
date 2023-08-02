import React from 'react';
import './Main.css';
import GoogleMap from '../GoogleMap/GoogleMap';
import { Button } from 'react-bootstrap';

function Main () {
    return (
        <div className='Main-box'>
            <div className="Main-main">
                <form>
                    <input class="form-control me-2" type="search" placeholder="userid" aria-label="userid" />
                    <input class="form-control me-2" type="search" placeholder="pw" aria-label="pw" />
                    <Button as="input" type="submit" value="Login" />
                </form>
            </div>
            <div className="Main-map">
                <GoogleMap />
            </div>
        </div>
    );
}

export default Main;