import Link from "next/link";
import React from "react";

const FeaturedCard = ({ service }) => {
  return (
    <div className="card w-96 bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title">{service.title}</h2>

        <div className="card-actions justify-end">
          <Link href={`${service.title}/${service.title}`}>
            <button className="btn">See Products</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
