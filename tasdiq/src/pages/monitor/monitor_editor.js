import React, {useEffect} from 'react'
import { DefaultEditor } from 'react-simple-wysiwyg';
import Buttonlar from './Buttonlar'
import {connect} from 'react-redux'
import {setIz,closeModal} from '../../actions/userActions'

const Editor = ({setIz,iz, btn_iz,closeModal, hotlinks}) => {
    const [html, setHtml] = React.useState('');
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
                    head = "Бажарилган ишлар таҳлилий"
                    break;
                    case "um_ish_t_et1_iz":
                    head = "Бажарилган ишларни фотосуратлари"
                    break;
            default:
                break;
        }
        return (
        <div>
            <h2 id="simple-modal-title">{head}</h2>
            {btns.map((btn, index)=> <Buttonlar Add={Add} key={index} btn={btn}></Buttonlar>)}
             <DefaultEditor style={{maxHeight:"230px", minHeight: "200px"}} value={html} onChange={onChange} />
              <center><button onClick={addIz}  style={{marginTop: "10px"}} className="hot_btn">Saqlash</button><button onClick={closeModal}  style={{marginTop: "10px",marginLeft: "7%", backgroundColor: "#51686C"}} className="hot_btn">Бекор қилиш</button></center>
        </div>
         )
    }else {
        return (
            <h1>sadlks</h1>
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
export default connect(mapStateToProps, {setIz, closeModal})(Editor)