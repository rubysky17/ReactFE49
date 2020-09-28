import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//Component import
import Navbar from "../../Components/Navbar/Navbar";
import Courses from "../../Components/Courses/Courses";
//CSS import
import "./Search.css";
import "./Benefits.css";
import "./Social-proof.css";
//Image import
import benefit_icon1 from "../../Assets/img/icon_cup_5.2@2x.png";
import benefit_icon2 from "../../Assets/img/icon_email_1.1@2x.png";
import benefit_icon3 from "../../Assets/img/icon_time_3.2@2x.png";

import inc from "../../Assets/img/inc-01.png";
import lifehack from "../../Assets/img/lifehack-01.png";
import lifehacker from "../../Assets/img/lifehacker-01.png";
import nytime from "../../Assets/img/NY-times-01.png";
import time from "../../Assets/img/time-01.png";
import insider from "../../Assets/img/business-insider-01.png";
//import Action Redux
import { layDanhMucKhoaHocAction } from "../../redux/Actions/KhoaHocActions";
import Slider from "react-slick";

export default function Home(props) {
  const dispatch = useDispatch();
  const danhMucKhoaHoc = useSelector(
    (state) => state.DanhMucReducer.danhMucKhoaHoc
  );
  useEffect(() => {
    dispatch(layDanhMucKhoaHocAction());
  }, []);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
  };
  var mangHinhAnh = [inc, lifehack, lifehacker, nytime, time, insider];
  return (
    <div>
      <Navbar />
      <div className="search">
        <div className="search_text">
          <p>Học điều mới mẻ mỗi ngày</p>
          <span>
            Mỗi buổi sáng thức dậy, hãy thu nạp cho mình một kiến thức mới. Chọn
            hơn 300+ khóa học của chúng tôi.
          </span>
          <br />
          <div className="search-btn">
            <a href="#">TÌM KIẾM KHÓA HỌC</a>
          </div>
        </div>
      </div>
      <div className="benefits">
        <div className="benefits-intro">
          <p>
            Hơn 3,000+ Bài học. Hơn 100+ Chuyên gia. Hơn 400,000+ Học viên. Và
            hơn thế nữa.
          </p>
        </div>
        <div className="benefits-list">
          <div className="benefit-item">
            <img src={benefit_icon1} alt={benefit_icon1} />
            <p>Hơn 100 chủ đề</p>
            <span>Chọn hơn 300+ chủ đề mà bạn muốn học</span>
          </div>
          <div className="benefit-item">
            <img src={benefit_icon2} alt={benefit_icon1} />
            <p>Thông báo qua Email</p>
            <span>Khi có bài mới sẽ thông báo qua Email. Mỗi buổi sáng</span>
          </div>
          <div className="benefit-item">
            <img src={benefit_icon3} alt={benefit_icon1} />
            <p>5 Phút mỗi ngày</p>
            <span>Đọc bài và trải nghiệm cốc cà phê, chỉ mất 5 phút</span>
          </div>
        </div>
      </div>
      {danhMucKhoaHoc.map((item, index) => {
        return <Courses item={item} key={index} />;
      })}
      <div className="social-proof">
        <h3>As Seen In</h3>
        <Slider {...settings}>
          {mangHinhAnh.map((item, index) => {
            return (
              <div>
                <img src={item} alt={index} className="social-proof_img" />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
