import React, { Component } from "react";
import axios from "axios";

export default class TrangChu extends Component {
  state = {
    dsPhim: [],
  };
  //   getAPI = () => {
  //     let _this = this;
  //     async function layAPI() {
  //       const reqUrl =
  //         "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03";
  //       const res = await axios.get(reqUrl);
  //       console.log(res);
  //       _this.setState({
  //         dsPhim: res.data,
  //       });
  //     }
  //     layAPI();
  //   };
  componentDidMount() {
    //lifecycle dùng để gọi API từ BE
    axios({
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02",
      method: "get",
    })
      .then((res) => {
        console.log(res);
        this.setState({
          dsPhim: res.data,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  renderPhim = () => {
    return this.state.dsPhim.map((phim, index) => {
      return (
        <div className="card col-4" key={index}>
          <img className="card-img-top" src={phim.hinhAnh} alt />
          <div className="card-body">
            <h4 className="card-title">{phim.title}</h4>
            <p className="card-text">{phim.moTa}</p>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        {/* <button className="btn btn-success" onClick={() => this.getAPI()}>
          Click để lấy danh sách phim
        </button> */}
        <div className="row">{this.renderPhim()}</div>
      </div>
    );
  }
}
