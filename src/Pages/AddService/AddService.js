import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddService = () => {
  const handleServiceAdd = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const photoURL = form.photoURL.value;
    const details = form.details.value;
    const price = form.price.value;

    const service = {
      title: title,
      img: photoURL,
      price: price,
      details: details,
    };
    fetch("https://usp-dantal-solution-server.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast("Add Successfully");

          form.reset();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={handleServiceAdd}>
        <h2 className="text-4xl">Add Service</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
          <input
            name="title"
            type="text"
            placeholder="Title Name"
            className="input input-ghost input-bordered w-full "
          />
          <input
            name="photoURL"
            type="text"
            placeholder="Photo URL"
            className="input input-ghost input-bordered w-full "
          />

          <input
            name="price"
            type="text"
            placeholder="Price"
            className="input input-ghost input-bordered w-full "
          />
        </div>
        <textarea
          name="details"
          className="textarea textarea-bordered h-24 my-4 w-full"
          placeholder="Description"
        ></textarea>
        <input type="submit" className="btn my-5" value="Give Review" />
      </form>
    </div>
  );
};

export default AddService;
