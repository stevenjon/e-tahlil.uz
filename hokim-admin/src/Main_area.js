import React, { useEffect, useState } from 'react'
import baseUrl from './baseUrl'
import axios from 'axios'


import HokimC from './HokimC'
import SectorC from './SectorC'
import TumanC from './TumanC'
import AdminC from './AdminC'
import HlinkC from './HlinkC'
import {MemoryRouter as Router, Switch, Route, Link} from 'react-router-dom'
const Main_area = () => {
    const [vils, setV] = useState()
    const [S, setS] = useState()
    const [H, setH] = useState()
    const [L, setL] = useState()
    const [A, setA] = useState()
    const [addL, setAddL] = useState(false)
    
    useEffect(()=> {
        gTuman()
        gSector()
        gAdmin()
        gHokim()
        ghlinks()
        
    },[])
    const removeUser = ()=> {
        window.localStorage.removeItem("user1")
        window.location.reload()
    }

    const gTuman = async() => {
        try {
            const resp = await axios.post(`${baseUrl}get_vt.php`);
            
            if(resp.data.length > 0) {
            
                setV(resp.data)
            }else {
                
                
            }
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    }
    const gAdmin = async() => {
        try {
            const resp = await axios.post(`${baseUrl}gt_admin.php`);
            
            if(resp.data.length > 0) {
            
                setA(resp.data)
            }else {
                
                
            }
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    }
    const gSector = async() => {
        try {
            const resp = await axios.post(`${baseUrl}gt_sec.php`);
            
            if(resp.data.length > 0) {
            
                setS(resp.data)
            }else {
                
                
            }
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    }
    const gHokim = async() => {
        try {
            const resp = await axios.post(`${baseUrl}gt_hokim.php`);
            
            if(resp.data.length > 0) {
                
                setH(resp.data)
            }else {
                
                
            }
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    }
    const ghlinks = async() => {
        try {
            const resp = await axios.post(`${baseUrl}gt_hlinks.php`);
            
            if(resp.data.length > 0) {
               
                setAddL(false)
                setL(resp.data)
            }else {
                
                
            }
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    }
    const addlink = ()=> {
        setAddL(true)
        setTimeout(()=> {
        
            window.scrollTo(0,window.document.body.scrollHeight)
        }, 100)
        
    }
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <a className="navbar-brand" href="#"><h2 style={{margin: "0"}}><img style={{verticalAlign: "middle", color: "white"}} src="Vector.svg"></img><span  style={{verticalAlign: "middle", color: "white"}} className="sektor_text">Админ панел</span></h2></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto" style={{backgroundColor: "#343A40"}}>
                    <li className="nav-item acti    ve">
                        <Link className="nav-link active" to="/">Туманлар <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item" >
                        <Link className="nav-link active" to='/sector'>Сектор</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to='/hokim'>Отчет</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to='/admin'>Админ</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to='/links'>Кнопки</Link>
                    </li>
                    </ul>
                    <ul style={{margin: "0"}}>
                    <li > <i onClick={removeUser} className="fas fa-sign-out-alt icon_chiq"></i></li>
                    </ul>
                </div>
                </nav>
            <Switch>
            <Route exact path="/">
                <TumanC vils={vils}></TumanC>
            </Route>
            <Route path="/sector">
                <SectorC S={S}></SectorC>
            </Route>
            <Route path="/hokim">
                <HokimC H={H}></HokimC>
          </Route>
          <Route path="/admin">
                 <AdminC A={A}></AdminC>
          </Route>        
          <Route path="/links">
                <HlinkC L={L} addlink={addlink} addL={addL} ghlinks={ghlinks}></HlinkC>
          </Route>
            
            
            </Switch>
         </Router>
    )
}

export default Main_area
