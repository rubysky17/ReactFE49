import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { layDanhSachKhoaHocTheoMucAction } from "../../redux/Actions/KhoaHocActions";
//CSS import
import "./Courses.css"; // requires a loader
//import Components
import Card from "../Card/Card";
//import arrow from ANTDS
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import Carousel from "../Carousel/Carousel";

export default function Courses(props) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <RightOutlined />,
    prevArrow: <LeftOutlined />,
  };
  let mangCard = [<Card />, <Card />, <Card />, <Card />];

  return (
    <div className="course-session">
      <div className="course-content">
        <div className="row">
          <div className="course-session_left col-3">
            <p>{props.item.tenDanhMuc}</p>
            <div className="course-btn">
              <a href="#">XEM TẤT CẢ</a>
            </div>
          </div>
          <div className="course-session_right col-9">
            <Carousel settings={settings} arrayCarousel={mangCard} />
          </div>
        </div>
      </div>
    </div>
  );
}
