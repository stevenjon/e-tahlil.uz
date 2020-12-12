import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import ReactHtmlParser from 'react-html-parser'


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

function SimpleModal({open=false, content, closeModal}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  



  const body = (
    <div style={modalStyle} className={classes.paper}>
        <center><h3 style={{marginBottom:"5px"}}>{content.tuman_name} <span>{content.sec}-сектор</span></h3></center>
  <center style={{marginBottom:"5px"}}><span style={{color: "var(--main-color)"}}>{content.nim} ({content.baho}%)</span></center>
        <center>{ReactHtmlParser(content.text)}</center>
        <div onClick={closeModal}  style={{letterSpacing:"3px", color: "red", position: "absolute", right: "10px", top: "1px",cursor:"pointer", fontSize: "30px"}}>&times;</div>
    </div>
  );
  return (
    <div>
      <Modal
        open={open}
        onClose={closeModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
export default SimpleModal
