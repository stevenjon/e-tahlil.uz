import React from 'react'

const Buttonlar = ({btn, Add}) => {
    return (
    <button style={{borderRadius: "5px"}} onClick={()=> Add(btn.content)} className="hot_btn">{btn.title}</button>
    )
}

export default Buttonlar
