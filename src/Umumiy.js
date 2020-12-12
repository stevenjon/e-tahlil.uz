import React from 'react'
import { toast } from 'react-toastify'
import C from './colors'
const Umumiy = ({info, cursec, setMcon1,i}) => {
        const shah_jami = Number(info.shah_jami).toFixed(1)
        const um_ish_et_3 = Number(info.um_ish_et_3).toFixed(1)
        let tasdiq = true;
    let color;

    if(cursec !==6 && cursec !==0 && cursec !==5) {
        if(um_ish_et_3 >= 0 && um_ish_et_3 < 6) {
            color = C.c5
        }
        if(um_ish_et_3 > 5 && um_ish_et_3 < 11) {
            color = C.c10
        }
        if(um_ish_et_3 > 10 && um_ish_et_3 < 16) {
            color = C.c15
        }
        if(um_ish_et_3 > 15 && um_ish_et_3 < 21) {
            color = C.c20
        }
        if(um_ish_et_3 > 20 && um_ish_et_3 < 26) {
            color = C.c25
        }
        if(um_ish_et_3 > 25 && um_ish_et_3 < 31) {
            color = C.c30
        }
        if(um_ish_et_3 > 30 && um_ish_et_3 < 36) {
            color = C.c35
        }
        if(um_ish_et_3 > 35 && um_ish_et_3 < 41) {
            color = C.c40
        }
        if(um_ish_et_3 > 40 && um_ish_et_3 < 46) {
            color = C.c45
        }
        if(um_ish_et_3 >45  && um_ish_et_3 < 51) {
            color = C.c50
        }
        if(um_ish_et_3 > 50 && um_ish_et_3 < 56) {
            color = C.c55
        }
        if(um_ish_et_3 > 55 && um_ish_et_3 < 61) {
            color = C.c60
        }
        if(um_ish_et_3 > 60 & um_ish_et_3 < 66) {
            color = C.c65
        }
        if(um_ish_et_3 > 65 && um_ish_et_3 < 71) {
            color = C.c70
        }
        if(um_ish_et_3 > 70 && um_ish_et_3 < 76) {
            color = C.c75
        }
        if(um_ish_et_3 > 75 && um_ish_et_3 < 81) {
            color = C.c80
        }
        if(um_ish_et_3 > 80 && um_ish_et_3 < 86) {
            color = C.c85
        }
        if(um_ish_et_3 > 85 && um_ish_et_3 < 91) {
            color = C.c90
        }
        if(um_ish_et_3 > 90 && um_ish_et_3 < 96) {
            color = C.c95
        }
        if(um_ish_et_3 >96  && um_ish_et_3 <= 100) {
            color = C.c100
        }
    }
    if(cursec == 5 || cursec == 6) {
        if(shah_jami >= 0 && shah_jami < 6) {
            color = C.c5
        }
        if(shah_jami > 5 && shah_jami < 11) {
            color = C.c10
        }
        if(shah_jami > 10 && shah_jami < 16) {
            color = C.c15
        }
        if(shah_jami > 15 && shah_jami < 21) {
            color = C.c20
        }
        if(shah_jami > 20 && shah_jami < 26) {
            color = C.c25
        }
        if(shah_jami > 25 && shah_jami < 31) {
            color = C.c30
        }
        if(shah_jami > 30 && shah_jami < 36) {
            color = C.c35
        }
        if(shah_jami > 35 && shah_jami < 41) {
            color = C.c40
        }
        if(shah_jami > 40 && shah_jami < 46) {
            color = C.c45
        }
        if(shah_jami >45  && shah_jami < 51) {
            color = C.c50
        }
        if(shah_jami > 50 && shah_jami < 56) {
            color = C.c55
        }
        if(shah_jami > 55 && shah_jami < 61) {
            color = C.c60
        }
        if(shah_jami > 60 & shah_jami < 66) {
            color = C.c65
        }
        if(shah_jami > 65 && shah_jami < 71) {
            color = C.c70
        }
        if(shah_jami > 70 && shah_jami < 76) {
            color = C.c75
        }
        if(shah_jami > 75 && shah_jami < 81) {
            color = C.c80
        }
        if(shah_jami > 80 && shah_jami < 86) {
            color = C.c85
        }
        if(shah_jami > 85 && shah_jami < 91) {
            color = C.c90
        }
        if(shah_jami > 90 && shah_jami < 96) {
            color = C.c95
        }
        if(shah_jami >96  && shah_jami <= 100) {
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
        if(shah_jami >= 0 && shah_jami < 6) {
            color = C.c5
        }
        if(shah_jami > 5 && shah_jami < 11) {
            color = C.c10
        }
        if(shah_jami > 10 && shah_jami < 16) {
            color = C.c15
        }
        if(shah_jami > 15 && shah_jami < 21) {
            color = C.c20
        }
        if(shah_jami > 20 && shah_jami < 26) {
            color = C.c25
        }
        if(shah_jami > 25 && shah_jami < 31) {
            color = C.c30
        }
        if(shah_jami > 30 && shah_jami < 36) {
            color = C.c35
        }
        if(shah_jami > 35 && shah_jami < 41) {
            color = C.c40
        }
        if(shah_jami > 40 && shah_jami < 46) {
            color = C.c45
        }
        if(shah_jami >45  && shah_jami < 51) {
            color = C.c50
        }
        if(shah_jami > 50 && shah_jami < 56) {
            color = C.c55
        }
        if(shah_jami > 55 && shah_jami < 61) {
            color = C.c60
        }
        if(shah_jami > 60 & shah_jami < 66) {
            color = C.c65
        }
        if(shah_jami > 65 && shah_jami < 71) {
            color = C.c70
        }
        if(shah_jami > 70 && shah_jami < 76) {
            color = C.c75
        }
        if(shah_jami > 75 && shah_jami < 81) {
            color = C.c80
        }
        if(shah_jami > 80 && shah_jami < 86) {
            color = C.c85
        }
        if(shah_jami > 85 && shah_jami < 91) {
            color = C.c90
        }
        if(shah_jami > 90 && shah_jami < 96) {
            color = C.c95
        }
        if(shah_jami >96  && shah_jami <= 100) {
            color = C.c100
        }
    }

    return (    
        <tr style={tasdiq ? {backgroundColor: color}: {}}>
            {info.soni !=="0" ? <td rowSpan={info.soni}>{cursec == 0 ? info.tuman_id1: i}</td>: null}
            {info.soni !=="0" ? <td rowSpan={info.soni}>{ info.tuman_name}</td>: null}
            

            <td style={{width: "70px"}}>{info.s1+"-cектор"}</td>
            <td  onClick={()=>{ 
                    if(info.tav_muvof_iz && cursec !== 6 && tasdiq) {
                        setMcon1(info.tav_muvof_iz,info.s1,info.tuman_name,info.tav_muvof, "Юборилган вакти")
                    }else {
                        
                        if(info.tav_muvof !==null && cursec !== 6) {
                            toast("Изох мавжуд емас.", {
                            toastId: 5
                          })
                        }
                    }
                    
                }
            }><span style={{width:"25px", display:"inline-block"}}>{info.tav_muvof && tasdiq ? Math.floor(info.tav_muvof) : ""}</span>{info.tav_muvof && tasdiq && cursec !== 6  ? <i style={{color:"var(--main-color)", marginLeft:"5px"}} class="fas fa-search"></i>: null}</td>
            <td onClick={()=> {

                    if(info.um_ish_t_et_iz && cursec !== 6 && tasdiq) {
                        setMcon1(info.um_ish_t_et_iz,info.s1,info.tuman_name,info.tav_muvof, "Тавсияларга мувофиқлиги")
                    }else {
                        if(info.um_ish_t_et !==null && cursec !== 6 && tasdiq) {
                            toast("Изох мавжуд емас.", {
                            toastId: 6
                          })
                        }
                        
                    }
                    
                
            }}><span style={{width:"25px", display:"inline-block"}}>{info.um_ish_t_et && tasdiq ?  Math.floor(info.um_ish_t_et): ""}</span>{info.um_ish_t_et && tasdiq && cursec !== 6  ? <i style={{color:"var(--main-color)", marginLeft:"5px"}} class="fas fa-search"></i>: null}</td>
            <td style={{color: "#000", fontWeight:"500"}}>{info.um_ish_t_et && tasdiq ? Math.floor((info.tav_muvof && info.um_ish_t_et && (parseInt(info.tav_muvof)+parseInt(info.um_ish_t_et))/2)): ""}</td>
            <td  onClick={()=> {
                    if(info.b_sif_iz && cursec !== 6 && tasdiq) {
                        setMcon1(info.b_sif_iz,info.s1,info.tuman_name,info.tav_muvof, "Бажарилган ишлар таҳлилий")
                    }else {
                        if(info.b_sif && cursec !== 6) {
                            toast("Изох мавжуд емас.", {
                            toastId: 7
                          })
                        }
                        
                    }
            }}><span style={{width:"25px", display:"inline-block"}}>{info.b_sif && tasdiq ? Math.floor(info.b_sif): ""}</span>{info.b_sif && tasdiq && cursec !== 6  ? <i style={{color:"var(--main-color)", marginLeft:"5px"}} class="fas fa-search"></i>: null}</td>
            <td onClick={()=> {
                if(info.um_ish_t_et1_iz && cursec !== 6 && tasdiq) {
                    setMcon1(info.um_ish_t_et1_iz,info.s1,info.tuman_name,info.tav_muvof, "Бажарилиш сифати (Фотофактлар)")
                }else {

                    if(info.um_ish_t_et1 !==null && cursec !== 6) {
                        toast("Изох мавжуд емас.", {
                        toastId: 8
                      })
                    }
                }
            }}   ><span style={{width:"25px", display:"inline-block"}}>{info.um_ish_t_et1 && tasdiq ? Math.floor(info.um_ish_t_et1): ""}</span>{info.um_ish_t_et1 && tasdiq && cursec !== 6 ? <i style={{color:"var(--main-color)", marginLeft:"5px"}} class="fas fa-search"></i>: null}</td>
            <td style={{color: "#000", fontWeight:"500"}}>{info.um_ish_t_et1 && tasdiq ? Math.floor((info.b_sif && info.um_ish_t_et1 && (parseInt(info.b_sif)+parseInt(info.um_ish_t_et1))/2)): ""}</td>
            <td style={{color: "#000", fontWeight:"500"}}>{info.um_ish_t_et1 && tasdiq ? Math.floor((info.um_ish_t_et1 && ((parseInt(info.tav_muvof)+parseInt(info.um_ish_t_et))/2+(parseInt(info.b_sif)+parseInt(info.um_ish_t_et1))/2)/2)):""}</td>
            {(cursec == 5 || cursec == 6) &&  info.soni !=="0" ? <td style={{fontWeight:"500"}} rowSpan={info.soni}>{tasdiq ? Math.floor(shah_jami): ""}</td>: null}
        </tr>
    )

}

export default Umumiy
