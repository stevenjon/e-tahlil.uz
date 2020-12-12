import React, {Fragment, useState} from 'react'
import Content from './Content'
import Loader from './Loader'

  
const Main_area = ({sCon, sPrint, sD, setS}) => {
     const [load, setLoad] = useState(true)   
    const removeUser = ()=> {
        window.localStorage.removeItem("user")
        window.location.reload()
    }
    return (
        <Fragment>
        <div>
            <div className="navbar">
                <div className="navbar_brand">
                <h2 style={{margin: "0"}}><img style={{verticalAlign: "middle", color: "white"}} src="Vector.svg"></img><span  style={{verticalAlign: "middle", color: "white"}} className="sektor_text">Сектор мониторинг</span></h2>
                </div>
                <div className="navbar_items">
                    <ul style={{display: "flex", alignItems: "center"}}>
                            &nbsp; 
                        <li style={{fontSize: "14px"}}>Фарғона вилояти хокими<br/><span style={{marginLeft: "83px"}}>Х.Х.Бозоров</span></li>&nbsp;
                        <li><div><img src="user.svg" alt="user"></img></div></li>
                        <li style={{marginLeft:"5px"}}> <i onClick={removeUser} className="fas fa-sign-out-alt icon_chiq"></i></li>

                    </ul>
                </div>
            </div>

               <Content sCon={sCon} sPrint={sPrint} sD={sD} setL={setLoad} setS={setS}></Content>
            
            
        </div>
        {load ? <Loader></Loader>: null}
             
        </Fragment>
    )
}

export default Main_area
