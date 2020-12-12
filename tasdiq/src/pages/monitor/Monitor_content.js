import React, { useEffect, useState } from 'react'
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment'
import Monitor_body from './Monitor_body'
import M from 'moment'
import {connect} from 'react-redux'
import axios from 'axios'
import baseUrl from '../../baseUrl'
import Loader from './Loader'
import {toast} from 'react-toastify'
import {Link} from 'react-router-dom'
import 'moment/locale/ru';
import locale from 'antd/es/date-picker/locale/ru_RU';
import {getHotLinks,setDate, getTumanlar,setPrint,getBaholar, setTasdiq, setSec} from '../../actions/userActions'
function getWithExpiry() {
	const itemStr = localStorage.getItem("tdate")
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
		localStorage.removeItem("tdate")
		return null
	}
	return item.value
}
const Monitor_content = ({getHotLinks,setSec,setPrint,chach,setDate,date,tasdiq, getTumanlar,getBaholar, setTasdiq}) => {
    const [clock, setClock] = useState()
    const [checker, setChecker] = useState()
    const [cursec, setCursec] = useState(1)
    useEffect(() => {
        getChecker()
        const currentDate = getWithExpiry()
        setDate(currentDate ? currentDate: M().subtract(1, 'days').format("yyyy-MM-DD"))
        setClock(M().format("H:mm"))
        setInterval(() => {
            setClock(M().format("H:mm"))
        }, 1000);
        getTumanlar()
        getHotLinks()
        getBaholar(cursec)
        
    }, [])
  
    const dateHandler = (value) => {
        setDate(M(value).format("YYYY-MM-DD"))
        
    
    }
    const removeMonitor = ()=> {
        window.localStorage.removeItem("checker")

        window.location.reload()
    }
    const getChecker = async ()=> {
        let formData = new FormData();
        formData.append('id', window.localStorage.getItem("checker"))
        try {
            const resp = await axios.post(`${baseUrl}get_check.php`, formData);
            console.log(resp.data)
            if(resp.data===0) {
                
            }else {
                setChecker(resp.data[0])
            }
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    }
    const tasdiqlash = async () => {

        const maped = chach.map(ch => ch.content.length > 0)
        const mapt = maped.filter(m => m == true)
        if(mapt.length > 0) {
                let formData = new FormData();
        formData.append('date', date)
        formData.append('sec_soni', cursec)
        formData.append('checker', window.localStorage.getItem("checker"))
        try {
            
            const resp = await axios.post(`${baseUrl}tasdiq.php`, formData);
            if(resp.data == "ok") {
                setTasdiq(true)
                toast("Тасдиқланди")
            }else {
               
            }
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
        }else {
            toast("Тасдиқлаш учун ма'лумотлар йўқ",{
                toastId: 10
              })
        }

        

    }
    const dateFormat = 'YYYY-MM-DD';
    const Refresh = ()=> {
        const now = new Date()
        const item = {
            value: date,
            expiry: now.getTime() + 7200000,
        }
        localStorage.setItem("tdate", JSON.stringify(item))
        getBaholar(cursec)
    }
    return (
        <div style={{backgroundColor: "#E5E5E5", width: "100vw", height: "100%"}}>
            <div className="navbar">
                <div className="navbar_brand">
                <h2 style={{margin: "0"}}><img style={{verticalAlign: "middle", color: "white"}} src="Vector.svg"></img><span  style={{verticalAlign: "middle", color: "white"}} className="sektor_text">Сектор мониторинг</span></h2>
                </div>
                <div className="navbar_items">
                    <ul style={{display: "flex", alignItems: "center"}}>
    <li style={{fontSize: "14px", textAlign: "right"}}>{checker ? checker.job: null}<br/><span style={{textAlign: "inline-block", float:"right"}}>{checker ? checker.name: null}</span></li>&nbsp; 
                        
                        <li style={{marginLeft:"5px"}}><div><img src="user.svg" alt="user"></img></div></li>
                        <li style={{marginLeft:"5px"}}> <i onClick={removeMonitor} className="fas fa-sign-out-alt icon_chiq"></i></li>

                    </ul>
                </div>
            </div>
            <div className="monitor_content">
                <div className="monitor_content_head">
                    <div className="ot_btns">
                <button onClick={()=>{
                    getBaholar(1) 
                    setCursec(1)
                    setSec(1)
                } 
                    } className={cursec == 1 ? "ot_btn btn_tan": "ot_btn"}>1-сектор</button>
                <button onClick={()=>{
                    getBaholar(2) 
                    setCursec(2)
                    setSec(2)
                }} className={cursec==2 ? "ot_btn btn_tan": "ot_btn"}>2-сектор</button>
                <button onClick={()=> {
                    getBaholar(3) 
                    setCursec(3)
                    setSec(3)
                }} className={cursec== 3 ? "ot_btn btn_tan": "ot_btn"}>3-сектор</button>
                <button onClick={()=> {
                    getBaholar(4) 
                    setCursec(4)
                    setSec(4)
                }} className={cursec== 4 ? "ot_btn btn_tan": "ot_btn"}>4-сектор</button>
                    </div>
                    <div className="clock" style={{textAlign: "center"}}>
                        {tasdiq ? <button className="ot_btn btn_tan">Тасдиқланган</button>: <button className="ot_btn" onClick={tasdiqlash}>Тасдиқлаш</button>}
                   
                        <p style={{marginTop: "0", color: "#676767", fontSize: "12px"}}>
                            {cursec}-сектор
                            </p>
                    </div>
                    <div className="monitor_calendar">
                        {date ? <div style={{display:"flex", alignItems:"center"}}>
                        <DatePicker locale={locale} style={{border: "1px solid var(--main-color)"}} defaultValue={moment(date, dateFormat)}  onChange={(date) => dateHandler(date)} format={dateFormat} /><div onClick={Refresh} style={{cursor: "pointer", margin: "25px 15px", color: "var(--main-color)", fontSize:"18px"}}><i class="fas fa-redo"></i></div>
                        
                        </div>: null}
                        <div  style={{cursor: "pointer"}}><Link to='/print'><img src="/print.svg"></img></Link></div>
                    </div>
                </div>
                {date ?  <Monitor_body date={date} sec={cursec}>

                </Monitor_body>: <Loader></Loader>}
             
               
            </div>
        </div>
    )
}
const mapStateToProps = (state)=> {
    return {
      date: state.curInfo.date,
      tumanlar: state.curInfo.tumanlar,
      tasdiq: state.curInfo.tasdiq,
      chach: state.curInfo.chachishgan,
      load: state.curInfo.load
    }
  }
export default connect(mapStateToProps, {getHotLinks,setSec, setPrint,setDate,setTasdiq, getTumanlar,getBaholar})(Monitor_content)
