import React from 'react'

const Tumanlar = ({info, tumanHandler}) => {
    let color="";
    let icon = null
    if(info.content && info.content.length > 0) {
        color="tuman_contentli"
        icon = <i className="fas fa-check-circle"></i>
    }else {
        color="tuman_contentsiz"

    }
    if(info.status == "edit") {
        color= "tuman_edit"
        icon = <i className="fas fa-edit"></i>
    }
    return (
        <div onClick={()=> tumanHandler(info.tuman_id)} className={color} style={{display: "flex",cursor: "pointer", justifyContent: "space-between", alignItems: "center",padding: "0 10px",boxSizing: "border-box",border: "2px solid white", height: "60px"}}>
        <div className="monitor_tuman_icon">
        <i style={{marginRight: "15px"}} className="fas fa-hotel"></i>
            <span>{info.tuman_name}</span>
        </div>
        <div className="monitor_tuman_right_icon">
        {icon}
        </div>
        </div>
    )
}

export default Tumanlar
