import { combineReducers } from 'redux';
import { gioHangReducer } from "./GioHangReducer";
import { xucXacReducer } from "./XucXacReducer";
import { oanTuTiReducer } from "./OanTuTiReducer"
export const rootReducer = combineReducers({
    gioHangReducer,
    xucXacReducer,
    oanTuTiReducer,
})