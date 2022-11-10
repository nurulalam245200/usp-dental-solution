import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const { _id, img, price, title, details } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <PhotoProvider>
        <PhotoView src={img}>
          <figure>
            <img src={img} alt="" />
          </figure>
        </PhotoView>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-2xl font-semibold text-orange-600">
            Price: ${price}
          </p>
          <p className="mt-3">
            {details.length > 100 ? (
              <>{details.slice(0, 190) + "..."}</>
            ) : (
              <>{details}</>
            )}
          </p>
          <div className="card-actions justify-end">
            <Link to={`/services/${_id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </PhotoProvider>
    </div>
  );
};

export default ServicesCard;
