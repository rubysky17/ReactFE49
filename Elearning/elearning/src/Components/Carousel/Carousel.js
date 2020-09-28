import React from "react";
import Slider from "react-slick";
export default function Carousel(props) {
  let { arrayCarousel } = props;
  console.log(arrayCarousel);
  return (
    <Slider {...props.settings}>
      {arrayCarousel.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </Slider>
  );
}
