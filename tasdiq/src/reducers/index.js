import {combineReducers} from 'redux';
import curInfoReducer from './userReducer';

export default combineReducers({
    curInfo: curInfoReducer
})