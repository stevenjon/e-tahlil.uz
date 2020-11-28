import React, {Children, useEffect, useState} from 'react'
import axios from 'axios';
import M from 'moment'
import baseUrl from './baseUrl'
import Umumiy from './Umumiy';
import DateForm from './DateForm';
import Loader from 'react-loader-spinner'
import Tasdiq from './tasdiq'
import SModal from './SModal'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const Content = ({sCon, sPrint, sD, setS}) => {
    const [mal, setMal] = useState()
    const [open, setOpen] = useState()
    const [Mcon, setMcon] = useState({})
    const [malsec, setMalsec] = useState()
    const [cursec, setCursec] = useState(0)
    const [nechta, setNechta] = useState(1)
    const [tasdiq1, setTas1] = useState()
    const [tasdiq2, setTas2] = useState()
    const [tasdiq3, setTas3] = useState()
    const [checkers, setCheckers] = useState()
    const [checkNum, setCheckNum] = useState()
    const [date1, setDate1] = useState(M().format("yyyy-MM-DD"))
    const [date2, setDate2] = useState(M().startOf('week').isoWeekday(1).format("yyyy-MM-DD"))
    const [date3, setDate3] = useState(M().format("yyyy-MM-DD"))
    const [load, setLoad]=useState()
    useEffect( () => {
        getCheckers()
        getBaho(date1, 0)
    }, [])

    const getBaho = async (date, sec = 0)=> {
        let formData = new FormData();
        formData.append('date', date)
        try {
            setLoad(true)
            const resp = await axios.post(`${baseUrl}get_umumiy.php`, formData);
            const mapedS7 = resp.data.sort(function (x, y) {
                return   y.shah_jami - x.shah_jami;
            })
      
            let chn = []
               

         console.log(chn)
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
                                    const mapedS0 = resp.data.sort(function (x, y) {
                                        return   y.shah_jami - x.shah_jami;
                                    })
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
            setLoad(false)
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    }

    const getOraliq = async (d1,d2)=> {
        console.log("sasd")
        d1 = M(d1, "yyyy-MM-DD")
        d2 = M(d2, "yyyy-MM-DD")
  
        const ora = d2.diff(d1, 'days')

        let formData = new FormData();
        formData.append('date1', d1._i)
        formData.append('date2', d2._i)
        formData.append('oraliq', ora+1)
        try {
            setLoad(true)
            const resp = await axios.post(`${baseUrl}get_haftalik.php`, formData);
            const mapedS6 = resp.data.sort(function (x, y) {
                return   y.shah_jami - x.shah_jami;
            })
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

            setLoad(false)
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
        if(mal) {
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
                console.log(chn)
            setMalsec(mal)
            setCursec(0)
            setNechta(1)
            setS(null)
        }
    }
    const oral = () => {
        if(mal) {
             const mapedS = mal.sort(function (x, y) {
            return   y.shah_jami - x.shah_jami;
            })
            let chn = []
                const maped11 = mapedS.filter((m)=> m.status == 1)
                if(maped11.length > 0) {
                    chn.push(1)
                    console.log(maped11)
                }
                const maped22 = mapedS.filter((m)=> m.status2 == 1)
                if(maped22.length > 0) {
                    chn.push(2)
                    console.log(maped22)
                }
                const maped33 = mapedS.filter((m)=> m.status3 == 1)
                if(maped33.length > 0) {
                    chn.push(3)
                    console.log(maped33)
                }
                setCheckNum(chn)
            setMalsec(mapedS)
            setNechta(2)
            setCursec(6)
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
    const dateHandler1 = (e) => {
        setDate1(e.target.value)
        getBaho(e.target.value, cursec)
    }
    const dateHandler2 = (e) => {
        setDate2(e.target.value)
        getOraliq(e.target.value, date3)
        
    }
    const dateHandler3 = (e) => {
        setDate3(e.target.value)
        getOraliq(date2, e.target.value)
        setCursec(6);
    }
    const print = ()=> {
        sCon(malsec)
        sD(date1)
        sPrint(true)
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
    return (
        <div style={{
            margin: "60px 60px"
        }}>
            <div className="ot_btns">
                <button onClick={umm} className={cursec == 0 ? "ot_btn btn_tan": "ot_btn"}>Умумий</button>
                <button onClick={sec1} className={cursec == 1 ? "ot_btn btn_tan": "ot_btn"}>1-сектор</button>
                <button onClick={sec2} className={cursec == 2 ? "ot_btn btn_tan": "ot_btn"}>2-сектор</button>
                <button onClick={sec3} className={cursec == 3 ? "ot_btn btn_tan": "ot_btn"}>3-сектор</button>
                <button onClick={sec4} className={cursec == 4 ? "ot_btn btn_tan": "ot_btn"}>4-сектор</button>
                <button onClick={oral} className={cursec == 6 ? "ot_btn btn_tan": "ot_btn"}>Оралиқ</button>
                <button onClick={tum} className={cursec == 5 ? "ot_btn btn_tan": "ot_btn"}>Шахар туман кесимида</button>
            </div>
            <div className="tasdiq_con">
                {checkers && checkNum ? checkNum.map(ch => <Tasdiq info={checkers[ch-1]}></Tasdiq> ): null}
            </div>
            <div style={{display: "flex", justifyContent: "space-between", alignItems:"center"}}>
            <p style={{color: "#8C8B8B", fontSize: "14px"}}>Умумий статистик маълумотлар</p>
    {cursec == 6 ? <h3 style={{fontWeight: "500"}}>{date2} - {date3} йил холати бўйича малумот</h3>:<h3 style={{fontWeight: "500"}}>{date1} йил холати бўйича малумот</h3>}
            <div style={{display: "flex", alignItems:"center"}}>
            <DateForm nechta={nechta} date1={date1} date2={date2} date3={date3} dateHandler1={dateHandler1} dateHandler2={dateHandler2} dateHandler3={dateHandler3}></DateForm>

                {cursec !==6 ? <div onClick={print} style={{cursor: "pointer", marginTop: "15px"}}><img src="/print.svg"></img></div>: null}
                </div>
            </div>
            <div style={{overflowX: "auto"}}>
            <table>
                <thead>
                <tr style={{backgroundColor: "#00B5E4", color: "white", fontWeight:"400 !important"}}>
                    <th>Т/р  </th>
                    <th>Шахар, туманлар номи</th>
                    <th>Сектор</th>
                    <th>Юборилган
                вакти (%)</th>
                    <th>Тавсияларга
                мувофиқлиги (%)</th>
                    <th>Иш режа
                бажарилиши
                таҳлилий (%)</th>
                    <th>Бажарилган ишлар
                таҳлилий (%)</th>
                <th>Бажарилиш сифати (%)
                (Фотофактлар)</th>
                <th>Умумий ишлар ташкил
                этилганлиги (%)</th>
                <th>Умумий тахлилий (%)</th>
                {(cursec == 5 || cursec == 6) ? <th>Рейтинг</th>: null}
                    </tr>
                </thead>

                <tbody>
                    {malsec ? malsec.map((m, index)=> <Umumiy setOpen={setOpen} setMcon1={setMcon1} key={index} info={m} cursec={cursec}></Umumiy>): <center> <div ><Loader type="ThreeDots"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} //3 secs
        
      /> </div></center>}
                </tbody>
            </table>
            </div>
            <SModal open={open} content={Mcon} closeModal={closeModal}></SModal>
        </div>
    )
}

export default Content
