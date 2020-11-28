import React from 'react'
import Sector from './Sector'
const SectorC = ({S}) => {
    return (
        <div className="container">
                <h3 style={{textAlign:"center"}}>Секторлар</h3>
                <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Сектор</th>
                    <th scope="col">Парол</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                   {S && S.map((m)=> <Sector info={m}></Sector>)}
                </tbody>
                </table>
            </div>
    )
}

export default SectorC
