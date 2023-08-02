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
        <div className='Login-box'>
            <form>
                <input class="form-control me-2" type="search" placeholder="userid" aria-label="userid" />
                <input class="form-control me-2" type="search" placeholder="pw" aria-label="pw" />
                <Button as="input" value="Login" onClick={goToMain} />
            </form>
            <Button as="input" value="Sign Up" onClick={goToSignUp} />
            <Button as="input" value="Forgot ID/PW" onClick={goToRecovery} />
        </div>
    );
}

export default Login;