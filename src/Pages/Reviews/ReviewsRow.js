import React from "react";
import { Link } from "react-router-dom";

const ReviewsRow = ({ rview }) => {
  const { img, serviceName, reviewMessage, reviewerName, phone } = rview;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{reviewerName}</div>
            <div className="text-sm opacity-50">{phone}</div>
          </div>
        </div>
      </td>
      <td>{serviceName}</td>
      <td>{reviewMessage}</td>
      <th>
        <Link to="/myreview">
          <button className="btn btn-ghost btn-xs">Review details</button>
        </Link>
      </th>
    </tr>
  );
};

export default ReviewsRow;
