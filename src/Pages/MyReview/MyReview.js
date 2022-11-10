import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import MyReviewsRow from "./MyReviewsRow";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  // get for show reviews
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  //delete review

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to delete this Order");
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Delete Order Successfully!!");
            const remaining = reviews.filter((rview) => rview._id !== id);
            setReviews(remaining);
          }
          console.log(data);
        });
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-emerald-600">All Reviews</h1>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Trash</th>
                <th>Name</th>
                <th>Service name</th>
                <th>Review Message</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((rview) => (
                <MyReviewsRow
                  key={rview._id}
                  rview={rview}
                  handleDelete={handleDelete}
                ></MyReviewsRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyReview;
