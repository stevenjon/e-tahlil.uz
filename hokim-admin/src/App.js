import React, {useState, useEffect} from 'react'
import './App.css';
import Login from './Login'
import Main_area from './Main_area'


function App() {
  const [user, setUser]= useState(null)
  useEffect(()=> {
      setUser(window.localStorage.getItem("user1"))
  }, [])
  
  if(user) {

    return (
      <Main_area></Main_area>
    )
    
  
  }else {
      return (
      <Login setUser={(user)=> setUser(user)}></Login>
        );
  }
  
}

export default App;
