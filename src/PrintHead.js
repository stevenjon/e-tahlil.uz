import React from 'react'

const PrintHead = ({d, s}) => {
    console.log(s)
    return (
        <div style={{display: "flex"}}>
            <div>
    <h3 style={{textAlign: 'center'}}>Фарғона вилоятидаги туман ва шаҳарлардаги {s}-сектор раҳбарлари томонидан кунлик иш режаларни ва уларнинг ижроси бўйича хисоботларни тақдим этиш юзасидан </h3>
            <h2 style={{textAlign: 'center'}}>МАЪЛУМОТ</h2>
            <p style={{textAlign: "right"}}>{d} йил</p>
            </div>
        </div>
    )
}

export default PrintHead
