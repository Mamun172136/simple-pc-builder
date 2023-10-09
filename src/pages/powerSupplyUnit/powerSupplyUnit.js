import Card from "@/components/shared/Card";
import React from "react";
import RootLayout from "../../../components/Layouts/RootLayout";

const powerSupplyUnit = ({ motherboards }) => {
  return (
    <div>
      <h1 className="text-3xl p-4">powerSupplyUnit Product</h1>
      <div className=" p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {motherboards?.data.map((service) => (
          <Card key={service.id} service={service}></Card>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  // const res = await fetch("http://localhost:3000/api/news"); // internal API connected with mongoDB
  // const res = await fetch("http://localhost:5000/powerSupplyUnits"); // --> json server
  const res = await fetch(
    "https://simple-pc-builder-server-theta.vercel.app/powerSupplyUnits"
  ); // --> json server
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      motherboards: data,
      // allNews: data.data, // when using internal API connected with mongoDB
    },
    // revalidate: 10,
  };
};

powerSupplyUnit.getLayout = function getLayout(page) {
  return <RootLayout> {page} </RootLayout>;
};

export default powerSupplyUnit;
