import React, { useEffect } from "react";
import Card from "../../Components/Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { layDanhSachKhoaHocAction } from "../../redux/Actions/KhoaHocActions";
import Navbar from "../../Components/Navbar/Navbar";

export default function AllCourse() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDanhSachKhoaHocAction());
  }, []);
  const dsKhoaHoc = useSelector((state) => state.KhoaHocReducer.dsKhoaHoc);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          {dsKhoaHoc.map((khoaHoc, index) => {
            return (
              <div className="col-3">
                <Card khoaHoc={khoaHoc} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
