import React from 'react'

const PrintHead = ({d, s}) => {
    console.log(s)
    return (
        <div style={{display: "flex"}}>
            <div>
    <h3 style={{textAlign: 'center', fontSize: "17pt", fontWeight:'bold'}}>Фарғона вилоятидаги туман ва шаҳарлардаги {s}-сектор раҳбарлари томонидан кунлик иш режаларни ва уларнинг ижроси бўйича хисоботларни тақдим этиш юзасидан </h3>
            <h2 style={{textAlign: 'center', fontWeight:'bold'}}>МАЪЛУМОТ</h2>
            <p style={{textAlign: "right"}}><b><i>{d} йил</i></b></p>
            </div>
        </div>
    )
}

export default PrintHead
