import React, { Fragment, useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "../routers/Auth";
import Home from "../routers/Home";
import Profile from "../routers/Profile";
import Navigation from "components/navigation";

const AppRouter = ({isLoggedIn}) => {
    return (
        <Router>
            {isLoggedIn && <Navigation />}
            <Routes>
                {isLoggedIn ? (
                <>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                </>
                ) : (
                <>
                    <Route path="/" element={<Auth />} />
                </>
                )}
            </Routes>
        </Router>
    )
}

export default AppRouter;