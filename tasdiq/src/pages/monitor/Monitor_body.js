import React, {useEffect, useState} from 'react'
import Tumanlar from './Tumanlar'
import Royxatlar from './Royxatlar'
import SModal from './SModal'
import Modal from './monitor_modal'
import {connect} from 'react-redux'
import Loader from './Loader'
import { getTumanlar, getBaholar, setChach, setInfo3, setTumanId} from '../../actions/userActions'

const Monitor_body = ({info4,chachishgan,load, tumanlar, getBaholar, setChach, setInfo3, sec, setTumanId}) => {
    const [ozgar, setOzgar]= useState(false)
     useEffect(() => {
        getBaholar(sec)

     }, [tumanlar,info4, ozgar])          
    const tumanHandler = (id)=> {
        setTumanId(id)
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
                    <h6 style={{fontSize: "16px",height: "90px",boxSizing: "border-box",margin:"0", verticalAlign: "middle", color: "#747474", fontWeight: "normal",backgroundColor:"#FCFCFC", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center"}}><p style={{margin: "0"}}>Шахар туманлар номи</p></h6>
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
                        <th>Иш режа бажарилиши таҳлилий (%)</th>
                        <th>Бажарилган ишлар таҳлилий (%)</th>
                        <th>Изох</th>
                        <th>Бажарилган ишларни фотосуратлари(%)</th>
                        <th>Изох</th>
                        <th>Бажарилган ишларни умумий (%)</th>
                        <th>Умум тахлилий (%)</th> 
                        <th></th>
                        <th></th>
                        
                    </tr>
                    </thead>
                    <tbody>
                        {chachishgan.map((chach, index)=> <Royxatlar sec={sec} setOzgar={()=> setOzgar(!ozgar)} key={index} info2={chach}></Royxatlar>)}
                    </tbody>
                        <tfoot></tfoot>
                    </table>
                </div>
               <SModal></SModal>
               <Modal></Modal>
               {load ? <Loader></Loader>: null}
            </div>
        )
    }else {
        return(
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
export default connect(mapStateToProps, { getTumanlar,setChach,setInfo3 ,getBaholar, setTumanId})(Monitor_body)
