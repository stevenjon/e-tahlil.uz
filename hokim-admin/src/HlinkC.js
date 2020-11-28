import React from 'react'
import AddL from './addL';
import Hlinks from './Hlinks'
const HlinkC = ({L, addlink, addL, ghlinks}) => {
    return (
        <div className="container">
                <h3 style={{textAlign:"center"}}>Горячие кнопки</h3>
                <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Сарлавха</th>
                    <th scope="col">Матн</th>
                    <th scope="col">Тури</th>
                    <th><i onClick={addlink} className="fas fa-plus btn-warning btn"></i></th>
                    </tr>
                </thead>
                <tbody>
                   {L && L.map((m)=> <Hlinks info={m}></Hlinks>)}
                   {addL && <AddL ghlinks={ghlinks}></AddL>}
                </tbody>
                </table>
            </div>
    )
}

export default HlinkC
