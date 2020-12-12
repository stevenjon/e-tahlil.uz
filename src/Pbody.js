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
    if(kor) {
        return (
            <div style={{display: "flex", flexDirection:"column", justifyContent:"center", marginBottom:"10px", whiteSpace: "normal", wordBreak: "break-word"}}>
                <h3 style={{margin:"5px", textAlign: "center", fontWeight:'bold'}}>{info.tuman_name} {xok}  {fio} ({info.um_ish_et_3 && parseInt(info.um_ish_et_3)} Балл)</h3>
                <p style={{margin:"2px", textAlign: "justify", textIndent: "40px"}}>{info.tav_muvof_iz ? ReactHtmlParser(info.tav_muvof_iz): ""}</p>
                <p style={{margin:"2px", textAlign: "justify", textIndent: "40px"}}>{info.um_ish_t_et_iz ? ReactHtmlParser(info.um_ish_t_et_iz):"" }</p>
                <p style={{margin:"2px", textAlign: "justify", textIndent: "40px"}}>{info.b_sif_iz ? ReactHtmlParser(info.b_sif_iz) : ""}</p>
                <p style={{margin:"2px", textAlign: "justify", textIndent: "40px"}}>{info.um_ish_t_et1_iz ? ReactHtmlParser(info.um_ish_t_et1_iz): ""}</p>
                
            </div>
        )
    }else {
        return null
    }
    
}

export default Pbody
