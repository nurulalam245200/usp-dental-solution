import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assest/logo.svg";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((err) => console.log(err));
  };
  const menuItems = (
    <>
      <li className="mr-3">
        <Link className="font-semibold" to="/">
          Home
        </Link>
        <Link className="font-semibold" to="/services">
          Service
        </Link>

        <Link className="font-semibold" to="/blog">
          Blog
        </Link>
        {user?.email ? (
          <>
            <Link className="font-semibold" to="/myreview">
              My Review
            </Link>
            <Link className="font-semibold" to="/addService">
              Add Service
            </Link>
            <button
              onClick={handleLogOut}
              className="btn btn-ghost font-semibold"
            >
              LogOut
            </button>
          </>
        ) : (
          <>
            <Link className="font-semibold" to="/login">
              Login
            </Link>
            <Link className="font-semibold" to="/signup">
              SignUp
            </Link>
          </>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar h-20 pt-12 mb-5 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <Link
          title="Number: 018888888999"
          className="btn btn-outline btn-warning"
        >
          Doctor's Appointment
        </Link>
      </div>
    </div>
  );
};

export default Header;
