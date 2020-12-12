import React, {Children, useEffect, useState} from 'react'
import axios from 'axios';
import M from 'moment'
import baseUrl from './baseUrl'
import Umumiy from './Umumiy';
import DateForm from './DateForm';
import { Link } from "react-router-dom";
import Tasdiq from './tasdiq'
import SModal from './SModal'

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
function getWithExpiry() {
	const itemStr = localStorage.getItem("sdate")
	// if the item doesn't exist, return null
	if (!itemStr) {
		return null
	}
	const item = JSON.parse(itemStr)
	const now = new Date()
	// compare the expiry time of the item with the current time
	if (now.getTime() > item.expiry) {
		// If the item is expired, delete the item from storage
		// and return null
		localStorage.removeItem("sdate")
		return null
	}
	return item.value
}


const Content = ({sCon, sPrint, sD, setS, setL}) => {
    const savedDate = getWithExpiry()




    const [mal, setMal] = useState()
    const [open, setOpen] = useState()
    const [Mcon, setMcon] = useState({})
    const [malsec, setMalsec] = useState()
    const [cursec, setCursec] = useState(0)
    const [nechta, setNechta] = useState(1)
    const [checkers, setCheckers] = useState()
    const [checkNum, setCheckNum] = useState()
    const [date1, setDate1] = useState(savedDate ? savedDate: M().subtract(1, 'days').format("yyyy-MM-DD"))
    const [date2, setDate2] = useState(M().startOf('week').isoWeekday(1).subtract(1, 'days').format("yyyy-MM-DD"))
    const [date3, setDate3] = useState(M().subtract(1, 'days').format("yyyy-MM-DD"))
    const [shdate1, setShDate1] = useState(M().subtract(1, 'days').format("yyyy-MM-DD"))
    const [shdate2, setShDate2] = useState(M().startOf('week').isoWeekday(1).subtract(1, 'days').format("yyyy-MM-DD"))
    const [shdate3, setShDate3] = useState(M().subtract(1, 'days').format("yyyy-MM-DD"))

    useEffect( () => {
        getCheckers()
        getBaho(date1, 0)
    }, [])

    const getBaho = async (date, sec = 0)=> {
        let formData = new FormData();
        formData.append('date', date)
        try {
            setL(true)
            const resp = await axios.post(`${baseUrl}get_umumiy.php`, formData);
            const mapedS7 = resp.data

            let chn = []
               

            setMal(mapedS7)
            switch (sec) {
                case 1:
                    const maped1 = resp.data.filter((m) => m.s1 == 1 ).map((x)=> {
                        const obj = {...x}
                        obj.soni = 1
                        return obj
                    })
                    const mapedS1 = maped1.sort(function (x, y) {
                        return   y.um_ish_et_3 - x.um_ish_et_3;
                    })
                    const maped111 = maped1.filter((m)=> m.status == 1)
                    if(maped111.length > 0) {
                        chn.push(1)
                 
                    }
                    const maped221 = maped1.filter((m)=> m.status2 == 1)
                    if(maped221.length > 0) {
                        chn.push(2)
                  
                    }
                    const maped331 = maped1.filter((m)=> m.status3 == 1)
                    if(maped331.length > 0) {
                        chn.push(3)
                       
                    }
                    setCheckNum(chn)
                    setMalsec(mapedS1)
                    break;
                    case 2:
                        const maped2 = resp.data.filter((m) => m.s1 == 2 ).map((x)=> {
                            const obj = {...x}
                            obj.soni = 1
                            return obj
                        })
                        const mapedS2 = maped2.sort(function (x, y) {
                            return   y.um_ish_et_3 - x.um_ish_et_3;
                        })
                    
                    const maped112 = maped2.filter((m)=> m.status == 1)
                    if(maped112.length > 0) {
                        chn.push(1)
                 
                    }
                    const maped222 = maped2.filter((m)=> m.status2 == 1)
                    if(maped222.length > 0) {
                        chn.push(2)
                  
                    }
                    const maped332 = maped2.filter((m)=> m.status3 == 1)
                    if(maped332.length > 0) {
                        chn.push(3)
                       
                    }
                    setCheckNum(chn)
                        setMalsec(mapedS2)
                        break;
                        case 3:
                            const maped3 = resp.data.filter((m) => m.s1 == 3 ).map((x)=> {
                                const obj = {...x}
                                obj.soni = 1
                                return obj
                            })
                            const mapedS3 = maped3.sort(function (x, y) {
                                return   y.um_ish_et_3 - x.um_ish_et_3;
                            })

                            const maped113 = maped3.filter((m)=> m.status == 1)
                            if(maped113.length > 0) {
                                chn.push(1)
                         
                            }
                            const maped223 = maped3.filter((m)=> m.status2 == 1)
                            if(maped223.length > 0) {
                                chn.push(2)
                          
                            }
                            const maped333 = maped3.filter((m)=> m.status3 == 1)
                            if(maped333.length > 0) {
                                chn.push(3)
                               
                            }
                            setCheckNum(chn)
                            setMalsec(mapedS3)
                            break;    
                            case 4:
                                const maped4 = resp.data.filter((m) => m.s1 == 4 ).map((x)=> {
                                    const obj = {...x}
                                    obj.soni = 1
                                    return obj
                                })
                                const mapedS4 = maped4.sort(function (x, y) {
                                    return   y.um_ish_et_3 - x.um_ish_et_3;
                                })

                                const maped114 = maped4.filter((m)=> m.status == 1)
                                if(maped114.length > 0) {
                                    chn.push(1)
                             
                                }
                                const maped224 = maped4.filter((m)=> m.status2 == 1)
                                if(maped224.length > 0) {
                                    chn.push(2)
                              
                                }
                                const maped334 = maped4.filter((m)=> m.status3 == 1)
                                if(maped334.length > 0) {
                                    chn.push(3)
                                   
                                }
                                setCheckNum(chn)
                                setMalsec(mapedS4)
                                break;
                                case 5:
                                    const mapedS5 = resp.data.sort(function (x, y) {
                                        return   y.shah_jami - x.shah_jami;
                                    })
                                    const maped115 = mapedS5.filter((m)=> m.status == 1)
                                    if(maped115.length > 0) {
                                        chn.push(1)
                                 
                                    }
                                    const maped225 = mapedS5.filter((m)=> m.status2 == 1)
                                    if(maped225.length > 0) {
                                        chn.push(2)
                                  
                                    }
                                    const maped335 = mapedS5.filter((m)=> m.status3 == 1)
                                    if(maped335.length > 0) {
                                        chn.push(3)
                                       
                                    }
                                    setCheckNum(chn)
                                    setMalsec(mapedS5)
                                    break;

                                    case 0:
                                    const mapedS0 = resp.data
                                    const maped110 = mapedS0.filter((m)=> m.status == 1)
                                    if(maped110.length > 0) {
                                        chn.push(1)
                                 
                                    }
                                    const maped220 = mapedS0.filter((m)=> m.status2 == 1)
                                    if(maped220.length > 0) {
                                        chn.push(2)
                                  
                                    }
                                    const maped330 = mapedS0.filter((m)=> m.status3 == 1)
                                    if(maped330.length > 0) {
                                        chn.push(3)
                                       
                                    }
                                    setCheckNum(chn)
                                    setMalsec(mapedS0)
                                    break;
                                    case 6:
                                        const mapedS6 = resp.data.sort(function (x, y) {
                                            return   y.shah_jami - x.shah_jami;
                                        })

                                    
                                        setMalsec(mapedS6)
                                        break;         
                                             
            
                default:
                    break;
            }
            setCursec(sec)
            setL(false)
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    }

    const getOraliq = async (d1,d2)=> {
      
        d1 = M(d1, "yyyy-MM-DD")
        d2 = M(d2, "yyyy-MM-DD")
  
        const ora = d2.diff(d1, 'days')

        let formData = new FormData();
        formData.append('date1', d1._i)
        formData.append('date2', d2._i)
        formData.append('oraliq', ora+1)
        console.log(ora+1,d1._i, d2._i)
        try {
            setL(true)
            const resp = await axios.post(`${baseUrl}get_haftalik.php`, formData);
            const mapedS6 = resp.data.sort(function (x, y) {
                return   y.shah_jami - x.shah_jami;
            })
            console.log(resp.data)
            let chn = []
                const maped11 = mapedS6.filter((m)=> m.status == 1)
                if(maped11.length > 0) {
                    chn.push(1)
                 
                }
                const maped22 = mapedS6.filter((m)=> m.status2 == 1)
                if(maped22.length > 0) {
                    chn.push(2)
                  
                }
                const maped33 = mapedS6.filter((m)=> m.status3 == 1)
                if(maped33.length > 0) {
                    chn.push(3)
                    
                }
    
                setCheckNum(chn)
            
            setMalsec(mapedS6)

            setL(false)
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    }
    const sec1 = () => {
        if(mal) {
            const maped = mal.filter((m) => m.s1 == 1 ).map((x)=> {
                const obj = {...x}
                obj.soni = 1
                return obj
            })
            const mapedS = maped.sort(function (x, y) {
                return   y.um_ish_et_3 - x.um_ish_et_3;
            })
            let chn = []
                const maped11 = maped.filter((m)=> m.status == 1)
                if(maped11.length > 0) {
                    chn.push(1)
                    console.log(maped11)
                }
                const maped22 = maped.filter((m)=> m.status2 == 1)
                if(maped22.length > 0) {
                    chn.push(2)
                    console.log(maped22)
                }
                const maped33 = maped.filter((m)=> m.status3 == 1)
                if(maped33.length > 0) {
                    chn.push(3)
                    console.log(maped33)
                }
                setCheckNum(chn)
            setMalsec(maped)
            setCursec(1)
            setS(1)
            setNechta(1)
            
        }
    }
    const sec2 = () => {
        if(mal) {
            const maped = mal.filter((m) => m.s1 == 2 ).map((x)=> {
                const obj = {...x}
                obj.soni = 1
                return obj
            })
            const mapedS = maped.sort(function (x, y) {
                return   y.um_ish_et_3 - x.um_ish_et_3;
            })
           
            let chn = []
                const maped11 = maped.filter((m)=> m.status == 1)
                if(maped11.length > 0) {
                    chn.push(1)
                    console.log(maped11)
                }
                const maped22 = maped.filter((m)=> m.status2 == 1)
                if(maped22.length > 0) {
                    chn.push(2)
                    console.log(maped22)
                }
                const maped33 = maped.filter((m)=> m.status3 == 1)
                if(maped33.length > 0) {
                    chn.push(3)
                    console.log(maped33)
                }
                setCheckNum(chn)
            setMalsec(maped)
            setCursec(2)
            setS(2)
            setNechta(1)
        }
    }
    const sec3 = () => {
        if(mal) {
            const maped = mal.filter((m) => m.s1 == 3 ).map((x)=> {
                const obj = {...x}
                obj.soni = 1
                return obj
            })
            const mapedS = maped.sort(function (x, y) {
                return   y.um_ish_et_3 - x.um_ish_et_3;
            })

            let chn = []
                const maped11 = maped.filter((m)=> m.status == 1)
                if(maped11.length > 0) {
                    chn.push(1)
                    console.log(maped11)
                }
                const maped22 = maped.filter((m)=> m.status2 == 1)
                if(maped22.length > 0) {
                    chn.push(2)
                    console.log(maped22)
                }
                const maped33 = maped.filter((m)=> m.status3 == 1)
                if(maped33.length > 0) {
                    chn.push(3)
                    console.log(maped33)
                }
                setCheckNum(chn)
            setMalsec(maped)
            setCursec(3)
            setS(3)
            setNechta(1)
        }
    }
    const sec4 = () => {
        if(mal) {
            const maped = mal.filter((m) => m.s1 == 4 ).map((x)=> {
                const obj = {...x}
                obj.soni = 1
                return obj
            })
            const mapedS = maped.sort(function (x, y) {
                return   y.um_ish_et_3 - x.um_ish_et_3;
            })
            let chn = []
                const maped11 = maped.filter((m)=> m.status == 1)
                if(maped11.length > 0) {
                    chn.push(1)
                    console.log(maped11)
                }
                const maped22 = maped.filter((m)=> m.status2 == 1)
                if(maped22.length > 0) {
                    chn.push(2)
                    console.log(maped22)
                }
                const maped33 = maped.filter((m)=> m.status3 == 1)
                if(maped33.length > 0) {
                    chn.push(3)
                    console.log(maped33)
                }
                setCheckNum(chn)
            setMalsec(maped)
            setCursec(4)
            setS(4)
            setNechta(1)
        }
    }
    const umm = () => {
        setCursec(0)
        setS(0)
        setNechta(1)
        getBaho(date1, 0)
    }
    const oral = () => {
      setCheckNum(null)
      setCursec(6)
        if(mal) {
             const mapedS = mal.sort(function (x, y) {
            return   y.shah_jami - x.shah_jami;
            })
            // let chn = []
            //     const maped11 = mapedS.filter((m)=> m.status == 1)
            //     if(maped11.length > 0) {
            //         chn.push(1)
            //         console.log(maped11)
            //     }
            //     const maped22 = mapedS.filter((m)=> m.status2 == 1)
            //     if(maped22.length > 0) {
            //         chn.push(2)
            //         console.log(maped22)
            //     }
            //     const maped33 = mapedS.filter((m)=> m.status3 == 1)
            //     if(maped33.length > 0) {
            //         chn.push(3)
            //         console.log(maped33)
            //     }
            //     setCheckNum(chn)
            setMalsec(mapedS)
            setNechta(2)
            
            getOraliq(date2,date3)
        }   
    }
    const tum = () => {
        if(mal) {
            const mapedS = mal.sort(function (x, y) {
                return   y.shah_jami - x.shah_jami;
            })
            let chn = []
            const maped11 = mal.filter((m)=> m.status == 1)
            if(maped11.length > 0) {
                chn.push(1)
                console.log(maped11)
            }
            const maped22 = mal.filter((m)=> m.status2 == 1)
            if(maped22.length > 0) {
                chn.push(2)
                console.log(maped22)
            }
            const maped33 = mal.filter((m)=> m.status3 == 1)
            if(maped33.length > 0) {
                chn.push(3)
                console.log(maped33)
            }
            setCheckNum(chn)
            console.log(mapedS)
            setMalsec(mapedS)
            setCursec(5)
            setS(null)
            setNechta(1)
        }
    }
    const dateHandler1 = (value) => {
        setDate1(M(value).format("YYYY-MM-DD"))
        
        
        // getBaho(e.target.value, cursec)
    }
    const dateHandler2 = (dates) => {
        setDate2(M(dates[0]).format("YYYY-MM-DD"))
        setDate3(M(dates[1]).format("YYYY-MM-DD"))

        // setDate2(e.target.value)
        // getOraliq(e.target.value, date3)
        
    }
    // const dateHandler3 = (e) => {
    //     setDate3(e.target.value)
    //     // getOraliq(date2, e.target.value)
    //     setCursec(6);
    // }
    const print = ()=> {
        sCon(malsec)
        sD(date1)


    }
    const closeModal = ()=> {
        setOpen(false)
    }
    const setMcon1 = (text, s1, tuman_name, baho, nim) =>{
        setMcon({
            text: text,
            sec: s1,
            tuman_name: tuman_name,
            baho: baho,
            nim: nim
        })
        setOpen(true)
    }
    const getCheckers = async () =>{
        const resp = await axios.get(`${baseUrl}get_all_checkers.php`)
        if(resp.data) {

            setCheckers(resp.data)

        }    
    }
    let  i =0
    const Refresh = () =>  {
        if(cursec == 6) {
            

            getOraliq(date2, date3)
            setShDate2(date2)
            setShDate3(date3)
            
        }else {
            getBaho(date1, cursec)
            setShDate1(date1)
            const now = new Date()
            const item = {
                value: date1,
                expiry: now.getTime() + 7200000,
            }
            localStorage.setItem("sdate", JSON.stringify(item))
            
        }
    }
    return (
        <div style={{
            margin: "0px auto",
            padding: "50px",
            maxWidth: "1900px"
        }}>
            <div className="ot_btns">
                <button onClick={umm} className={cursec == 0 ? "ot_btn btn_tan": "ot_btn"}>Умумий</button>
                <button onClick={sec1} className={cursec == 1 ? "ot_btn btn_tan": "ot_btn"}>1-сектор</button>
                <button onClick={sec2} className={cursec == 2 ? "ot_btn btn_tan": "ot_btn"}>2-сектор</button>
                <button onClick={sec3} className={cursec == 3 ? "ot_btn btn_tan": "ot_btn"}>3-сектор</button>
                <button onClick={sec4} className={cursec == 4 ? "ot_btn btn_tan": "ot_btn"}>4-сектор</button>
               
                <button onClick={tum} className={cursec == 5 ? "ot_btn btn_tan": "ot_btn"}>Шахар туман кесимида</button>
                <button onClick={oral} className={cursec == 6 ? "ot_btn btn_tan": "ot_btn"}>Вақт кесимида</button>
            </div>
            <div className="tasdiq_con">
                {checkers && checkNum ? checkNum.map(ch => <Tasdiq info={checkers[ch-1]}></Tasdiq> ): null}
            </div>
            <div style={{display: "flex", alignItems:"flex-end", margin: "10px 0"}}>
            <div className="cen"></div>
            <div className="cen" style={{textAlign:"right"}}>
    { cursec == 6 ? <h3  style={{fontWeight: "500", fontSize: "17px"}}>{shdate2} - {shdate3} йил холати бўйича малумот</h3>:<h3 style={{fontWeight: "500"}}>{shdate1} йил холати бўйича малумот</h3>}
            </div>
            <div className="cen" style={{display: "flex", alignItems:"center",width: "33,333%",justifyContent: "flex-end"}}>
            <DateForm nechta={nechta} date1={date1} date2={date2} date3={date3} dateHandler1={dateHandler1} dateHandler2={dateHandler2}></DateForm>
                <div onClick={Refresh} style={{cursor: "pointer", margin: "0 15px", color: "var(--main-color)", fontSize:"18px"}}><i class="fas fa-redo"></i></div>
                {cursec !==6 ? <div onClick={print} style={{cursor: "pointer" }}><Link to="/print"><img src="/print.svg"></img></Link></div>: null}
                </div>
            </div>
            <div style={{overflowY: "auto"}}>
            <table style={{width: "100%"}}>
                <thead>
                <tr style={{backgroundColor: "#00B5E4", color: "white", fontWeight:"400 !important"}}>
                    <th style={{fontWeight:"500", fontSize:"12pt"}}>№</th>
                    <th style={{fontWeight:"500", fontSize:"12pt"}} colSpan="2">Шаҳар-туман номи</th>
  
                    <th style={{fontWeight:"500", fontSize:"12pt"}} colSpan="3">Иш режа тузилиши бўйича</th>
                    
                    <th style={{fontWeight:"500", fontSize:"12pt"}} colSpan="3">Иш режа асосида ишларни ташкил этилганлиги</th>
               
                <th style={{fontWeight:"500", fontSize:"12pt"}} colSpan="2">Умумий</th>
                {/* {(cursec == 5 || cursec == 6) ? <th style={{fontWeight:"bold", fontSize:"12pt"}}>Рейтинг</th>: null} */}
                    </tr>
                <tr style={{backgroundColor: "#00B5E4", color: "white", fontWeight:"400 !important"}}>
                    <th>Т/р  </th>
                    <th>Шахар, туманлар номи</th>
                    <th>Сектор</th>
                    <th>Юборилган
                вакти (%)</th>
                    <th>Тавсияларга
                мувофиқлиги (%)</th>
                    <th>Бажарилиш кўрсаткичи (%)</th>
                    <th>Бажарилган ишлар маълумоти (%)</th>
                <th>Бажарилиш сифати (Фотофактлар) %</th>
                <th>Ишлар ташкил этилганлик кўрсаткичи (%)</th>
                <th>Тахлилий кўрсаткич (%)</th>
                {(cursec == 5 || cursec == 6) ? <th>Рейтинг</th>: null}
                    </tr>
                </thead>
         
                    <tbody>
                          {malsec ? malsec.map((m, index)=> {
                            if(m.soni !== "0") {
                                i++
                            }
                             return <Umumiy setOpen={setOpen} setMcon1={setMcon1} i={i} key={index} info={m} cursec={cursec}></Umumiy>
                          }): null} 

                              
                                  

                          
                     </tbody>
               
               
            </table>
            </div>
            <SModal open={open} content={Mcon} closeModal={closeModal}></SModal>
        </div>
    )
}

export default Content
