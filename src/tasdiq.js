import React from 'react'

const Tasdiq = ({info}) => {
    return (
        <div className='tasdiq'>
                    <div>
                        <h4 style={{margin: "0", fontWeight: "400"}}>
                            {info.job}
                        </h4>
    <h4 style={{margin: "0", textAlign: "right", fontWeight: "400"}}>{info.name}</h4>
                    </div>
                    <div style={{textAlign:"center", fontWeight: "400"}}>
                        <img src="/qr.png" width='60px'></img>
                        <h5 style={{margin: "0", color:"black" , fontWeight: "400"}}>(Тасдиқлайман)</h5>
                    </div>
        </div>
    )
}

export default Tasdiq
