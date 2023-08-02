import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function SignUp () {
    const navigate = useNavigate();
    const goToLogin = () => {
        navigate("/login");
    };

    return (
        <>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="email" aria-label="email" />
                <input class="form-control me-2" type="search" placeholder="pw" aria-label="pw" />
                <input class="form-control me-2" type="search" placeholder="nickname" aria-label="nickname" />
                <input class="form-control me-2" type="search" placeholder="name" aria-label="name" />
                <Button as="input" type="submit" value="Submit" onClick={goToLogin} />
            </form>
        </>
    );
}

export default SignUp;