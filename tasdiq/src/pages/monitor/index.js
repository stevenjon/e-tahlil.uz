import React,{useState, useEffect} from 'react'
import Login from './Login'
import Monitor_content from './Monitor_content'
const Index = () => {
    const [checker, setMonitor] = useState()
    useEffect(()=> {
        setMonitor(window.localStorage.getItem("checker"))
    }, [])


    if(checker) {
        return (
            <Monitor_content></Monitor_content>
        )
    }else {
        return (
            <Login></Login>
        )
    }
   
}

export default Index
