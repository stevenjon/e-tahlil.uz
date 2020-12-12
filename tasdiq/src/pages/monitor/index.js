import React,{useState, useEffect} from 'react'
import Login from './Login'
import Monitor_content from './Monitor_content'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Print from './Print'
const Index = () => {
    const [checker, setMonitor] = useState()
    useEffect(()=> {
        setMonitor(window.localStorage.getItem("checker"))
    }, [])


    if(checker) {
        return (
            <Router>
                <Switch>
                <Route exact path="/tasdiq">
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


export default Index
