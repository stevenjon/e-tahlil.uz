import React from 'react'

const Tasdiq = ({info}) => {
    return (
        <div className='tasdiq'>
                    <div>
                        <h4 style={{margin: "0"}}>
                            {info.job}
                        </h4>
    <h4 style={{margin: "0", textAlign: "right"}}>{info.name}</h4>
                    </div>
                    <div style={{textAlign:"center"}}>
                        <img src="/qr.png" width='60px'></img>
                        <h5 style={{margin: "0", color:"black"}}>(Тасдиқлайман)</h5>
                    </div>
        </div>
    )
}

export default Tasdiq
