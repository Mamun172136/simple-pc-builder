import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ service }) => {
  return (
    <div className=" max-w-sm rounded overflow-hidden shadow-lg">
      <div className="relative h-48">
        <Image
          src={service?.image}
          alt="Product Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{service?.productName}</div>
        <p className="text-gray-700 text-base">Category: {service?.category}</p>
        <p className="text-gray-700 text-base">Price: ${service?.price}</p>
        <p className="text-gray-700 text-base">Status: {service?.status}</p>
        <p className="text-gray-700 text-base">
          Rating: {service.rating} Stars
        </p>
        <Link href={`/${service.title}/${service?._id}`}>
          {" "}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
