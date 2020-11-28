import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Monitor_body from './Monitor_body'
import Moment from 'react-moment';
import M from 'moment'
import {connect} from 'react-redux'
import {getHotLinks,setDate, getTumanlar,getBaholar} from '../../actions/userActions'
const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));
const Monitor_content = ({getHotLinks,tumanlar,setDate,date, getTumanlar,getBaholar}) => {
    const [clock, setClock] = useState()
    useEffect(() => {
        const currentDate = M().format("yyyy-MM-DD")
        setDate(currentDate)
        setClock(M().format("H:mm"))
        setInterval(() => {
            setClock(M().format("H:mm"))
        }, 1000);
        getTumanlar()
        getHotLinks()
        getBaholar()
        
    }, [])
    const classes = useStyles();
    const monitor = window.localStorage.getItem("monitor")
    const dateHandler = (e) => {
        setDate(e.target.value)
        console.log("date  cg")
        getBaholar()    
    }
    const removeMonitor = ()=> {
        window.localStorage.removeItem("monitor")
        window.location.reload()
    }

    return (
        <div style={{backgroundColor: "#E5E5E5", width: "100vw", height: "100%"}}>
            <div className="navbar">
                <div className="navbar_brand">
                <h2 style={{margin: "0"}}><img style={{verticalAlign: "middle", color: "white"}} src="Vector.svg"></img><span  style={{verticalAlign: "middle", color: "white"}} className="sektor_text">Сектор мониторинг</span></h2>
                </div>
                <div className="navbar_items">
                    <ul style={{display: "flex", alignItems: "center"}}>
    <li><span style={{fontSize: "20px"}}>{monitor}-сектор |</span></li>&nbsp; 
                        <li>Ўз</li>&nbsp;
                        <li><div><img src="user.svg" alt="user"></img></div></li>
                        <li style={{marginLeft:"5px"}}> <i onClick={removeMonitor} className="fas fa-sign-out-alt icon_chiq"></i></li>

                    </ul>
                </div>
            </div>
            <div className="monitor_content">
                <div className="monitor_content_head">
                    <div className="clock" style={{textAlign: "center"}}>
                        <h1 style={{margin: "0",marginBottom: "2px"}}>{clock}</h1>
                        <p style={{marginTop: "0", color: "#676767", fontSize: "12px"}}>
                            <Moment format="MM-DD-YYYY">
                                
                            </Moment>
                            </p>
                    </div>
                    <div className="monitor_calendar">
                        {date ? <form className={classes.container} noValidate>
                        <TextField
                            id="date"
                            label="Бахолаш вақти"
                            type="date"
                            defaultValue= {date}
                            className={classes.textField}
                            onChange={dateHandler}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                        </form>: null}
                    
                    </div>
                </div>
                {date ?  <Monitor_body date={date}>

                </Monitor_body>: null}
               
            </div>
        </div>
    )
}
const mapStateToProps = (state)=> {
    return {
      date: state.curInfo.date,
      tumanlar: state.curInfo.tumanlar
    }
  }
export default connect(mapStateToProps, {getHotLinks,setDate, getTumanlar,getBaholar})(Monitor_content)
