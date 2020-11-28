import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import baseUrl from './baseUrl'


const Tuman = ({info}) => {
    const [ez, setEz] = useState(false)
    const [input, setInput] = useState(info.sec_1) 
    const [input1, setInput1] = useState(info.sec_2) 
    const [input2, setInput2] = useState(info.sec_3) 
    const [input3, setInput3] = useState(info.sec_4) 

    const inputHandler = (e) => {
        setInput(e.target.value)
    }
    const inputHandler1 = (e) => {
        setInput1(e.target.value)
    }
    const inputHandler2 = (e) => {
        setInput2(e.target.value)
    }
    const inputHandler3 = (e) => {
        setInput3(e.target.value)
    }

    const editT =async ()=> {
        let formData = new FormData();
            
        formData.append('id', info.id)
        formData.append('sec_1',input)
        formData.append('sec_2',input1)
        formData.append('sec_3',input2)
        formData.append('sec_4',input3)

                    try {
                        const resp = await axios.post(`${baseUrl}up_vt.php`, formData);
                        const data = resp.data
                    
                        if(data == "ok") {
                            toast("Saqlandi")
                            setEz(false)

                        }else {
                            console.log("xato")
                            
                        }
                    } catch (err) {
                        // Handle Error Here
                        console.error(err);
                    }   


    }
    return (
        <tr>
            <th scope="row">{info.id}</th>
            <td>{info.tuman_name}</td>
            <td> <input  onFocus={() => setEz(true)} onChange={inputHandler} type="text" className="form-control" value={input}/></td>
            <td> <input  onFocus={() => setEz(true)} onChange={inputHandler1} type="text" className="form-control" value={input1}/></td>
            <td> <input  onFocus={() => setEz(true)} onChange={inputHandler2} type="text" className="form-control" value={input2}/></td>
            <td> <input  onFocus={() => setEz(true)} onChange={inputHandler3} type="text" className="form-control" value={input3}/></td>
            
            {ez ? <td><i onClick={editT} className="fas fa-edit primary btn"></i></td>:<td><i className="fas fa-edit"></i></td>}
    </tr>
    )
}

export default Tuman
