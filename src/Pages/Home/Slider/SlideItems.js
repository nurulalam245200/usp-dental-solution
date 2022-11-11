import React from "react";
import "./SlideItems.css";
const SlideItems = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={image} alt="" className="w-full rounded-xl" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
        {/* <h1 className="text-6xl text-white font-bold">
          Our Treatment <br />
          For Your Happiness
          <br />
          For Comportabllity
        </h1> */}
      </div>
      <div className="absolute flex justify-end w-2/5 transform -translate-y-1/2 left-24 top-1/2">
        <p className="text-xl mt-5 text-center font-semibold text-white">
          We alwasy with you and we can treat world class level. Please Don't be
          hegitate for get care of you Teeth.
        </p>
      </div>
      <div className="absolute flex justify-start w-2/5 transform -translate-y-1/2 left-24 top-3/4"></div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default SlideItems;
