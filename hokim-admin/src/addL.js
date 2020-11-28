import React, {useState} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import baseUrl from './baseUrl'

const Hlinks = ({ghlinks}) => {

    const [ez, setEz] = useState(false)
    const [input, setInput] = useState("") 
    const [input1, setInput1] = useState("")
    const [input3, setInput3] = useState("")

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
            
        if(input == "" || input1 == "" || input3 == "") {
            toast("Бўш жойларни тўлдиринг!")
        }else {
            formData.append('title',input)
        formData.append('content',input1)
        formData.append('type',input3)
                    try {
                        const resp = await axios.post(`${baseUrl}add_hlinks.php`, formData);
                        const data = resp.data
                        if(data) {
                            ghlinks()
                            toast("Сақланди")
                            setEz(false)
                        }
                            

                        
                    } catch (err) {
                        // Handle Error Here
                        console.error(err);
                    }   
        }
        


    }
    return (
        <tr>
        <th scope="row"></th>
        <td><input  onFocus={() => setEz(true)} onChange={inputHandler} type="text" className="form-control" value={input}/></td>
        <td> <input  onFocus={() => setEz(true)} onChange={inputHandler1} type="text" className="form-control" value={input1}/></td>
        <td><select onChange={inputHandler3} class="form-control" id="exampleFormControlSelect1">
            <option value="" disabled selected>Турини танланг</option>
            <option value="tav_muvof_iz" >Юборилган вакти</option>
            <option value="um_ish_t_et_iz" >Тавсияларга мувофиқлиги</option>
            <option value="b_sif_iz" >Бажарилган ишлар таҳлилий</option>
            <option value="um_ish_t_et1_iz" >Бажарилиш сифати (%) (Фотофактлар)</option>
            </select></td>
        
        {ez ? <td><i onClick={editT} className="fas fa-edit primary btn"></i></td>:<td><i className="fas fa-edit"></i></td>}
    </tr>
    )
}

export default Hlinks