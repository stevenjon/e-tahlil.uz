import  {SET_BTN_IZ, SET_CURINFO,SET_PRINT,SET_MODAL2,CLOSE_MODAL2, SET_INPUTS, SET_TUMAN_ID, SET_MODAL, CLOSE_MODAL, SET_IZ, SET_DATE, GET_TUMANLAR, CLEAR_INFO, GET_BAHOLAR, SET_CHACH, SET_INFO, SET_HOTLINKS, SET_TASDIQ, SET_LOAD, SET_SEC} from '../actions/types.js';

const initialScale = {
    info: null,
    tuman_id: null,
    open: false,
    open2: false,
    date: null,
    tumanlar: [],
    btn_iz: "",
    info4: false,
    chachishgan: [],
    hotlinks: [],
    tasdiq: false,
    print: false,
    sec: 1,
    load: true
}

export default (state = initialScale, action) => {
    switch(action.type) {
        case SET_CURINFO:
            return {
                ...state,
                info:Object.assign(state.info, action.payload)
            }
            case SET_BTN_IZ:
            return {
                ...state,
                btn_iz: action.payload
            } 
            case SET_SEC:
            return {
                ...state,
                sec: action.payload
            }
            case SET_TUMAN_ID:
            return {
                ...state,
                tuman_id: action.payload
            }
            case SET_INPUTS:
            return {
                ...state,
                info:Object.assign(state.chachishgan[action.id].content, action.payload)
            }
            case SET_MODAL:
            return {
                ...state,
                open: true
            }
            case SET_MODAL2:
                return {
                    ...state,
                    open2: true
                }
            case SET_LOAD:
            return {
                ...state,
                load: action.payload
            }
            case CLOSE_MODAL:
            return {
                ...state,
                open: false,
            }
            case CLOSE_MODAL2:
            return {
                ...state,
                open2: false,
            }
            case SET_IZ:
            return {
                ...state,
                info:Object.assign(state.info, action.payload)
                
            }  
            case SET_PRINT:
            return {
                ...state,
                print: action.payload
                
            }
            case SET_DATE:
            return {
                ...state,
                date: action.payload
                
            }
            case SET_TASDIQ:
            return {
                ...state,
                tasdiq: action.payload
                
            }
            case GET_BAHOLAR:
            return {
                ...state,
                chachishgan: action.payload
                
            }
            case GET_TUMANLAR:
            return {
                ...state,
                tumanlar: action.payload
                
            }
            case CLEAR_INFO:
            return {
                ...state,
                info4: action.payload
            } 
            case SET_INFO:
            return {
                ...state,
                info: action.payload
            } 
            case SET_CHACH:
            return {
                ...state,
                chachishgan: action.payload
            }  
            case SET_HOTLINKS:
            return {
                ...state,
                hotlinks: action.payload
            }           
        default: 
            return state;
    }
}