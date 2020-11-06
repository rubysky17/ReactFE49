import { LAY_DANH_SACH_GHE } from "../constants/QuanLyPhongVeConstant";

const stateDefault = {
  danhSachGhe: [],
};

const QuanLyPhongVeReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case LAY_DANH_SACH_GHE: {
      state.danhSachGhe = action.danhSachGhe;
      return { ...state };
    }
    case "TOGGLE_GHE": {
      let danhSachGhe = [...state.danhSachGhe];
      let index = danhSachGhe.findIndex(
        (ghe) => ghe.maGhe === action.ghe.maGhe
      );
      danhSachGhe[index] = {
        ...danhSachGhe[index],
        dangChon: !danhSachGhe[index].dangChon,
      };

      return { ...state, danhSachGhe };
    }

    default:
      return state;
  }
};

export default QuanLyPhongVeReducer;
