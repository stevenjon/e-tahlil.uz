import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import ReactHtmlParser from 'react-html-parser'
import {connect} from 'react-redux'
import {closeModal2}from '../../actions/userActions'


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: "50%",
    maxHeight: "50%",
    overflowY: "auto",
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #555',
    borderRadius: '5px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function SimpleModal({open2=false, chach, btn_iz, tuman_id,sec, closeModal2, tumanlar}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
    let content;
    let info;
    let body;
  if(btn_iz) {
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
    
    info = chach.filter(ch => ch.tuman_id === tuman_id)[0].content
    let baho
    let text
    if(info.length > 0) {
      baho = info[0][btn_iz.slice(0,-3)] 
      text = info[0][btn_iz]
    }else {
      baho=""
      text=""
    }
    
    let tuman_name;
    tuman_name = tumanlar.filter(t => t.id === tuman_id)[0].tuman_name
    content = {
        text: text,
        sec: sec,
        tuman_name: tuman_name,
        baho: baho,
        nim: head
    }


    body = (
        <div style={modalStyle} className={classes.paper}>
            <center><h3 style={{marginBottom:"5px"}}>{content.tuman_name} <span>{content.sec}-сектор</span></h3></center>
      <center style={{marginBottom:"5px"}}><span style={{color: "var(--main-color)"}}>{content.nim} ({content.baho}%)</span></center>
            <center>{ReactHtmlParser(content.text)}</center>
            <div onClick={closeModal2}  style={{letterSpacing:"3px", color: "red", position: "absolute", right: "10px", top: "1px",cursor:"pointer", fontSize: "30px"}}>&times;</div>
        </div>
      );
  }



  
  if(body) {
       return (
    <div>
      <Modal
        open={open2}
        onClose={closeModal2}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
  }else {
      return null
  } 
 
}
const mapStateToProps = (state)=> {
    return {
      chach: state.curInfo.chachishgan,
      tuman_id: state.curInfo.tuman_id,
      btn_iz: state.curInfo.btn_iz,
      sec: state.curInfo.sec,
      open2: state.curInfo.open2,
      tumanlar: state.curInfo.tumanlar
    }
  }
export default connect(mapStateToProps, {closeModal2})(SimpleModal)