import React from "react";
import Slider from "react-slick";
import Card from '../Card/Card';
import arrDictionary from '../../data/dictionary.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
        {arrDictionary.map((item, id)=>(
        <Card item={item} key={id}/>
      ))}
     
    </Slider>
  );
}