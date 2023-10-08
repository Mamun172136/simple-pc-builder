// import Image from "next/image";
// import React from "react";

// const MotherboardId2 = ({ motherboard }) => {
//   return (
//     <div className="mt-4 p-3 grid grid-cols-1 md:grid-cols-2 gap-4">
//       {/* Left Column */}
//       <div>
//         <Image
//           src={motherboard?.image}
//           alt="Motherboard"
//           width={500}
//           height={300}
//           layout="responsive"
//           objectFit="cover"
//         />
//       </div>

//       {/* Right Column */}
//       <div>
//         <h1 className="text-3xl font-bold mb-4">{motherboard?.productName}</h1>
//         <p className="text-gray-700 mb-2">Category: {motherboard?.category}</p>
//         <p className="text-gray-700 mb-2">Status: {motherboard?.status}</p>
//         <p className="text-gray-700 mb-2">Price: ${motherboard?.price}</p>

//         {/* Ratings and Reviews */}
//         <div>
//           <p className="text-gray-700 mb-2">
//             Rating: {motherboard?.individualRating} Stars
//           </p>
//         </div>

//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export const getServerSideProps = async (context) => {
//   const { params } = context;
//   // const res = await fetch("http://localhost:3000/api/news"); // internal API connected with mongoDB

//   const res = await fetch(
//     `http://localhost:5000/motherboard/${params?.MotherboardId2}`
//   ); // --> json server
//   const data = await res.json();
//   // console.log(data);
//   return {
//     props: {
//       motherboard: data,
//       // allNews: data.data, // when using internal API connected with mongoDB
//     },
//     revalidate: 10,
//   };
// };

// export default MotherboardId2;
