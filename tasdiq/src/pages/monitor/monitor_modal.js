import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Editor from './monitor_editor'
import {connect} from 'react-redux'
import {closeModal} from '../../actions/userActions'


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
    width: "80%",
    height: "80%",
    overflowY: 'auto',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function SimpleModal({open=false, closeModal}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  



  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Editor></Editor>
      <SimpleModal />
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

const mapStateToProps = (state)=> {
  return {
    open: state.curInfo.open
  }
}
export default connect(mapStateToProps, {closeModal})(SimpleModal)
