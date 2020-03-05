import React from "react";
import {Switch, Route} from "react-router-dom"
import Register from "./components/Register"
import Profile from "./components/Profile"
import Discover from "./components/Discover"
import Landing from "./components/Landing"
import Login from "./components/Login"
import Events from "./components/Events"
import Cloudinary from "./components/Cloudinary"

export default (
    <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/discover" component={Discover} />
        <Route path="/landing" component={Landing} />
        <Route path="/events" component={Events} />
        <Route path="/cloudinary" component={Cloudinary} />
    </Switch>
)