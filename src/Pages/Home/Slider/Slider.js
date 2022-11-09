import React from "react";
import img1 from "../../../assest/banner/img-1.jpg";
import img2 from "../../../assest/banner/img-2.jpg";
import img3 from "../../../assest/banner/img-3.jpg";
import img4 from "../../../assest/banner/img-4.jpg";
import SlideItems from "./SlideItems";
const Slider = () => {
  const bannerData = [
    {
      image: img1,
      prev: 4,
      id: 1,
      next: 2,
    },
    {
      image: img2,
      prev: 1,
      id: 2,
      next: 3,
    },
    {
      image: img3,
      prev: 2,
      id: 3,
      next: 4,
    },
    {
      image: img4,
      prev: 3,
      id: 4,
      next: 1,
    },
  ];
  return (
    <div className="carousel w-3/4 mx-auto py-10">
      {bannerData.map((slide) => (
        <SlideItems key={slide.id} slide={slide}></SlideItems>
      ))}
    </div>
  );
};

export default Slider;