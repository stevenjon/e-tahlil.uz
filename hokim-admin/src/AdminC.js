import React from 'react'
import Admin from './Admin'

const AdminC = ({A}) => {
    return (
        <div className="container">
                <h3 style={{textAlign:"center"}}>Админ панел</h3>
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
                   {A && A.map((m)=> <Admin info={m}></Admin>)}
                </tbody>
                </table>
            </div>
    )
}

export default AdminC
