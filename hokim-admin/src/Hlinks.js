import React, {useState} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import baseUrl from './baseUrl'

const Hlinks = ({info}) => {

    const [ez, setEz] = useState(false)
    const [input, setInput] = useState(info.title) 
    const [input1, setInput1] = useState(info.content)
    const [input3, setInput3] = useState(info.type)

    const inputHandler = (e) => {
        setInput(e.target.value)
    }
    const inputHandler1 = (e) => {
        setInput1(e.target.value)
    }
    const inputHandler3 = (e) => {
        setInput3(e.target.value)
    }

    const editT =async ()=> {
        let formData = new FormData();
            
        formData.append('id', info.id)
        formData.append('title',input)
        formData.append('content',input1)
        formData.append('type',input3)
                    try {
                        const resp = await axios.post(`${baseUrl}up_hlinks.php`, formData);
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
        <td><input  onFocus={() => setEz(true)} onChange={inputHandler} type="text" className="form-control" value={input}/></td>
        <td> <input  onFocus={() => setEz(true)} onChange={inputHandler1} type="text" className="form-control" value={input1}/></td>
        <td><select onChange={inputHandler3} class="form-control" id="exampleFormControlSelect1">
            <option value="tav_muvof_iz" selected={info.type == "tav_muvof_iz" ? "selected": false}>Юборилган вакти</option>
            <option value="um_ish_t_et_iz" selected={info.type == "um_ish_t_et_iz" ? "selected": false}>Тавсияларга мувофиқлиги</option>
            <option value="b_sif_iz" selected={info.type == "b_sif_iz" ? "selected": false}>Бажарилган ишлар таҳлилий</option>
            <option value="um_ish_t_et1_iz" selected={info.type == "um_ish_t_et1_iz" ? "selected": false}>Бажарилиш сифати (%) (Фотофактлар)</option>
            </select></td>
        
        {ez ? <td><i onClick={editT} className="fas fa-edit primary btn"></i></td>:<td><i className="fas fa-edit"></i></td>}
    </tr>
    )
}

export default Hlinks
