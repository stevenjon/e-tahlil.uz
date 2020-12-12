import React, {useEffect} from 'react'
import Buttonlar from './Buttonlar'
import { Editor } from '@tinymce/tinymce-react';
import {connect} from 'react-redux'
import {setIz,closeModal} from '../../actions/userActions'

const Editor1 = ({setIz,iz, btn_iz,closeModal, hotlinks}) => {
    const [html, setHtml] = React.useState('');
    useEffect(() => {
            if(iz[btn_iz]) {
                setHtml(iz[btn_iz])
            }   
    }, [])
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

            <Editor
                    style={{minHeight: "50%"}}
                    value={html}
                    outputFormat='html'
                    apiKey="5s5wv4wvh0agbh1msrx9iuw2k61cn12nrrgeulvxwat79o5r"
                    init={{
                        height: 500,
                        
                        menubar: false,
                        menubar: 'file edit view format tools table help',
                        plugins: [
                        'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap emoticons'
                        ],
                        toolbar:
                        'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print |  ltr rtl'
                    }}
                    onEditorChange={(content)=> {
                        setHtml(content)
                    }
                    }
                    />

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
export default connect(mapStateToProps, {setIz, closeModal})(Editor1)