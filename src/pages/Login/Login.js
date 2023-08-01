import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function Login () {
    const navigate = useNavigate();
    const goToMain = () => {
        navigate("/main");
    };

    return (
        <>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="userid" aria-label="userid" />
                <input class="form-control me-2" type="search" placeholder="pw" aria-label="pw" />
                <Button as="input" type="submit" value="Login" onClick={goToMain} />
            </form>
        </>
    );
}

export default Login;