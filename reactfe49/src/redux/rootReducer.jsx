import { combineReducers } from 'redux';
import { QuanLyPhimReducer } from "./QuanLyPhimReducer";
import reduxThunk from 'redux-thunk';

export const rootReducer = combineReducers({
    QuanLyPhimReducer
})