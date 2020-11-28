import React, {useState} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import baseUrl from './baseUrl'

const Sector = ({info}) => {
    const [ez, setEz] = useState(false)
    const [input, setInput] = useState(info.sector_parol) 

    const inputHandler = (e) => {
        setInput(e.target.value)
    }
    const editT =async ()=> {
        let formData = new FormData();
            
        formData.append('id', info.id)
        formData.append('parol',input)
                    try {
                        const resp = await axios.post(`${baseUrl}up_sec.php`, formData);
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
            <td>{info.sector_soni}</td>
            <td> <input  onFocus={() => setEz(true)} onChange={inputHandler} type="text" className="form-control" value={input}/></td>
            
            {ez ? <td><i onClick={editT} className="fas fa-edit primary btn"></i></td>:<td><i className="fas fa-edit"></i></td>}
        </tr>
    )
}

export default Sector
