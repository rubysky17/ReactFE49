import axios from "axios";
import {
  LAY_CHI_TIET_PHIM,
  LAY_DANH_SACH_PHIM,
} from "../constants/QuanLyPhimConstants";

//action có 2 loại:
// 1 - là action bình thường

// 2 - là action async ( các action dùng để gọi API )
export const layDanhSachPhimApiAction = () => {
  //Thay vì return về object => middleware thunk cho phép m2inh return về 1 function có tham số là hàm dispatch
  return async (dispatch) => {
    const { data } = await axios({
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "get",
    });
    // sau khi lấy dữ liệu từ BE cề sử dũng hàm dispatch đưa dữ liệu lên reducer
    const action = {
      type: LAY_DANH_SACH_PHIM,
      data,
    };
    dispatch(action);
  };
};
export const layChiTietPhimAction = (maPhim) => {
  return async (dispatch) => {
    const { data } = await axios({
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
      method: "GET",
    });
    dispatch({
      type: LAY_CHI_TIET_PHIM,
      chiTietPhim: data,
    });
  };
};
// export const layDanhSachPhimApiAction = () => {
//   //Thay vì return về object => middleware thunk cho phép m2inh return về 1 function có tham số là hàm dispatch
//   return (dispatch) => {
//     axios({
//       url:
//         "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
//       method: "get",
//     })
//       .then((res) => {
//         console.log(res.data);
//         //Lần 1 tại component đê gọi action này thực thi
//         let { data } = res;
//         //dispatch lần 2 sau khi có kết quả từ api lấy dữ liệu dispatch lên reducer
//         dispatch({
//           type: LAY_DANH_SACH_PHIM,
//           data,
//         });
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   };
// };
