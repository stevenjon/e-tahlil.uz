import React, {useState, Fragment} from 'react'
import Phead from './PrintHead'
import Pbody from './Pbody'
import {connect} from 'react-redux'
import {setPrint} from '../../actions/userActions'
import { Link, Redirect } from 'react-router-dom'
const Print = ({chach, date, s}) => {
    const [p, sP] = useState(true)
    const sa = ()=> {
        sP(false)
        setTimeout(()=> {
            window.print()
            
        }, 100)
    }
    if(chach.length > 0) {
        return (
        <Fragment>
            <div style={{display: "flex", justifyContent:"space-between"}}>
                {chach && p ? <div style={{cursor: "pointer", margin: "10px 30px", color:"var(--main-color)", fontSize:"20px"}}><Link to="/sektor">Орқага</Link></div>: null}  
                 {chach && p  ? <div onClick={sa} style={{cursor: "pointer", margin: "10px 30px"}}><img src="/print.svg"></img></div>: null} 
            </div>      
        <div className="print_con">
            {chach ? <Phead d={date} s={s}></Phead>: null}
            {chach ? chach.map(chach => <Pbody info={chach.content} tum={chach.tuman_name} s={s}></Pbody>): null}
        </div>
        </Fragment> 
    )
    }else {
        return (
            <Redirect to="/" />
        )
    }
    
}
const mapStateToProps = state => {
    return {
        chach: state.curInfo.chachishgan,
        date: state.curInfo.date,
        s: state.curInfo.sec
    }
}
export default connect(mapStateToProps, {setPrint})(Print)

