import FeaturedCard2 from "@/components/shared/FeaturedCard2";
import Navbar from "@/components/shared/Navbar";
import SelectedCard from "@/components/shared/SelectedCard";
import React from "react";
import { useSelector } from "react-redux";
import RootLayout from "../../../components/Layouts/RootLayout";

const Pcbuilder = () => {
  const { products, qnt } = useSelector((state) => state.cart);
  const isCompleteBuild = qnt > 5 && products && products.length > 0;
  const data = [
    {
      _id: 1,
      title: "Motherboard",
      link: "Motherboard2",
    },
    {
      _id: 2,
      title: "Ram",
      link: "Ram2",
    },
    {
      _id: 3,
      title: "Cpu",
      link: "Cpu2",
    },
    {
      _id: 4,
      title: "PowerSupplyUnit",
      link: "PowerSupplyUnit2",
    },
    {
      _id: 5,
      title: "Storage",
      link: "Storage2",
    },
    {
      _id: 6,
      title: "Monitor",
      link: "Monitor2",
    },
    // {
    //   _id: 7,
    //   title: "others",
    // },
  ];
  return (
    // <div>
    //   <div className=" p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    //     {data.map((service) => (
    //       <FeaturedCard2 key={service._id} service={service}></FeaturedCard2>
    //     ))}
    //   </div>
    // </div>

    <div className=" p-4 flex  md:flex-row sm:gap-x-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:gap-x-5 gap-5">
        {data.map((service) => (
          <FeaturedCard2 key={service._id} service={service}></FeaturedCard2>
        ))}
      </div>

      <div className=" ml-10 selectedItem mt-5 md:mt-0 md:col-span-1 lg:col-span-1 ">
        <h1>Total Selected Item count: {qnt} </h1>
        {products && products.length > 0 && (
          <div>
            <p>Selected Items:</p>
            <ul className="list-disc list-inside">
              {products.map((product) => (
                <li key={product.id}>
                  Product Name:{product.productName} && Quantity:{" "}
                  {product?.quantity}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-4">
          <button
            className={`btn ${
              isCompleteBuild
                ? "bg-accent text-accent-content"
                : "bg-gray-300 text-gray-500"
            }`}
            disabled={!isCompleteBuild}
          >
            Complete Build
          </button>
        </div>
      </div>
    </div>

    // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    //   <div>
    //     <FeaturedCard2
    //       service={{ title: "Motherboard", link: "Motherboard2" }}
    //     ></FeaturedCard2>
    //   </div>
    //   <div>
    //     <FeaturedCard2
    //       service={{ title: "Ram", link: "Motherboard2" }}
    //     ></FeaturedCard2>
    //   </div>
    //   <div>
    //     <FeaturedCard2 service={{ title: "cpu", link: "cpu2" }}></FeaturedCard2>
    //   </div>
    //   <div>
    //     <FeaturedCard2
    //       service={{ title: "storage", link: "storage2" }}
    //     ></FeaturedCard2>
    //   </div>
    //   <div>
    //     <FeaturedCard2
    //       service={{ title: "powerSupplyUnit", link: "powerSupplyUnit2" }}
    //     ></FeaturedCard2>
    //   </div>
    //   <div >
    //     <SelectedCard></SelectedCard>
    //   </div>
    //   <div>
    //     <FeaturedCard2
    //       service={{ title: "others", link: "others2" }}
    //     ></FeaturedCard2>
    //   </div>

    //   <FeaturedCard2
    //     service={{ title: "Monitor", link: "Monitor2" }}
    //   ></FeaturedCard2>
    // </div>
  );
};

Pcbuilder.getLayout = function getLayout(page) {
  return <RootLayout> {page} </RootLayout>;
};

export default Pcbuilder;
