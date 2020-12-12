import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux';
import axios from 'axios'
import baseUrl from '../../baseUrl'
import { setInfo3,clearInfo,setBtnIz, setCurInfo1, setInputs, setTumanId, handleOpen, handleOpen1} from '../../actions/userActions'
import { toast } from 'react-toastify';

const Royxatlar = ({setInfo3,clearInfo,setOzgar,formInfo,info2,btn_iz,info1,tuman_id,date, handleOpen,handleOpen1, setCurInfo1, setTumanId, setBtnIz, setInputs, sec }) => {
        const [info, setInfo] = useState({})
        useEffect(() => {
            
            setInfo(info2.content[0])
        
        }, [info2])
        let disable = true
        if(info2 && info2.status === "edit") {
                
                    disable = false
                
            }

    const handleIz1 = (e) => {
        if(disable) {
            // console.log("sadasd")
            setTumanId(info2.tuman_id)
            setBtnIz("tav_muvof_iz")
            handleOpen1() 
        }else {
            console.log("sadasd")
            setBtnIz("tav_muvof_iz")
             handleOpen() 
        }
             
    }
    const handleIz2 = (e) => {
         
        if(disable) {
            setTumanId(info2.tuman_id)
            setBtnIz("um_ish_t_et_iz")
            handleOpen1()
        }else {
            setBtnIz("um_ish_t_et_iz")
        handleOpen()
        }      
    }
    const handleIz3 = (e) => {
        
         
        if(disable) {
            setTumanId(info2.tuman_id)
            setBtnIz("b_sif_iz")
            handleOpen1() 
        }else {
            setBtnIz("b_sif_iz")
            handleOpen() 
        }      
    }
    const handleIz4 = (e) => {
      
        if(disable) {
            setTumanId(info2.tuman_id)
            setBtnIz("um_ish_t_et1_iz")
            handleOpen1()  
        }else {
            setBtnIz("um_ish_t_et1_iz")
            handleOpen()  
        }        
    }
    const handleInput = (e) => {
        console.log(e.target.value.includes("."))
        if(e.target.value > 100) {
            
        }else {
            if(e.target.value.includes(".") || e.target.value.includes(",")) {
                    
            }else {
                setInfo({
                            ...info,
                            [e.target.name]: parseInt(e.target.value)
                            })
                        setCurInfo1(info)
            }
             
        }
         
    }

            
    
    const postBaho = async() => {
        if(disable) {
            toast("Бу вилоят танланмаган!", {
                toastId: 4
              })
        }else {
            toast("Кутинг...")
            let formData = new FormData();  
            
            formData.append('vaqt', date)
            formData.append('sec_soni',sec)
            formData.append('tuman_id',info2.tuman_id )
            formData.append('tav_muvof',info.tav_muvof)
            formData.append('tav_muvof_iz',formInfo.tav_muvof_iz)
            formData.append('um_ish_t_et',info.um_ish_t_et)
            formData.append('um_ish_t_et_iz',formInfo.um_ish_t_et_iz)
            formData.append('b_sif',info.b_sif)
            formData.append('b_sif_iz',formInfo.b_sif_iz)
            formData.append('um_ish_t_et1',info.um_ish_t_et1)
            formData.append('um_ish_t_et1_iz',formInfo.um_ish_t_et1_iz)
            console.log(formInfo)   
                        try {
                            const resp = await axios.post(`${baseUrl}add_baho.php`, formData);
                            const data = resp.data
                        
                            if(data) {
                              
                                if(data) {
                                    setOzgar()
                                    toast.dismiss()
                                    console.log(data)
                                }
                            }else {
                                console.log(data)
                                
                            }
                        } catch (err) {
                            // Handle Error Here
                            console.error(err);
                        }
        } 
        
    }
    const deleteBaho = async(id)=> {
        if(disable) {
            toast("Bu viloyat tanlanmagan!", {
                toastId: 5
              })
        }else {
            toast("Kuting...")
        let formData = new FormData();
        
        formData.append('id', id)
        console.log(date)

                    try {
                        const resp = await axios.post(`${baseUrl}del_baho.php`, formData);
                        const data = resp.data
                    
                        if(data == "ok") {
                                
                                setInfo3({})
                                console.log("delete")
                                window.location.reload()
                                setInfo({})
                                toast.dismiss()
                
                            
                        }else {
                            console.log("xato")
                            
                        }
                    } catch (err) {
                        // Handle Error Here
                        console.error(err);
                    }
        }  
        
    }
      if(info2) {
        return (
            <tr className={info2.status === "edit" ? "tuman_edit": "null"}>
                <td><input step='1' disabled={disable ? "disabled": false} name="tav_muvof" onChange={handleInput} className={info2.status === "edit" ? "input_edit": ""} type="number" min="0" max="100" value={info ? (info.tav_muvof ? info.tav_muvof: ""): ""}/></td>
                <td>{info && info.tav_muvof_iz ? <button value="tav_muvof_iz" onClick={handleIz1}  className={info2.status === "edit" ? "input_edit iz_btn hov    ": "iz_btn"}> <i style={{color: "blue"}} className="fas fa-check"></i></button> : <button value="t_muvof_iz" onClick={handleIz1} className={info2.status === "edit" ? "input_edit iz_btn hov": "iz_btn"}> <i className="far fa-eye"></i></button>}</td>
                <td><input step='1' disabled={disable ? "disabled": false} name="um_ish_t_et" onChange={handleInput} className={info2.status === "edit" ? "input_edit": ""} type="number" min="0" max="100" value={info ? (info.um_ish_t_et ? info.um_ish_t_et: ""):""}/></td>
                <td><button value="um_ish_t_et_iz" onClick={handleIz2} className={info2.status === "edit" ? "input_edit iz_btn hov": "iz_btn"}>{info && info.um_ish_t_et_iz ? <i style={{color: "blue"}} className="fas fa-check"></i>:<i className="fas fa-eye"></i>}</button></td>
                <td style={{fontSize: "20px"}}>{info ? (info.um_ish_t_et ?   (parseInt(info.tav_muvof)+parseInt(info.um_ish_t_et))/2 : null): null}</td>
                <td><input step='1' disabled={disable ? "disabled": false} name="b_sif" onChange={handleInput} className={info2.status === "edit" ? "input_edit": ""} type="number" min="0" max="100" value={info ? (info.b_sif ? info.b_sif:""): ""}/></td>
                <td><button value="b_sif_iz" onClick={handleIz3} className={info2.status === "edit" ? "input_edit iz_btn hov": "iz_btn"}>{info && info.b_sif_iz ? <i style={{color: "blue"}} className="fas fa-check"></i>:<i className="fas fa-eye"></i>}</button></td>
                <td><input step='1' disabled={disable ? "disabled": false} name="um_ish_t_et1" onChange={handleInput} className={info2.status === "edit" ? "input_edit": ""} type="number" min="0" max="100" value={info ? (info.um_ish_t_et1 ? info.um_ish_t_et1: ""): ""}/></td>
                <td><button value="um_ish_t_et1_iz" onClick={handleIz4} className={info2.status === "edit" ? "input_edit iz_btn hov": "iz_btn"}>{info && info.um_ish_t_et1_iz ? <i style={{color: "blue"}} className="fas fa-check"></i>:<i className="fas fa-eye"></i>}</button></td>
                <td style={{fontSize: "20px"}}>{info ? (info.um_ish_t_et1 ?  (parseInt(info.b_sif)+parseInt(info.um_ish_t_et1))/2 : null):null}</td>
                <td style={{fontSize: "20px"}}>{info ? (info.um_ish_t_et1 ? ((parseInt(info.tav_muvof)+parseInt(info.um_ish_t_et))/2+(parseInt(info.b_sif)+parseInt(info.um_ish_t_et1))/2)/2 : ""):""}</td>
                <td ><i onClick={postBaho} style={info2.status === "edit" ? {padding:"0 15px",fontSize: "18px", color:"#6CC070", cursor: "pointer"}: {padding:"0 15px",fontSize: "18px", color:"#6CC070"}} className="fas fa-check"></i></td>
                <td><i onClick={()=>deleteBaho(info.id)} style={info2.status === "edit" ? {padding:"0 15px",fontSize: "18px", color:"#51686C", cursor: "pointer"}: {padding:"0 15px",fontSize: "18px", color:"#51686C"}} className="fas fa-trash"></i></td>  
            </tr>
        )
      }else {
        return null
      }  
    
}
const mapStateToProps = (state)=> {
    return {
      info1: state.curInfo.chachishgan,
      tuman_id: state.curInfo.tuman_id,
      btn_iz: state.curInfo.btn_iz,
      date: state.curInfo.date,
      formInfo: state.curInfo.info,
    }
  }
export default connect(mapStateToProps, {setInfo3, clearInfo,setCurInfo1,handleOpen1, setBtnIz, setTumanId, setInputs, handleOpen})(Royxatlar)
