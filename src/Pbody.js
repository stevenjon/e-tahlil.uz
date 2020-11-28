import React from 'react'
import ReactHtmlParser from 'react-html-parser'

const Pbody = ({info}) => {
    let fio;
    let kor = true;
    let xok

    switch (info.s1) {
        case "1":
            fio = info.fio1
            xok = "хокими"
            break;
            case "2":
                fio = info.fio2
                xok = "Прокурор"
                break;
                case "3":
                    fio = info.fio3
                    xok = "ИИБ"
                    break;
                    case "4":
                        fio = info.fio4
                        xok = "ДСИ"
                        break;                   
        default:
            break;
    }

    if(info.um_ish_t_et1_iz !==null && info.tav_muvof_iz !==null && info.b_sif_iz !==null &&  info.um_ish_t_et_iz !==null) {
        kor = true
    }else {
        kor = false
    }
    console.log(kor)
    if(kor) {
        return (
            <div style={{display: "flex", flexDirection:"column", justifyContent:"center", alignItems: "center"}}>
                <h3 style={{margin:"0"}}>{info.tuman_name} {xok}  {fio} ({info.um_ish_et_3 && parseInt(info.um_ish_et_3)} Балл)</h3>
                <p style={{margin:"0"}}>Юборилган вакти ({info.tav_muvof} балл): {info.tav_muvof_iz ? ReactHtmlParser(info.tav_muvof_iz): "Изох қўйилмаган"}</p>
                <p style={{margin:"0"}}>Тавсияларга мувофиқлиги ({info.b_sif} балл): {info.b_sif_iz ? ReactHtmlParser(info.b_sif_iz) : "Изох қўйилмаган"}</p>
                <p style={{margin:"0"}}>Бажарилган ишлар таҳлилий ({info.um_ish_t_et1} балл): {info.um_ish_t_et1_iz ? ReactHtmlParser(info.um_ish_t_et1_iz): "Изох қўйилмаган"}</p>
                <p style={{margin:"0"}}>Бажарилиш сифати (Фотофактлар) ({info.um_ish_t_et} балл): {info.um_ish_t_et_iz ? ReactHtmlParser(info.um_ish_t_et_iz):"Изох қўйилмаган" }</p>
                
            </div>
        )
    }else {
        return null
    }
    
}

export default Pbody
