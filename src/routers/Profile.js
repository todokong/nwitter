import { authService } from "fBase";
import React from "react";
import { useNavigate } from "react-router-dom";

const profile = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    const onLogOutClick = () => {
        authService.signOut();
        navigate("/");
    }
    return (
        <>
            <button onClick={onLogOutClick}>Sign Out</button>
        </>
    )
};

export default profile;