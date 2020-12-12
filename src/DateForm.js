import React from 'react'
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment'
import 'moment/locale/ru';
import locale from 'antd/es/date-picker/locale/ru_RU';


const {RangePicker} = DatePicker;

const DateForm = ({nechta, date1, date2,date3, dateHandler1, dateHandler2,dateHandler3 }) => {
 
    const dateFormat = 'YYYY-MM-DD';
    if(nechta == 1 && date1){
        return (

            <DatePicker locale={locale} style={{border: "1px solid var(--main-color)"}} defaultValue={moment(date1, dateFormat)}  onChange={(date) => dateHandler1(date)} format={dateFormat} />
           
        )
    }
    if(nechta == 2) {
        return (
            <div>

                <RangePicker locale={locale}  defaultValue={[moment(date2), moment(date3)]} onChange={(dates)=> dateHandler2(dates)}/>
        
                        </div>
        )
        
    }else {
        return (
            <h1></h1>
        )
    }


}

export default DateForm
