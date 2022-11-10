import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateReview = () => {
  const data = useLoaderData();
  const { service } = data;
  console.log(service);
  const navigate = useNavigate();

  const handleReviewUpdate = (event) => {
    event.preventDefault();
    const message = event.target.message.value;
    const reviewMessage = {
      message,
      service: service,
    };

    fetch(`http://localhost:5000/reviews/${service}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewMessage),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Review Update Successfully");
          navigate("/myReview");
        }
      });
  };
  return (
    <div className="my-8">
      <div className="max-w-screen-xl mx-auto w-4/6">
        <h2 className="text-center text-3xl font-bold text-emerald-600 my-4">
          Update Your Review
        </h2>
        <form onSubmit={handleReviewUpdate}>
          <textarea
            name="message"
            className="textarea textarea-bordered w-full h-40"
            placeholder="Update Your Review"
          ></textarea>
          <input
            className="btn btn-primary w-full mx-auto text-white"
            type="submit"
            value="Update Review"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateReview;
