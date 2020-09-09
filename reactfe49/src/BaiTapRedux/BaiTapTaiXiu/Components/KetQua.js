import React, { Component } from "react";
import { connect } from "react-redux";

class KetQua extends Component {
  render() {
    let { xucXac, nutPlayGame } = this.props;
    return (
      <div className="container pt-5 text-center" style={{ fontSize: "50px" }}>
        <div>
          TỔNG ĐIỂM:
          <span>{xucXac.tongDiem}</span>
        </div>
        <div>
          BẠN CHỌN:
          <span
            className={xucXac.banChon === true ? "text-success" : "text-danger"}
          >
            {xucXac.banChon === true ? "Tài" : "Xỉu"}
          </span>
        </div>
        <div>
          SỐ BÀN THẮNG:
          <span className="text-success">{xucXac.soBanThang}</span>
        </div>
        <div>
          TỔNG SỐ BÀN CHƠI:
          <span className="text-warning">{xucXac.tongBanChoi}</span>
        </div>
        <button
          className="btn btn-success p-3 mt-4"
          onClick={() => {
            nutPlayGame();
          }}
        >
          Play game
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    xucXac: state.xucXacReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    nutPlayGame: () => {
      dispatch({
        type: "PLAY_GAME",
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(KetQua);
