import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const ServiceDeatils = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const [reviews, setReviews] = useState([]);
  const { _id, img, title, price, details } = data;

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  const handleReviews = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const phone = form.phone.value;
    const email = user?.email || "unregister";
    const image = user?.photo_URL;
    const reviewMessage = form.reviewMessage.value;
    const reviews = {
      service: _id,
      serviceName: title,
      price: price,
      img: image,
      coustomerName: name,
      phone: phone,
      email: email,
      reviewMessage: reviewMessage,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Order Placed Successfully!!!");
          form.reset();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    // details show work
    <div className="grid md:grid-cols-1 lg:grid-cols-2">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-2xl font-semibold text-orange-600">
            Price: ${price}
          </p>
          <p className="mt-3">{details}</p>
        </div>
      </div>

      {/* review show work  */}
      <div>
        <div>
          <h1 className="text-3xl font-bold text-emerald-600">All Reviews</h1>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Review Message</th>
                  <th></th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>

        {/* review input section  */}
        <form onSubmit={handleReviews}>
          <h2 className="text-4xl">Treatment : {title}</h2>
          <h4 className="text-4xl">Price :&{price}</h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
            <input
              name="firstName"
              type="text"
              placeholder="First Name"
              className="input input-ghost input-bordered w-full "
            />
            <input
              name="lastName"
              type="text"
              placeholder="Last Name"
              className="input input-ghost input-bordered w-full "
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Nmuber"
              className="input input-ghost input-bordered w-full "
            />
            <input
              name="email"
              type="text"
              defaultValue={user?.email}
              placeholder="Email"
              readOnly
              className="input input-ghost input-bordered w-full "
            />
          </div>
          <textarea
            name="reviewMessage"
            className="textarea textarea-bordered h-24 my-4 w-full"
            placeholder="Your Review"
          ></textarea>
          <input type="submit" className="btn my-5" value="Give Review" />
        </form>
      </div>
    </div>
  );
};

export default ServiceDeatils;
