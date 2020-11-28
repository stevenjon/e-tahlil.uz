import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
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

const DateForm = ({nechta, date1, date2,date3, dateHandler1, dateHandler2,dateHandler3 }) => {
    const classes = useStyles();
    if(nechta == 1 && date1){
        return (
            <TextField
                            id="date"
                            label="Бахолаш вақти"
                            type="date"
                            defaultValue= {date1}
                            className={classes.textField}
                            onChange={dateHandler1}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
        )
    }
    if(nechta == 2) {
        return (
            <div>
        <TextField
                            id="date"
                            label="Дан"
                            type="date"
                            defaultValue= {date2}
                            className={classes.textField}
                            onChange={dateHandler2}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                        <TextField
                            id="date"
                            label="Гача"
                            type="date"
                            defaultValue= {date3}
                            className={classes.textField}
                            onChange={dateHandler3}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                        </div>
        )
        
    }else {
        return (
            <h1></h1>
        )
    }


}

export default DateForm
