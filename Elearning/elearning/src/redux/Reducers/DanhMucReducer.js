import {
  LAY_DANH_MUC_KHOA_HOC,
  LAY_KHOA_HOC_THEO_MUC,
} from "../Constants/KhoaHocConstants";
const initialState = {
  danhMucKhoaHoc: [],
};
export const DanhMucReducer = (state = initialState, action) => {
  switch (action.type) {
    case LAY_DANH_MUC_KHOA_HOC: {
      state.danhMucKhoaHoc = action.danhMucKhoaHoc;
      return { ...state };
    }
  }
  return { ...state };
};
