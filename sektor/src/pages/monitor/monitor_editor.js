import React, {useEffect} from 'react'
import { DefaultEditor } from 'react-simple-wysiwyg';
import Buttonlar from './Buttonlar'
import {connect} from 'react-redux'
import {toast} from 'react-toastify'
import {getHotLinks} from '../../actions/userActions'
import {setIz,closeModal} from '../../actions/userActions'
import baseUrl from '../../baseUrl'
import axios from 'axios'

const Editor = ({setIz,iz, btn_iz,closeModal, hotlinks, getHotLinks}) => {
    const [html, setHtml] = React.useState('');
    const [edit, setEdit] = React.useState(0);
    const [title, setTitle] = React.useState();
    const [id, setId] = React.useState();
    useEffect(() => {
            if(iz[btn_iz]) {
                setHtml(iz[btn_iz])
            }   
    }, [])
    const onChange = (e) => {
      setHtml(e.target.value);
    };
    const Add = (data) => {
        setHtml(html + data)
    }
    const addIz = ()=> {

        setIz({[btn_iz]:html})

        closeModal()

    }

    const addHotLink =async ()=> {

        let formData = new FormData();
            
        if(html == "" || title == "") {
            toast("Бўш жойларни тўлдиринг!")
        }else {
         toast("Кутинг...")   
        formData.append('title',title)
        formData.append('content',html)
        formData.append('type',btn_iz)
                    try {
                        const resp = await axios.post(`${baseUrl}add_hlinks.php`, formData);
                        const data = resp.data
                        if(data) {
                            getHotLinks()
                            setEdit(0)
                            setTitle("")
                            setHtml(iz[btn_iz])
                         
                            toast("Сақланди")
                           
                        }
                            

                        
                    } catch (err) {
                        // Handle Error Here
                        console.error(err);
                    }   
        }
    }
    const upHotLink =async ()=> {
        let formData = new FormData();
            
        formData.append('id', id)
        formData.append('title',title)
        formData.append('content',html)
        formData.append('type',btn_iz)
                    try {
                        const resp = await axios.post(`${baseUrl}up_hlinks.php`, formData);
                        const data = resp.data
                    
                        if(data == "ok") {
                            getHotLinks()
                            setEdit(0)
                            setTitle("")
                            setHtml(iz[btn_iz])
                         
                            toast("Сақланди")

                        }else {
                            console.log("xato")
                            
                        }
                    } catch (err) {
                        // Handle Error Here
                        console.error(err);
                    }   
    }

    const delH =async ()=> {
        let formData = new FormData();
            
        formData.append('id', id)
        formData.append('del', "del")

                    try {
                        const resp = await axios.post(`${baseUrl}up_hlinks.php`, formData);
                        const data = resp.data
                    
                        if(data == "ok") {
                            getHotLinks()
                            setEdit(0)
                            setTitle("")
                            setHtml(iz[btn_iz])
                         
                            toast("Ўчирилди")

                        }else {
                            console.log("xato")
                            
                        }
                    } catch (err) {
                        // Handle Error Here
                        console.error(err);
                    }   
    }
    let btns;
    if(btn_iz && hotlinks) {
        btns = hotlinks.filter((hot)=> hot.type === btn_iz);

        let head;
        switch (btn_iz) {
            case "tav_muvof_iz":
                head = "Юборилган вақти"
                break;
                case "um_ish_t_et_iz":
                    head = "Тавсияларга мувофиқлиги"
                    break;
                case "b_sif_iz":
                    head = "Бажарилган ишлар таҳлилий "
                    break;
                    case "um_ish_t_et1_iz":
                    head = "Бажарилган ишларни фотосуратлари"
                    break;
            default:
                break;
        }
        return (
        <div>
        
            <h2 id="simple-modal-title" style={{fontWeight:"400"}}>{head}</h2>
            <div style={{display: "flex", justifyContent:"space-between"}}>
                <div className="iz_btns">
                    {edit !== 0 ?<input type='text' placeholder="Кнопка номи" value={title} onChange={(e)=> setTitle(e.target.value)} className="hot_input"/> : btns.map((btn, index)=> <Buttonlar Add={Add} key={index} btn={btn} setHtml={setHtml} setEdit={setEdit} setTitle={setTitle} setId={setId}></Buttonlar>)}
                </div>
                <div style={{display: "flex", alignItems:"center"}}>
                <div onClick={()=> setEdit(1)} style={{color: "var(--main-color)", fontSize: "20px", marginRight:"10px", cursor:"pointer"}}><i class="fas fa-plus-square"></i></div>
                
                </div>
            </div>
             <DefaultEditor style={{maxHeight:"230px", minHeight: "200px"}} value={html} onChange={onChange} />
              
                  {edit == 0 ? ( <center><button onClick={addIz}  style={{marginTop: "10px"}} className="hot_btn">Сақлаш</button>
              <button onClick={closeModal}  style={{marginTop: "10px", marginLeft: '7%', backgroundColor: "#51686C"}} className="hot_btn">Бекор қилиш</button></center>): edit == 1 ? <center><button onClick={addHotLink}  style={{marginTop: "10px"}} className="hot_btn">Сақлаш</button>
              <button onClick={()=>setEdit(0)}  style={{marginTop: "10px", marginLeft: '7%', backgroundColor: "#51686C"}} className="hot_btn">Бекор қилиш</button></center>: <center><button onClick={upHotLink}  style={{marginTop: "10px"}} className="hot_btn">Сақлаш</button>
              <button onClick={delH}  style={{marginTop: "10px", marginLeft: '7%', backgroundColor: "#CC1919"}} className="hot_btn">Ўчириш</button><button onClick={()=>setEdit(0)}  style={{marginTop: "10px", marginLeft: '7%', backgroundColor: "#51686C"}} className="hot_btn">Бекор қилиш</button></center> }

        </div>
         )
    }else {
        return (
            <h1>Кутинг...</h1>
        )

    }
   
    
}
const mapStateToProps = (state)=> {
    return {
      btn_iz: state.curInfo.btn_iz,
      iz: state.curInfo.info,
      hotlinks: state.curInfo.hotlinks
    }
  }
export default connect(mapStateToProps, {setIz, closeModal,getHotLinks})(Editor)