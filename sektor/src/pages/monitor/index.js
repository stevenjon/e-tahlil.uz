import React from 'react'
import Login from './Login'
import Monitor_content from './Monitor_content'
const index = () => {
    const monitor = window.localStorage.getItem("monitor")

    if(monitor) {
        return (
            <Monitor_content></Monitor_content>
        )
    }else {
        return (
            <Login></Login>
        )
    }
   
}

export default index
