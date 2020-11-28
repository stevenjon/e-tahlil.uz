import React, {useEffect, useState} from 'react'
import axios from 'axios'
import baseUrl from "./baseUrl"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = ({ setUser}) => {
    const [sector, setSector]= useState("")
    const [parol, setParol]= useState("")
    useEffect(()=> {
      

    }, [])
    
    const formHandler = async (e) => {

        e.preventDefault();
        
        let formData = new FormData();
        formData.append('login', sector)
        formData.append('parol', parol)
        try {
            const resp = await axios.post(`${baseUrl}check_hokim.php`, formData);
            if(resp.data===0) {
                console.log("sad")
                toast.dismiss()
                toast("Киритилган парол нотўғри!")
            }else {
                console.log("ok")
                console.log(resp.data)
                toast.dismiss()
                window.localStorage.setItem("user", sector)
                setUser(sector)
            }
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
        
    }

        return (
            <div style={{backgroundColor: "#E5E5E5", width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div className="login_area">
                    <div className="login_content">
                        <h2 style={{marginBottom: "5px"}}><img style={{verticalAlign: "middle"}} src="Vector.png"></img><span style={{verticalAlign: "middle",}} className="sektor_text">Сектор мониторинг</span></h2>
                        <p style={{margin: "0"}}>Фаргона вилояти хокимлиги</p>
                        <form style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}} onSubmit={formHandler}>
                        <div style={{marginTop: "32px"}} className="input-container">
                            <img src="icon2.svg"></img>
                            <input onChange={(e)=> setSector(e.target.value)} className="input-field" type="text" placeholder="Логин" value={sector}>
              
                            </input>
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

export default Login
