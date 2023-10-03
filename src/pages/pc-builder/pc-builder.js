import FeaturedCard from "@/components/shared/FeaturedCard";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const pcbuilder = () => {
  const data = [
    {
      _id: 1,
      title: "motherboard",
      link: "Motherboard",
    },
    {
      _id: 2,
      title: "ram",
    },
    {
      _id: 3,
      title: "cpu",
    },
    {
      _id: 4,
      title: "powerSupplyUnit",
    },
    {
      _id: 5,
      title: "storage",
    },
    {
      _id: 6,
      title: "monitor",
    },
    {
      _id: 7,
      title: "others",
    },
  ];
  return (
    <div>
      <div className=" p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((service) => (
          <FeaturedCard key={service._id} service={service}></FeaturedCard>
        ))}
      </div>
    </div>
  );
};

export default pcbuilder;
