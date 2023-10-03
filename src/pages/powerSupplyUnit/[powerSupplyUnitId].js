import Image from "next/image";
import React from "react";

const powerSupplyUnitId = ({ motherboard }) => {
  return (
    <div className="mt-4 p-3 grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Left Column */}
      <div>
        <Image
          src={motherboard?.image}
          alt="Motherboard"
          width={500}
          height={300}
          layout="responsive"
          objectFit="cover"
        />
      </div>

      {/* Right Column */}
      <div>
        <h1 className="text-3xl font-bold mb-4">{motherboard?.productName}</h1>
        <p className="text-gray-700 mb-2">Category: {motherboard?.category}</p>
        <p className="text-gray-700 mb-2">Status: {motherboard?.status}</p>
        <p className="text-gray-700 mb-2">Price: ${motherboard?.price}</p>
        <p className="text-gray-700 mb-2">
          Description: {motherboard?.description}
        </p>

        {/* Key Features */}
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Key Features</h2>
          <ul className="list-disc list-inside">
            {motherboard?.keyFeatures?.brand && (
              <li>Brand: {motherboard?.keyFeatures?.brand}</li>
            )}
            {motherboard?.keyFeatures?.model && (
              <li>Model: {motherboard?.keyFeatures?.model}</li>
            )}
            {motherboard?.keyFeatures?.wattage && (
              <li>Wattage: {motherboard?.keyFeatures?.wattage}</li>
            )}
            {motherboard?.keyFeatures?.efficiency && (
              <li>Efficiency: {motherboard?.keyFeatures?.efficiency}</li>
            )}
            {motherboard?.keyFeatures?.modular && (
              <li>Modular: {motherboard?.keyFeatures?.modular}</li>
            )}
            {motherboard?.keyFeatures?.connectors && (
              <li>
                Connectors:
                <ul>
                  <li>ATX: {motherboard?.keyFeatures?.connectors?.atx}</li>
                  <li>CPU: {motherboard?.keyFeatures?.connectors?.cpu}</li>
                  <li>PCIe: {motherboard?.keyFeatures?.connectors?.pcie}</li>
                  <li>SATA: {motherboard?.keyFeatures?.connectors?.sata}</li>
                  <li>Molex: {motherboard?.keyFeatures?.connectors?.molex}</li>
                </ul>
              </li>
            )}
          </ul>
        </div>

        {/* Ratings and Reviews */}
        <div>
          <p className="text-gray-700 mb-2">
            Individual Rating: {motherboard?.individualRating} Stars
          </p>
          <p className="text-gray-700 mb-2">
            Average Rating: {motherboard?.averageRating} Stars
          </p>

          <h2 className="text-xl font-bold mb-2">Reviews</h2>
          <ul>
            {motherboard.reviews.map((review, index) => (
              <li key={index}>
                <strong>{review?.username}</strong>: {review?.comment} (Rating:{" "}
                {review.rating})
              </li>
            ))}
          </ul>
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/powerSupplyUnits");
  const newses = await res.json();
  console.log(newses);
  const paths = newses?.data.map((news) => ({
    params: { powerSupplyUnitId: news._id },
  }));

  return { paths, fallback: true };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  // const res = await fetch("http://localhost:3000/api/news"); // internal API connected with mongoDB

  const res = await fetch(
    `http://localhost:5000/powerSupplyUnit/${params?.powerSupplyUnitId}`
  ); // --> json server
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      motherboard: data,
      // allNews: data.data, // when using internal API connected with mongoDB
    },
    revalidate: 10,
  };
};

export default powerSupplyUnitId;
