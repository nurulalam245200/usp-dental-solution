import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import image from "../../assest/login/login.gif";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";
const Login = () => {
  const { userLogIn, googleSignUp } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [error, setError] = useState("");

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        toast("Log In Successfully!!");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleSignUp = () => {
    googleSignUp(googleProvider)
      .then((result) => {
        const user = result.user;
        toast("Google SignUp Successfully!!");
        navigate("/");
        console.log(user);
      })
      .catch((e) => setError(e.message));
  };
  return (
    <div className="hero w-full my-10">
      <Helmet>
        <title>Log in |{`Usp Dental`}</title>
      </Helmet>
      <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={image} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
          <h1 className="text-5xl font-bold text-center">Login now</h1>
          <form onSubmit={handleLogIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <p className="text-emerald-600 font-semibold">{error}</p>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn btn-primary text-2xl text-white font-semibold"
                value="Log in"
              />
            </div>
            <div>
              <button
                className="btn btn-primary text-2xl text-white font-semibold w-full"
                onClick={handleGoogleSignUp}
              >
                <FaGoogle className="text-white mr-2"></FaGoogle>Google Sign in
              </button>
            </div>
          </form>
          <p className="text-center">
            New to USP Dental Solution ?
            <Link className="text-emerald-500 font-bold mx-2" to="/signup">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
