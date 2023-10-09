import Card from "@/components/shared/Card";
import React from "react";

const featured = ({ motherboards }) => {
  return (
    <div>
      <h1 className="text-3xl p-4">Featured Product</h1>
      <div className=" p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {motherboards?.data?.map((service) => (
          <Card key={service.id} service={service}></Card>
        ))}
      </div>
    </div>
  );
};

export default featured;
