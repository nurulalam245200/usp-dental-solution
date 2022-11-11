import { FaSadCry } from "react-icons/fa";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Services from "../../Pages/Home/Services/Services";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import UpdateReview from "../../Pages/MyReview/UpdateReview";
import ServiceDeatils from "../../Pages/ServiceDetails/ServiceDeatils";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRouter/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/services/:id",
        element: (
          <PrivateRoute>
            <ServiceDeatils></ServiceDeatils>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://usp-dantal-solution-server.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/myreview",
        element: (
          <PrivateRoute>
            <MyReview></MyReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/updatereview/:id",
        element: (
          <PrivateRoute>
            <UpdateReview></UpdateReview>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://usp-dantal-solution-server.vercel.app/reviews/${params.id}`
          ),
      },
      {
        path: "/addservice",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },

      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "*",
        element: (
          <div className="mt-10 mb-10 w-3/4 mx-auto">
            <FaSadCry className="text-7xl text-center text-red-400"></FaSadCry>
            <p className="text-7xl text-emerald-600 text-center">
              This is Not Our page
            </p>
          </div>
        ),
      },
    ],
  },
]);
