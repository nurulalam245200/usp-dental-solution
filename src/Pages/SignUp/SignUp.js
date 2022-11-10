import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../../assest/login/login.gif";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const SignUp = () => {
  const { createUser, googleSignUp, upadateUserProfile } =
    useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        handleUpdateUserProfile(name, photoURL);
        navigate("/login");
        setError("");
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  };

  const handleGoogleSignUp = () => {
    googleSignUp(googleProvider)
      .then((result) => {
        const user = result.user;
        navigate({ replace: true });
        console.log(user);
      })
      .catch((e) => setError(e.message));
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const userInfo = {
      displayName: name,
      photoURL: photoURL,
    };
    upadateUserProfile(userInfo)
      .then(() => {})
      .catch((e) => {
        setError(e.message);
      });
  };

  return (
    <div className="hero w-full my-5">
      <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={image} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
          <h1 className="text-5xl font-bold text-center">Sign Up</h1>
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Your Photo URL"
                name="photoURL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
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
            </div>

            <p className="text-emerald-600 font-semibold">{error}</p>

            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn btn-primary text-2xl text-white font-semibold"
                value="Sign Up"
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
            Already have an Account ?
            <Link className="text-emerald-500 font-bold mx-2" to="/login">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
