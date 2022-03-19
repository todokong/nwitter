import React, { Fragment, useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "../routers/Auth";
import Home from "../routers/Home";

const AppRouter = ({isLoggedIn}) => {
    // const [isLoggedIn, setIsLoggedIn] = useState();
    return (
        <Router>
            <Routes>
                {isLoggedIn ? (
                <Fragment>
                    <Route path="/" element={<Home />} />
                </Fragment>
                ) : (
                <Route path="/" element={<Auth />} />
                )}
            </Routes>
        </Router>
    )
}

export default AppRouter;