import React from 'react'
import ReactHtmlParser from 'react-html-parser'

const Pbody = ({info, s, tum}) => {
    // let fio;
    
    let kor = true;
    let xok

    switch (s) {
        case "1":
            // fio = info[0].fio1
            xok = "хокими"
            break;
            case "2":
                // fio = info[0].fio2
                xok = "Прокурор"
                break;
                case "3":
                    // fio = info[0].fio3
                    xok = "ИИБ"
                    break;
                    case "4":
                        // fio = info[0].fio4
                        xok = "ДСИ"
                        break;                   
        default:
            break;
    }

    if(info.length > 0 && info[0].um_ish_t_et1_iz !==null && info[0].tav_muvof_iz !==null && info[0].b_sif_iz !==null &&  info[0].um_ish_t_et_iz !==null) {
        kor = true
    }else {
        kor = false
    }
    if(kor) {
        return (
            <div style={{display: "flex", flexDirection:"column", justifyContent:"center", alignItems: "center", marginBottom:"10px", wordBreak: "break-word"}}>
                <h3 style={{margin:"2px", fontWeight:'bold'}}>{tum} {xok}  ({info[0].jami && parseInt(info[0].jami)} Балл)</h3>
                <p style={{margin:"2px", textIndent: "40px", textAlign: "justify"}}>{info[0].tav_muvof_iz ? ReactHtmlParser(info[0].tav_muvof_iz): ""}</p>
                <p style={{margin:"2px", textIndent: "40px", textAlign: "justify"}}>{info[0].um_ish_t_et_iz ? ReactHtmlParser(info[0].um_ish_t_et_iz):"" }</p>
                <p style={{margin:"2px", textIndent: "40px", textAlign: "justify"}}>{info[0].b_sif_iz ? ReactHtmlParser(info[0].b_sif_iz) : ""}</p>
                <p style={{margin:"2px", textIndent: "40px", textAlign: "justify"}}>{info[0].um_ish_t_et1_iz ? ReactHtmlParser(info[0].um_ish_t_et1_iz): ""}</p>
                
                
            </div>
        )
    }else {
        return null
    }
    
}

export default Pbody
