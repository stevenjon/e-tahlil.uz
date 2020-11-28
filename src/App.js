import React, {useState, useEffect} from 'react'
import './App.css';
import Login from './Login';
import Main_area from './Main_area';
import Print from './Print'

function App() {
  const [user, setUser]= useState(null)
  const [print, setPrint]= useState(false)
  const [Con, setCon]= useState()
  const [d, setD]= useState()
  const [s, setS]= useState(null)
  useEffect(()=> {
      setUser(window.localStorage.getItem("user"))

  }, [])
  if(user) {
      if(print) {
        return (
          <Print sP={setPrint} s={s} Con={Con} d={d}></Print>
        )
        
      }else {
        return (
      <Main_area sCon={setCon} sPrint={setPrint} sD={setD} setS={setS}></Main_area>
        )
     }
    
    
  }else {
    return (
        <Login setUser={(user)=> setUser(user)}></Login>
      );
  }
  
}

export default App;
