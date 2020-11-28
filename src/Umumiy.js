import React from 'react'
import { toast } from 'react-toastify'
import C from './colors'
const Umumiy = ({info, cursec, setMcon1}) => {
        const shah_jami = Number(info.shah_jami).toFixed(1)
        const um_ish_et_3 = Number(info.um_ish_et_3).toFixed(1)
        let tasdiq = true;
    let color;

    if(cursec !==6 && cursec !==0 && cursec !==5) {
        if(um_ish_et_3 > 0 && um_ish_et_3 < 11) {
            color = C.c10
        }
        if(um_ish_et_3 > 10 && um_ish_et_3 < 21) {
            color = C.c20
        }
        if(um_ish_et_3 > 20 && um_ish_et_3 < 31) {
            color = C.c30
        }
        if(um_ish_et_3 > 30 && um_ish_et_3 < 41) {
            color = C.c40
        }
        if(um_ish_et_3 > 40 && um_ish_et_3 < 51) {
            color = C.c50
        }
        if(um_ish_et_3 >50 && um_ish_et_3 < 61) {
            color = C.c60
        }
        if(um_ish_et_3 > 60 && um_ish_et_3 < 71) {
            color = C.c70
        }
        if(um_ish_et_3 > 70 && um_ish_et_3 < 81) {
            color = C.c80
        }
        if(um_ish_et_3 > 80 && um_ish_et_3 < 91) {
            color = C.c90
        }
        if(um_ish_et_3 > 90 && um_ish_et_3 <= 100) {
            color = C.c100
        }
    }
    if(cursec == 5 || cursec == 6) {
        if(shah_jami > 0 && shah_jami < 11) {
            color = C.c10
        }
        if(shah_jami > 10 && shah_jami < 21) {
            color = C.c20
        }
        if(shah_jami > 20 && shah_jami < 31) {
            color = C.c30
        }
        if(shah_jami > 30 && shah_jami < 41) {
            color = C.c40
        }
        if(shah_jami > 40 && shah_jami < 51) {
            color = C.c50
        }
        if(shah_jami >50 && shah_jami < 61) {
            color = C.c60
        }
        if(shah_jami > 60 && shah_jami < 71) {
            color = C.c70
        }
        if(shah_jami > 70 && shah_jami < 81) {
            color = C.c80
        }
        if(shah_jami > 80 && shah_jami < 91) {
            color = C.c90
        }
        if(shah_jami > 90 && shah_jami <= 100) {
            color = C.c100
        }
    }

    if(info.status == 0 && info.status2 ==0 && info.status3 == 0) {
        tasdiq = false
        color = null
    }
    if(info.status == null && info.status2 ==null && info.status3 == null) {
        tasdiq = false
        color = null
    }

    if(cursec == 6) {
        
        tasdiq = true
        if(shah_jami > 0 && shah_jami < 11) {
            color = C.c10
        }
        if(shah_jami > 10 && shah_jami < 21) {
            color = C.c20
        }
        if(shah_jami > 20 && shah_jami < 31) {
            color = C.c30
        }
        if(shah_jami > 30 && shah_jami < 41) {
            color = C.c40
        }   
        if(shah_jami > 40 && shah_jami < 51) {
            color = C.c50
        }
        if(shah_jami >50 && shah_jami < 61) {
            color = C.c60
        }
        if(shah_jami > 60 && shah_jami < 71) {
            color = C.c70
        }
        if(shah_jami > 70 && shah_jami < 81) {
            color = C.c80
        }
        if(shah_jami > 80 && shah_jami < 91) {
            color = C.c90
        }
        if(shah_jami > 90 && shah_jami <= 100) {
            color = C.c100
        }
    }
    return (    
        <tr style={color && {backgroundColor: color}}>
            {info.soni !=="0" ? <td rowSpan={info.soni}>{info.tuman_id1}</td>: null}
            {info.soni !=="0" ? <td rowSpan={info.soni}>{ info.tuman_name}</td>: null}
            

            <td style={{width: "70px"}}>{info.s1+"-cектор"}</td>
            <td style={{color: "#00B5E4"}} onClick={()=>{ 
                    if(info.tav_muvof_iz) {
                        setMcon1(info.tav_muvof_iz,info.s1,info.tuman_name,info.tav_muvof, "Юборилган вакти")
                    }else {
                        
                        if(info.tav_muvof !==null) {
                            toast("Изох мавжуд емас.", {
                            toastId: 5
                          })
                        }
                    }
                    
                }
                }>{tasdiq ? info.tav_muvof : ""}</td>
            <td style={{color: "#00B5E4"}} onClick={()=> {

                    if(info.um_ish_t_et_iz) {
                        setMcon1(info.um_ish_t_et_iz,info.s1,info.tuman_name,info.tav_muvof, "Тавсияларга мувофиқлиги")
                    }else {
                        if(info.um_ish_t_et !==null) {
                            toast("Изох мавжуд емас.", {
                            toastId: 6
                          })
                        }
                        
                    }
                    
                
            }}>{tasdiq ?  info.um_ish_t_et: ""}</td>
            <td style={{color: "#000"}}>{tasdiq ? (info.tav_muvof && info.um_ish_t_et && (parseInt(info.tav_muvof)+parseInt(info.um_ish_t_et))/2): ""}</td>
            <td style={{color: "#00B5E4"}} onClick={()=> {
                    if(info.b_sif_iz) {
                        setMcon1(info.b_sif_iz,info.s1,info.tuman_name,info.tav_muvof, "Бажарилган ишлар таҳлилий")
                    }else {
                        if(info.b_sif) {
                            toast("Изох мавжуд емас.", {
                            toastId: 7
                          })
                        }
                        
                    }
            }}>{tasdiq ? info.b_sif: ""}</td>
            <td style={{color: "#00B5E4"}} onClick={()=> {
                if(info.um_ish_t_et1_iz) {
                    setMcon1(info.um_ish_t_et1_iz,info.s1,info.tuman_name,info.tav_muvof, "Бажарилиш сифати (Фотофактлар)")
                }else {

                    if(info.um_ish_t_et1 !==null) {
                        toast("Изох мавжуд емас.", {
                        toastId: 8
                      })
                    }
                }
            }}   >{tasdiq ? info.um_ish_t_et1: ""}</td>
            <td style={{color: "#000"}}>{tasdiq ? (info.b_sif && info.um_ish_t_et1 && (parseInt(info.b_sif)+parseInt(info.um_ish_t_et1))/2): ""}</td>
            <td style={{color: "#000"}}>{tasdiq ? (info.um_ish_t_et1 && ((parseInt(info.tav_muvof)+parseInt(info.um_ish_t_et))/2+(parseInt(info.b_sif)+parseInt(info.um_ish_t_et1))/2)/2):""}</td>
            {(cursec == 5 || cursec == 6) &&  info.soni !=="0" ? <td rowSpan={info.soni}>{tasdiq ? shah_jami: ""}</td>: null}
        </tr>
    )

}

export default Umumiy
