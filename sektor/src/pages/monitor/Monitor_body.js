import React, {useEffect, useState} from 'react'
import Tumanlar from './Tumanlar'
import Royxatlar from './Royxatlar'
import Modal from './monitor_modal'
import {connect} from 'react-redux'
import Loader from './Loader'
import { getTumanlar, getBaholar, setChach, setInfo3} from '../../actions/userActions'

const Monitor_body = ({info4,chachishgan, tumanlar, getBaholar, setChach, setInfo3, load}) => {
    const [ozgar, setOzgar]= useState(false)
     useEffect(() => {
         
         getBaholar()
     }, [tumanlar,info4, ozgar])          
    const tumanHandler = (id)=> {

       const chach =  chachishgan.map((chach)=> {
           const newObj={};
           newObj.tuman_id = chach.tuman_id
           newObj.tuman_name= chach.tuman_name
           if(chach.tuman_id === id) {
               newObj.status = "edit"
           }
           newObj.content = chach.content
           return newObj
        })
        setChach(chach)
        const currentInfo = chach[id-1].content[0]
        if(currentInfo) {
            setInfo3(currentInfo)
        }else {
            setInfo3({})
        }
        
    }
    if(chachishgan.length > 0) {
        return (
            <div className="monitor_body">
                <div className="monitor_left">
                    <h6 style={{fontSize: "16px",height: "111px",boxSizing: "border-box",margin:"0", verticalAlign: "middle", color: "#747474", fontWeight: "normal",backgroundColor:"#FCFCFC", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center"}}><p style={{margin: "0"}}>Шахар туманлар номи</p></h6>
                    {chachishgan.map((chach, index)=> <Tumanlar tumanHandler={tumanHandler} key={index} info={chach}></Tumanlar>)}   
                </div>
                <div className="monitor_right">
                    <table className="monitor_table">
                        <thead>
                    <tr style={{backgroundColor: "#00B5E4", color: "white"}}>
                    
                        <th>Юборилган вақти</th>
                        <th>Изох</th>
                        <th>Тавсияларга мувофиқлиги(%)</th>
                        <th>Изох</th>
                        <th>Бажарилиш кўрсаткичи (%)</th>
                        <th>Бажарилган ишлар маълумоти (%)</th>
                        <th>Изох</th>
                        <th>Бажарилиш сифати (Фотофактлар) %</th>
                        <th>Изох</th>
                        <th>Ишлар ташкил этилганлик кўрсаткичи (%)</th>
                        <th>Тахлилий кўрсаткич (%)</th> 
                        <th></th>
                        <th></th>
                        
                    </tr>
                    </thead>
                    <tbody>
                        {chachishgan.map((chach, index)=> <Royxatlar setOzgar={()=> setOzgar(!ozgar)} key={index} info2={chach}></Royxatlar>)}
                    </tbody>
                        <tfoot></tfoot>
                    </table>
                </div>
               <Modal></Modal>
               {load ? <Loader></Loader>: null}
            </div>
        )
    }else {
        return (
            <Loader></Loader>
        )
    }
    
}
const mapStateToProps = (state)=> {
    return {
      chachishgan: state.curInfo.chachishgan,
      tumanlar: state.curInfo.tumanlar,
      info4: state.curInfo.info4,
      load: state.curInfo.load
    }
  }
export default connect(mapStateToProps, { getTumanlar,setChach,setInfo3 ,getBaholar})(Monitor_body)
