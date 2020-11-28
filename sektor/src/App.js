import React, { Fragment } from 'react'
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Monitor from './pages/monitor'
import Admin from './pages/admin'
import Otchot from './pages/otchot'
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <Fragment>
        <Switch>
            <Route exact path='/' component={Monitor}></Route>
            <Route exact path='/admin' component={Admin}></Route>
            <Route exact path='/otchot' component={Otchot}></Route>
        </Switch>
        <ToastContainer />
    </Fragment>
  )
}

export default App;
