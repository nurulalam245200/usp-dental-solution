import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const ServiceDeatils = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const { _id, img, title, price, details } = data;
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
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Favorite Color</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src="/tailwind-css-component-profile-2@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Hart Hagerty</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Zemlak, Daniel and Leannon
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Desktop Support Technician
                    </span>
                  </td>
                  <td>Purple</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* review input section  */}
        <form>
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
            name="message"
            className="textarea textarea-bordered h-24 my-4 w-full"
            placeholder="Your Message"
          ></textarea>
          <input type="submit" className="btn my-5" value="Place To Order" />
        </form>
      </div>
    </div>
  );
};

export default ServiceDeatils;
