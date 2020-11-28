import React, { Fragment } from 'react'
import './App.css';
import Monitor from './pages/monitor'
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <Fragment>
    
            <Monitor></Monitor>
  
        <ToastContainer />
    </Fragment>
  )
}

export default App;
