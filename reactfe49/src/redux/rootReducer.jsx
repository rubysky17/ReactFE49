import { combineReducers } from 'redux';
import { gioHangReducer } from "./GioHangReducer";
import { xucXacReducer } from "./XucXacReducer"
export const rootReducer = combineReducers({
    gioHangReducer,
    xucXacReducer,
})