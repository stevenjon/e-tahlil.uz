import React from 'react'
import Login from './Login'
import Monitor_content from './Monitor_content'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Print from './Print'
const index = () => {
    const monitor = window.localStorage.getItem("monitor")

    if(monitor) {
        return (
             <Router>
                <Switch>
                <Route exact path="/sektor">
                    <Monitor_content></Monitor_content>
                </Route>
                <Route exact path="/print">
                    <Print></Print>
                </Route>
                </Switch>
            </Router>
        )
    }else {
        return (
            <Login></Login>
        )
    }
   
}

export default index
