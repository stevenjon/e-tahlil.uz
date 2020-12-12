import React, {useState, useEffect} from 'react'
import './App.css';
import Login from './Login';
import Main_area from './Main_area';
import Print from './Print'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
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
        return (
          <Router>
            <Switch>
            <Route exact path="/">
            <Main_area sCon={setCon} sPrint={setPrint} sD={setD} setS={setS}></Main_area>
          </Route>
          <Route exact path="/print">
              <Print sP={setPrint} s={s} Con={Con} d={d}></Print>
          </Route>
            </Switch>
            
                 
          </Router>
        )

}else {
    return (
        <Login setUser={(user)=> setUser(user)}></Login>
      );
  }
}
export default App;
