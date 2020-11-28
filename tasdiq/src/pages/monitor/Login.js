import React, {useEffect, useState} from 'react'
import axios from 'axios'
import baseUrl from "../../baseUrl"
import { toast } from 'react-toastify';
import Monitor_content from './Monitor_content'
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [sector, setSector]= useState("")
    const [parol, setParol]= useState("")
    const [monitorState, setMonitorState]= useState(null)
    useEffect(()=> {
        const monitor = window.localStorage.getItem("monitor")
        setMonitorState(monitor)

    }, [])
    
    const formHandler = async (e) => {
        e.preventDefault();
        
        let formData = new FormData();
        formData.append('id', sector)
        formData.append('parol', parol)
        try {
            const resp = await axios.post(`${baseUrl}get_checker.php`, formData);
            console.log(resp.data)
            if(resp.data===0) {
                toast.dismiss()
                toast("Киритилган парол нотўғри!")
            }else {
                console.log(resp.data)
                toast.dismiss()
                window.localStorage.setItem("checker", sector)
                setMonitorState(sector)
            }
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
        
    }

    if(monitorState)  {
        return (
            <Monitor_content></Monitor_content>
        )
    }else {
        return (
            <div style={{backgroundColor: "#E5E5E5", width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div className="login_area">
                    <div className="login_content">
                        <h2 style={{marginBottom: "5px"}}><img style={{verticalAlign: "middle"}} src="Vector.png"></img><span style={{verticalAlign: "middle",}} className="sektor_text">Сектор мониторинг</span></h2>
                        <p style={{margin: "0"}}>Фаргона вилояти хокимлиги</p>
                        <form style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}} onSubmit={formHandler}>
                        <div style={{marginTop: "32px"}} className="input-container">
                            <img src="icon2.svg"></img>
                            <select onChange={(e)=> setSector(e.target.value)} className="input-field" type="text" placeholder="Username" name="usrnm">
                                <option selected disabled>Рахбарни танланг</option>
                                <option value='1'>Ахборот тахлил гурух рахбари</option>
                                <option value='2'>Ташкилий назорат гурух рахбари</option>
                                <option value='3'>Ахборот-коммуникация технологияларини ривожлантириш маркази ДУК директри</option>
                            </select>
                        </div>
    
                        <div className="input-container">
                            <img src="icon1.svg"></img>
                            <input onChange={(e)=> setParol(e.target.value)} className="input-field" type="text" placeholder="Парол" name="email"/>
                        </div>
                        <button onClick={()=> toast("Кутинг...")} className='login_btn'>Кириш</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Login
