import  {SET_CURINFO,SET_INFO,GET_TUMANLAR,SET_CHACH, GET_BAHOLAR, SET_BTN_IZ, SET_TUMAN_ID, SET_INPUTS, SET_MODAL, CLOSE_MODAL, SET_IZ, SET_DATE, CLEAR_INFO, SET_HOTLINKS, SET_TASDIQ} from './types.js';
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


export const getBaholar =  (id) => async (dispatch, getState) =>  {

    getHotLinks()
    let tasdiq
    let formData = new FormData();
        formData.append('date', getState().curInfo.date)
        formData.append('sec_soni', id)
        try {
                        
                        const resp = await axios.post(`${baseUrl}get_baho.php`, formData);
                        const data = resp.data
                        
                        if(data) {
                            
                            const javob = getState().curInfo.tumanlar.map((tuman)=> {
                            const newObj = {}
                              newObj.tuman_id = tuman.id
                              newObj.tuman_name = tuman.tuman_name 
                              newObj.content = data ==="" || data.length > 0 ? data.filter((baho)=> baho.tuman_id === tuman.id): [];
                              return newObj;    

                            

                          })
                  
                        switch (window.localStorage.getItem("checker")) {
                            case "1":
                                tasdiq = data.length > 0 ? data.filter((d)=> d.status == 0): [1,2];
                                break;
                                case "2":
                                    tasdiq = data.length > 0 ? data.filter((d)=> d.status2 == 0): [1,2];
                                    break;
                                case "3":
                                    tasdiq = data.length > 0 ? data.filter((d)=> d.status3 == 0): [1,2];
                                    break;
                            default:
                                break;
                        }  
                        
                        
                                        
                          dispatch({
                            type: GET_BAHOLAR,
                            payload: javob
                             })
                        }
                    } catch (err) {
                        // Handle Error Here
                        console.error(err);
                    }


                    if(tasdiq.length > 0) {
                    
                        dispatch({
                            type: SET_TASDIQ,
                            payload: false
                        })
                    }else {
                        dispatch({
                            type: SET_TASDIQ,
                            payload: true
                        })
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
export const setTasdiq = (data) => dispatch =>  {
    dispatch({
        type: SET_TASDIQ,
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