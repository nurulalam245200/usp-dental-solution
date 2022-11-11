import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import MyReviewsRow from "./MyReviewsRow";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [sortReview, setSortReview] = useState([]);

  //get date sort function

  useEffect(() => {
    const sort = reviews.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    setSortReview(sort);
  }, [reviews]);

  // get for show reviews

  useEffect(() => {
    fetch(
      `https://usp-dantal-solution-server.vercel.app/reviews?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  //delete review

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to delete this Order");
    if (proceed) {
      fetch(`https://usp-dantal-solution-server.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Delete Order Successfully!!");
            const remaining = reviews.filter((rview) => rview._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  return (
    <div>
      <Helmet>
        <title>My Reviews |{`Usp Dental`}</title>
      </Helmet>
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
              {sortReview.map((rview) => (
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
