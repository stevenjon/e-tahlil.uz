import React, { useEffect, useState } from 'react'
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment'
import Monitor_body from './Monitor_body'
import Moment from 'react-moment';
import 'moment/locale/ru';
import locale from 'antd/es/date-picker/locale/ru_RU';
import M from 'moment'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getHotLinks,setDate, getTumanlar,getBaholar} from '../../actions/userActions'

function getWithExpiry() {
	const itemStr = localStorage.getItem("hdate")
	// if the item doesn't exist, return null
	if (!itemStr) {
		return null
	}
	const item = JSON.parse(itemStr)
	const now = new Date()
	// compare the expiry time of the item with the current time
	if (now.getTime() > item.expiry) {
		// If the item is expired, delete the item from storage
		// and return null
		localStorage.removeItem("hdate")
		return null
	}
	return item.value
}
const Monitor_content = ({getHotLinks,tumanlar,setDate,date, getTumanlar,getBaholar}) => {
    const [clock, setClock] = useState()
    useEffect(() => {
        const currentDate = getWithExpiry()
        setDate(currentDate ? currentDate: M().format("yyyy-MM-DD"))
        setClock(M().format("H:mm"))
        setInterval(() => {
            setClock(M().format("H:mm"))
        }, 1000);
        getTumanlar()
        getHotLinks()
        getBaholar()
        
    }, [])
    const monitor = window.localStorage.getItem("monitor")
    const dateHandler = (value) => {
        setDate(M(value).format("YYYY-MM-DD"))
        
    
    }
    const dateFormat = 'YYYY-MM-DD';
    const Refresh = () => {
        const now = new Date()
        const item = {
            value: date,
            expiry: now.getTime() + 7200000,
        }
        localStorage.setItem("hdate", JSON.stringify(item))
        getBaholar()
    }
    const removeMonitor = ()=> {
        window.localStorage.removeItem("monitor")
        window.location.reload()
    }

    return (
        <div style={{backgroundColor: "#E5E5E5", width: "100vw", height: "100%"}}>
            <div className="navbar">
                <div className="navbar_brand">
                <h2 style={{margin: "0"}}><img style={{verticalAlign: "middle", color: "white"}} src="Vector.svg"></img><span  style={{verticalAlign: "middle", color: "white"}} className="sektor_text">Сектор мониторинг</span></h2>
                </div>
                <div className="navbar_items">
                    <ul style={{display: "flex", alignItems: "center"}}>
    <li><span style={{fontSize: "20px"}}>{monitor}-сектор |</span></li>&nbsp; 
                        
                        <li><div><img src="user.svg" alt="user"></img></div></li>
                        <li style={{marginLeft:"5px", marginTop:"5px"}}> <i onClick={removeMonitor} className="fas fa-sign-out-alt icon_chiq"></i></li>

                    </ul>
                </div>
            </div>
            <div className="monitor_content">
                <div className="monitor_content_head">
                    <div className="clock" style={{textAlign: "center"}}>
                        <h1 style={{margin: "0",marginBottom: "2px"}}>{clock}</h1>
                        <p style={{marginTop: "0", color: "#676767", fontSize: "12px"}}>
                            <Moment format="MM-DD-YYYY">
                                
                            </Moment>
                            </p>
                    </div>
                    <div className="monitor_calendar" style={{display:"flex", alignItems:"center"}}>
                        {date ? <div style={{display:"flex", alignItems:"center"}} >
                        <DatePicker locale={locale} style={{border: "1px solid var(--main-color)"}} defaultValue={moment(date, dateFormat)}  onChange={(date) => dateHandler(date)} format={dateFormat} /><div onClick={Refresh} style={{cursor: "pointer", margin: 0, color: "var(--main-color)", fontSize:"18px",margin:"0 15px"}}><i class="fas fa-redo"></i></div>
                        </div>: null}
                        <div  style={{cursor: "pointer"}}><Link to='/print'><img src="/print.svg"></img></Link></div>
                    
                    </div>
                </div>
                {date ?  <Monitor_body date={date}>

                </Monitor_body>: null}
               
            </div>
        </div>
    )
}
const mapStateToProps = (state)=> {
    return {
      date: state.curInfo.date,
      tumanlar: state.curInfo.tumanlar
    }
  }
export default connect(mapStateToProps, {getHotLinks,setDate, getTumanlar,getBaholar})(Monitor_content)
