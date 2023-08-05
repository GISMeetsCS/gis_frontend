import React from 'react';
import '../../asset/css/global_style.css';
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
                <img src='../../asset/images/logo.png' alt='' onClick={goToMain}/>
                Sign in to GISMeetsCS
            </div>
            <div className='Login-small-box'>
                <form>
                    <a href='' onClick={goToRecovery}>Forgot login info?</a>
                    <input class="form-control me-2" type="text" placeholder="Username or Email" aria-label="userid" />
                    <input class="form-control me-2" type="text" placeholder="Password" aria-label="pw" />
                    <input class="form-control me-2" type="submit" />
                    {/* <Button as="input" value="Login" onClick={goToMain} /> */}
                </form>
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