import React from 'react'
import Hokim from './Hokim'
const HokimC = ({H}) => {
    return (
        <div className="container">
        <h3 style={{textAlign:"center"}}>Хокимият хисобот</h3>
        <table className="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Логин</th>
            <th scope="col">Парол</th>
            <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
           {H && H.map((m)=> <Hokim info={m}></Hokim>)}
        </tbody>
        </table>
    </div>
    )
}

export default HokimC
