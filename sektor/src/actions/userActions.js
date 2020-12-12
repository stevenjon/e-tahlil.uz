import  {SET_CURINFO,SET_INFO,SET_PRINT,GET_TUMANLAR,SET_CHACH,SET_LOAD, GET_BAHOLAR, SET_BTN_IZ, SET_TUMAN_ID, SET_INPUTS, SET_MODAL, CLOSE_MODAL, SET_IZ, SET_DATE, CLEAR_INFO, SET_HOTLINKS, SET_TASDIQ} from './types.js';
import baseUrl from '../baseUrl'
import axios from 'axios'







export const setCurInfo1 = (data) => dispatch =>  {
        dispatch({
            type: SET_CURINFO,
            payload: data
        })
}
export const setBtnIz = (data) => dispatch =>  {
        dispatch({
            type: SET_BTN_IZ,
            payload: data
        })
}
export const setChach = (data) => dispatch =>  {
    dispatch({
        type: SET_CHACH,
        payload: data
    })
}
export const setTumanId = (data) => dispatch =>  {
        dispatch({
            type: SET_TUMAN_ID,
            payload: data
        })
}
export const setDate = (data) => dispatch =>  {
    dispatch({
        type: SET_DATE,
        payload: data
    })
}
export const setInputs = (id,data) => dispatch =>  {
    dispatch({
        type: SET_INPUTS,
        id: id -1,
        payload: data
    })
}
export const handleOpen = () =>  dispatch =>  {
    dispatch({
        type: SET_MODAL,
        payload: true
    })
}
export const closeModal = () =>  dispatch =>  {
    dispatch({
        type: CLOSE_MODAL,
        payload: false
    })
}
export const setIz = (data) =>  dispatch =>  {
    dispatch({
        type: SET_IZ,
        payload: data
    })
}
export const getTumanlar =  () =>async (dispatch)=> {
    try {
        const resp = await axios.post(`${baseUrl}get_vt.php`);
        
        if(resp.data.length > 0) {
            dispatch({
                type: GET_TUMANLAR,
                payload: resp.data
            })
    
        }else {
            
            
        }
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
        
    
        
}


export const getBaholar =  () => async (dispatch, getState) =>  {
    dispatch({
        type: SET_LOAD,
        payload: true
         })
    getHotLinks()
    let formData = new FormData();
    let chn =[]
        formData.append('date', getState().curInfo.date)
        formData.append('sec_soni', window.localStorage.getItem("monitor"))
                    try {
                        
                        const resp = await axios.post(`${baseUrl}get_baho.php`, formData);
                        const data = resp.data
                        
                        if(data) {
                            console.log(data)
                            const javob = getState().curInfo.tumanlar.map((tuman)=> {
                            const newObj = {}
                              newObj.tuman_id = tuman.id
                              newObj.tuman_name = tuman.tuman_name 
                              newObj.content = data ==="" || data.length > 0 ? data.filter((baho)=> baho.tuman_id === tuman.id): [];
                              return newObj;    





                              
                          })

                          const maped111 = data.filter((m)=> m.status == 1)
                          if(maped111.length > 0) {
                              chn.push(1)
                       
                          }
                          const maped221 = data.filter((m)=> m.status2 == 1)
                          if(maped221.length > 0) {
                              chn.push(2)
                        
                          }
                          const maped331 = data.filter((m)=> m.status3 == 1)
                          if(maped331.length > 0) {
                              chn.push(3)
                             
                          }
                          if(chn.length > 0) {
                            dispatch({
                                type: SET_TASDIQ,
                                payload: true
                            })
                          }else {
                            dispatch({
                                type: SET_TASDIQ,
                                payload: false
                            })
                          }
                            
                          dispatch({
                            type: GET_BAHOLAR,
                            payload: javob
                             })
                             dispatch({
                                type: SET_LOAD,
                                payload: false
                                 })
                        }
                    } catch (err) {
                        // Handle Error Here
                        console.error(err);
                    }
                   
}
export const clearInfo = () => dispatch =>  {
    dispatch({
        type: CLEAR_INFO,
        payload: true
    })
}
export const setInfo3 = (data) => dispatch =>  {
    dispatch({
        type: SET_INFO,
        payload: data
    })
}
export const getHotLinks = () =>async dispatch =>  {

    try {
        const resp = await axios.post(`${baseUrl}get_hotlinks.php`);
        
        if(resp.data.length > 0) {
            dispatch({
                type: SET_HOTLINKS,
                payload: resp.data
            })
    
        }else {
            
            
        }
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }


   
}

export const setPrint = (data = true) => dispatch =>  {
    dispatch({
        type: SET_PRINT,
        payload: data
    })  
}