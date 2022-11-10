import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyReviewsRow = ({ rview, handleDelete, handleReviewUpdate }) => {
  const { img, serviceName, reviewMessage, reviewerName, phone, _id, service } =
    rview;

  return (
    <tr>
      <th>
        <label>
          <button onClick={() => handleDelete(_id)} className="btn btn-ghost">
            <FaTrash></FaTrash>
          </button>
        </label>
      </th>
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
        <Link to={`/updatereview/${service}`}>
          <button onClick={handleReviewUpdate} className="btn btn-ghost btn-xs">
            <FaEdit className="mr-2"></FaEdit>Edit Review
          </button>
        </Link>
      </th>
    </tr>
  );
};

export default MyReviewsRow;
