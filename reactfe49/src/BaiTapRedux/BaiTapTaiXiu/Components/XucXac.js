import React, { Component } from "react";
import { connect } from "react-redux";

class XucXac extends Component {
  renderXucXac = () => {
    let { mangXucXac } = this.props;
    return mangXucXac.map((xx, i) => {
      return (
        <img
          src={xx.hinhAnh}
          style={{ width: "80px", marginRight: "30px" }}
          key={i}
        />
      );
    });
  };

  render() {
    let { banChon } = this.props;
    return (
      <div className="container-fluid pt-5">
        <div className="row text-center">
          <div className="col-3">
            <button
              className="btn btn-success"
              style={{
                padding: "50px",
                fontSize: "40px",
                border: banChon ? "5px solid black" : "",
              }}
              onClick={() => {
                this.props.setBanChon(true);
              }}
            >
              Tài
            </button>
          </div>
          <div className="col-6" style={{ paddingTop: "40px" }}>
            {this.renderXucXac()}
          </div>
          <div className="col-3">
            <button
              className="btn btn-danger"
              style={{
                padding: "50px",
                fontSize: "40px",
                border: banChon ? "" : "5px solid black",
              }}
              onClick={() => {
                this.props.setBanChon(false);
              }}
            >
              Xỉu
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    mangXucXac: state.xucXacReducer.mangXucXac,
    banChon: state.xucXacReducer.banChon,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setBanChon: (status) => {
      dispatch({
        type: "SET_BAN_CHON",
        status,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(XucXac);
