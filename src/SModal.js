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
    width: 400,
    height: 200,
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
        <center><h3>{content.tuman_name} <span>{content.sec}-сектор</span></h3></center>
  <center><span style={{color: "var(--main-color)"}}>{content.nim} ({content.baho}%)</span></center>
        {ReactHtmlParser(content.text)}
        <div><button onClick={closeModal}  style={{marginTop: "10px", marginLeft: "80%",letterSpacing:"3px", backgroundColor: "#51686C"}} className="hot_btn">Орқага</button></div>
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
