import React from 'react'
import Tuman from './tuman'
const TumanC = ({vils}) => {
    return (
        <div className="container">
        <h3 style={{textAlign:"center"}}>Туман шахарлар</h3>
        <table className="table">
        <thead>
            <tr style={{textAlign: "center"}}>
            <th scope="col">#</th>
            <th scope="col">Туман</th>
            <th scope="col">Хоким<small id="emailHelp" class="form-text text-muted">(1-сектор)</small></th>
            <th scope="col">Прокурор<small id="emailHelp" class="form-text text-muted">(2-сектор)</small></th>
            <th scope="col">ИИБ<small id="emailHelp" class="form-text text-muted">(3-сектор)</small></th>
            <th scope="col">ДСИ<small id="emailHelp" class="form-text text-muted">(4-сектор)</small></th>
            <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
           {vils && vils.map((m)=> <Tuman info={m}></Tuman>)}
        </tbody>
        </table>
    </div>
    )
}

export default TumanC
