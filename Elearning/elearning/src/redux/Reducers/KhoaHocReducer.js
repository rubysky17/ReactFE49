import { LAY_DANH_SACH } from "../Constants/KhoaHocConstants";
const initialState = {
  dsKhoaHoc: [],
};
export const KhoaHocReducer = (state = initialState, action) => {
  switch (action.type) {
    case LAY_DANH_SACH: {
      state.dsKhoaHoc = action.dsKhoaHoc;
      return { ...state };
    }
  }
  return { ...state };
};
