import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://usp-dantal-solution-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <Helmet>
        <title>Services |{`Usp Dental`}</title>
      </Helmet>
      <div className="text-center mb-4">
        <p className="text-2xl font-bold text-emerald-500">Services</p>
        <h1 className="text-5xl font-semibold">Our Service</h1>
        <p className="text-slate-500 my-5">
          We provide so many treatment here. if you want to take any service
          please inform our specialist soon.
          <br /> we obiously get perfection form our service. we care about your
          smile
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
