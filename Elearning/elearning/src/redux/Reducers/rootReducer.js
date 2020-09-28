import { combineReducers } from "redux";
import { KhoaHocReducer } from "../Reducers/KhoaHocReducer";
import { DanhMucReducer } from "../Reducers/DanhMucReducer";

export const rootReducer = combineReducers({
  DanhMucReducer,
  KhoaHocReducer,
});
