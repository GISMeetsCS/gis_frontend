import React from 'react';
import './Login.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function Login () {
    const navigate = useNavigate();

    const goToMain = () => {
        navigate("/main");
    };

    const goToSignUp = () => {
        navigate("/signup");
    };
    
    const goToRecovery = () => {
        navigate("/recovery");
    };

    return (
        <div className='Login-container'>
            <div className='Login-header'>
                Sign in to GISMeetsCS
            </div>
            <div className='Login-small-box'>
                <a href='' onClick={goToRecovery}>Forgot login info?</a>
                <input class="form-control" type="text" placeholder="Username or Email" aria-label="userid" />
                <input class="form-control" type="text" placeholder="Password" aria-label="pw" />
                <div className='Login-btn'>
                    <Button as="input" value="Login" onClick={goToMain} />
                </div>
            </div>
            <div className='Login-bottom-links'>
                <p>
                    New to GISMeetsCS? &nbsp;
                    <a href='' onClick={goToSignUp}>Create an account</a>
                    .
                </p>
            </div>
        </div>
    );
}

export default Login;