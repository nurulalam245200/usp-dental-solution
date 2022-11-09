import React from "react";
import image from "../../../assest/about_us/doctor.jpg";
const About = () => {
  return (
    <div className="hero bg-slate-300 rounded-lg w-3/4 mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={image} alt="" className="rounded-lg w-1/2 shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold mb-5 mt-5">Our Consultent</h1>
          <p className="py-6 text-xl font-semibold ">
            <span className="text-4xl  font-bold text-emerald-600">
              Mrs.Alex Jordar
            </span>
            <br />
            MBBS,FCPS(UK),Fellow(Canada) <br />
            Ex-Professor Texas-Dental-Collage,USA <br />
            Ex-Professor Palarmo Dental Institiute,Italy <br />
            Contact: +9098978664534
          </p>
          <button className="btn btn-primary">Get Appoinment</button>
        </div>
      </div>
    </div>
  );
};

export default About;
